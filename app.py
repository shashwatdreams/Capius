from flask import Flask, jsonify, render_template, request, session, redirect, url_for
import os 
import stripe 
from dotenv import load_dotenv
from firebase_admin import credentials, firestore, initialize_app, auth
import json
import pyrebase

load_dotenv()


app = Flask(__name__)
app.secret_key = 'xyzsdfg'

# Firebase Config 
f = open('fbconfig.json')
config = json.load(f)

# Initialize Firestore DB
cred = credentials.Certificate('credentials.json')
default_app = initialize_app(cred)
db = firestore.client()
subscription_ref = db.collection('subscriptions')
user_ref = db.collection('users')

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()







stripe_keys = {
    "secret_key": os.getenv("STRIPE_SECRET_KEY"),
    "publishable_key": os.getenv("STRIPE_PUBLISHABLE_KEY"),
    "endpoint_secret": os.getenv("STRIPE_ENDPOINT_SECRET")
}


PRICE_API_ID= os.getenv("PRICE_API_ID")
DOMAIN_URL = os.getenv("DOMAIN_URL")


""" Removed from this version"""
# user_id = "1" #testing purpose 



class Subscription():

   

    def create(self,subid,payment_data):
        try:
            id = subid
            data={"payment":payment_data}
            a = subscription_ref.document(id).set(data)
            print(a)
            return jsonify({"success": True}), 200
        except Exception as e:
            return f"An Error Occured: {e}"
        
    
        
class User():

    def create(self,userid):
        try:
            id = userid
            data={"subscribed":False, "message":0,"subscription_id":""}
            user_ref.document(id).set(data)
            return jsonify({"success": True}), 200
        except Exception as e:
            return f"An Error Occured: {e}"
        
    def update(self, userid, message, subscription_status=None,  subscription_id=None):
        try:
            id = userid
            if subscription_id!=None:
               data={"subscribed":subscription_status, "message":message,"subscription_id":subscription_id}
            else:
                if subscription_status!=None:
                   data={"subscribed":subscription_status, "message":message}
                else:
                    data={"message":message}

            user_ref.document(id).update(data)
            return jsonify({"success": True}), 200
        except Exception as e:
            return f"An Error Occured: {e}"


    def find(self, userid):
        try:
            
            
            user = user_ref.document(userid).get()
            return user
            
        except Exception as e:
               return None

    def  get_message_count(self, userid) :
        return self.find(userid).to_dict()["message"] 
       
    def is_susbcribed(self, userid):
        try:  
            return self.find(userid).to_dict()["subscribed"]
        except TypeError:
            return False
    
    def decrease_message_count(self, userid) :
        message_count= self.get_message_count(userid)
        message_count-=1
        if message_count >0:
            self.update(userid, message_count )
            print(message_count)
            return "Message count decreased"

        elif message_count ==0:
            self.update(userid, message_count ,False)
            return "Subscription status changed to False"
        
        else:
            return "Not allowed"

    



#  collection modifying class objects
subscription= Subscription()
user = User()



# This endpoint is used for testing purpose please remove it when in production
@app.route("/user")
def user_func():
   userid=request.args.get("user_id")
   return "decrease_count: "+ str(user.decrease_message_count(userid)) + "<br> message_count : " + str(user.get_message_count(userid))

@app.route("/config")
def get_publishable_key():
    stripe_config = {"publicKey": stripe_keys["publishable_key"]}
    return jsonify(stripe_config)

#---- Obsolete -----------------------#
"""
@app.route("/a")
def index():
    userid=user_id  #testing purpose
    
    sub = user.find(session["user"])
    if sub.exists:
       return render_template("subscribed.html")
       
    else:
        return render_template("index.html")
"""

# ------------------------------------#
    
@app.route("/register", methods=['GET', 'POST'])
def register():
    error_message = None  # Initialize error_message

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        if not email or not password:
            error_message = 'Username and password must not be blank'
        else:
            try:
                user = auth.create_user_with_email_and_password(email, password)
                user_ref.document(user["email"]).set({"subscribed": False, "messages": 0, "subscription_id": ""})
                print("user has been created")
                return redirect(url_for('login'))
            except Exception:
                error_message = 'Email already exists'

    return render_template("register.html", error_message=error_message)

@app.route("/login", methods=['GET', 'POST'])
def login():

    if 'user' in session:
        subscribed = user.find(session["user"]).to_dict()["subscribed"]

        if subscribed:
            return redirect(url_for('dashboard'))

        # If you want different behavior for non-subscribed users, adjust here.
        return redirect(url_for('dashboard'))  # This line will redirect non-subscribed users to the same dashboard for now.

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        try:
            auth.sign_in_with_email_and_password(email, password)
            session['user'] = email
            return redirect(url_for('home'))  # Consider redirecting to the dashboard here if that's your intent.
        except Exception as e:
            print(e)
            error_message = "Incorrect username or password"
            return render_template('login.html', error_message=error_message)


    return render_template('login.html', error_message=None)

@app.route("/logout")
def logout():
    session.pop('user')
    return redirect('/')


@app.route("/create-checkout-session")
def create_checkout_session():
    domain_url = DOMAIN_URL
    stripe.api_key = stripe_keys["secret_key"]

    try:
        # Create new Checkout Session for the order
        # Other optional params include:
        # [billing_address_collection] - to display billing address details on the page
        # [customer] - if you have an existing Stripe Customer ID
        # [payment_intent_data] - capture the payment later
        # [customer_email] - prefill the email input in the form
        # For full details see https://stripe.com/docs/api/checkout/sessions/create

        # ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        checkout_session = stripe.checkout.Session.create(
            success_url=domain_url + "success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url=domain_url + "cancelled",
            payment_method_types=["card"],
            mode="payment",
            line_items=[
                {
                    
                    "price":PRICE_API_ID,
                    "quantity":1
                }
            ]
        )
        return jsonify({"sessionId": checkout_session["id"]})
    except Exception as e:
        return jsonify(error=str(e)), 403

@app.route("/webhook", methods=["POST"])
def stripe_webhook():

    webhook_secret = stripe_keys["endpoint_secret"]
    request_data = json.loads(request.data)
    print(request_data)
    
    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']
        except Exception as e:
            return e
        # Get the type of webhook event sent - used to check the status of PaymentIntents.
        event_type = event['type']
    else:
        data = request_data['data']
        event_type = request_data['type']
    data_object = data['object']

    if event_type == 'checkout.session.completed':
        print('💰 Payment received!')

        payment_data= request_data['data']['object']

        """sub=user.find(session["user"])
        print(sub)
        
        if sub.exists:
            print('subscription updated') 
         """
    
        s= subscription.create(payment_data["id"], payment_data)
        print('subscription created')
            
        

        





    return jsonify({'status': 'success'})


@app.route('/dashboard')
def dashboard():
    try:
        userid = session['user']
        message_count = user.get_message_count(userid)
    except Exception as e:
        message_count = 0  # Default to 0 messages if there's an exception or error

    print("Message Count:", message_count)  # For debugging

    return render_template('dashboard.html', message_count=str(message_count))


@app.route("/success")
def success():
    checkout_id = request.args.get("session_id")
    user.update(session['user'], 500, True, checkout_id)

    try:
        userid = session['user']
        message_count = user.get_message_count(userid)
    except Exception as e:
        message_count = 0  # Default to 0 messages if there's an exception or error

    print("Message Count:", message_count)  # For debugging

    # Render the dashboard template with message_count and a success message
    return render_template("dashboard.html", message_count=message_count, payment_message="Your payment succeeded.")


@app.route("/cancelled")
def cancelled():
    
    try:
        userid = session['user']
        message_count = user.get_message_count(userid)
    except Exception as e:
        message_count = 0  # Default to 0 messages if there's an exception or error

    print("Message Count:", message_count)  # For debugging


    return render_template("dashboard.html", message_count=message_count, payment_message="Your payment was cancelled.")

# where the old starts
from flask import Flask, render_template, request, jsonify
import openai

openai.api_key = ''
financial_position = ""
is_quick_visible = "true"
mode = "quick"

## landing page
@app.route("/")
def home():
    is_logged_in = 'user' in session
    print("Is logged in:", is_logged_in)  # For debugging
    return render_template("index.html", is_logged_in=is_logged_in)

@app.route("/home")
def landing():
    is_logged_in = 'user' in session
    return render_template("index.html", is_logged_in=is_logged_in)

@app.route("/chat")
def chat():
    is_logged_in = 'user' in session
    print("Is logged in:", is_logged_in)  # For debugging
    return render_template("chat.html", is_logged_in=is_logged_in)

@app.route("/pricing")
def pricing():
    is_logged_in = 'user' in session
    return render_template("pricing.html", is_logged_in=is_logged_in)

@app.route("/terms")
def terms():
    is_logged_in = 'user' in session
    return render_template("terms-and-conditions.html", is_logged_in=is_logged_in)

@app.route("/privacy")
def privacy():
    is_logged_in = 'user' in session
    return render_template("privacy-policy.html", is_logged_in=is_logged_in)

@app.route("/products")
def products():
    is_logged_in = 'user' in session
    return render_template("products.html", is_logged_in=is_logged_in)

@app.route('/set_mode', methods=['POST']) # logic behind quick/full bars
def set_mode():
    global mode
    mode = request.form.get('mode', '')
    print("Is quick visible: " + mode)
    return "mode set"

# prompt and passing variables
@app.route('/submit_form', methods=['POST'])
def submit_form():
    # personal information
    age = request.form.get('age')
    desiredRetirementAge = request.form.get('desiredRetirementAge')
    children = request.form.get('children')
    creditScore = request.form.get('creditScore')
    marital = request.form.get('marital')

    # income
    yearlyIncome = request.form.get('yearlyIncome')
    otherIncome = request.form.get('otherIncome')
    changeInIncome = request.form.get('changeInIncome')

    # goals
    shortTermGoals = request.form.get('shortTermGoals')
    mediumTermGoals = request.form.get('mediumTermGoals')
    longTermGoals = request.form.get('longTermGoals')

    # expenses
    rentPayment = request.form.get('rentPayment')
    mortgagePayment = request.form.get('mortgagePayment')
    propertyTax = request.form.get('propertyTax')
    homeInsurance = request.form.get('homeInsurance')
    homeMaintenance = request.form.get('homeMaintenance')
    utilities = request.form.get('utilities')
    carPayment = request.form.get('carPayment')
    fuel = request.form.get('fuel')
    carMaintenance = request.form.get('carMaintenance')
    autoInsurancePremium = request.form.get('autoInsurancePremium')
    groceries = request.form.get('groceries')
    restaurants = request.form.get('restaurants')
    healthInsurancePremium = request.form.get('healthInsurancePremium')
    prescriptionMedications = request.form.get('prescriptionMedications')
    doctorVisits = request.form.get('doctorVisits')
    healthSupplements = request.form.get('healthSupplements')
    studentLoanPayments = request.form.get('studentLoanPayments')
    personalLoanPayments = request.form.get('personalLoanPayments')
    creditCardPayments = request.form.get('creditCardPayments')
    otherDebtPayments = request.form.get('otherDebtPayments')
    entertainment = request.form.get('entertainment')
    miscellaneous = request.form.get('miscellaneous')

    # debt
    creditCardDebt = request.form.get('creditCardDebt')
    interestRateOnCreditCard = request.form.get('interestRateOnCreditCard')
    studentLoanDebt = request.form.get('studentLoanDebt')
    interestRateOnStudentLoan = request.form.get('interestRateOnStudentLoan')
    mortgageDebt = request.form.get('mortgageDebt')
    mortgageRate = request.form.get('mortgageRate')
    autoLoanDebt = request.form.get('autoLoanDebt')
    interestRateOnAutoLoan = request.form.get('interestRateOnAutoLoan')
    medicalDebt = request.form.get('medicalDebt')
    otherDebt = request.form.get('otherDebt')

    # insurance
    healthInsuranceCoverageType = request.form.get('healthInsuranceCoverageType')
    deductible = request.form.get('deductible')
    healthInsuranceCoverageAmount = request.form.get('healthInsuranceCoverageAmount')
    lifeInsuranceType = request.form.get('lifeInsuranceType')
    lifeInsuranceCoverage = request.form.get('lifeInsuranceCoverage')
    homeownerInsuranceCoverageAmount = request.form.get('homeownerInsuranceCoverageAmount')
    autoInsuranceCoverage = request.form.get('autoInsuranceCoverage')
    disabilityInsuranceCoverage = request.form.get('disabilityInsuranceCoverage')
    longTermCareCoverage = request.form.get('longTermCareCoverage')

    # savings
    emergencyFund = request.form.get('emergencyFund')
    checkingAccounts = request.form.get('checkingAccounts')
    savingsAccounts = request.form.get('savingsAccounts')
    interestRateOnSavingsAccounts = request.form.get('interestRateOnSavingsAccounts')
    certificatesOfDeposit = request.form.get('certificatesOfDeposit')
    interestRateOnCD = request.form.get('interestRateOnCD')
    moneyMarketAccounts = request.form.get('moneyMarketAccounts')
    interestRateOnMMAs = request.form.get('interestRateOnMMAs')
    cashManagementAccounts = request.form.get('cashManagementAccounts')
    interestRateOnCMAs = request.form.get('interestRateOnCMAs')

    # investments
    brokerageAccounts = request.form.get('brokerageAccounts')
    _401kAccounts = request.form.get('_401kAccounts')
    traditionalIRA = request.form.get('traditionalIRA')
    rothIRA = request.form.get('rothIRA')
    _529Accounts = request.form.get('_529Accounts')
    educationSavingsAccounts = request.form.get('educationSavingsAccounts')
    healthSavingsAccounts = request.form.get('healthSavingsAccounts')
    trustAccounts = request.form.get('trustAccounts')
    monthlyContributions = request.form.get('monthlyContributions')
    descriptionOfSecurities = request.form.get('descriptionOfSecurities')
    roboAdvisoryAccounts = request.form.get('roboAdvisoryAccounts')
    discretionaryManagedAccounts = request.form.get('discretionaryManagedAccounts')
    homeEquity = request.form.get('homeEquity')
    investmentPropertyEquity = request.form.get('investmentPropertyEquity')
    describeRealEstateInvestments = request.form.get('describeRealEstateInvestments')
    otherInvestments = request.form.get('otherInvestments')

    # commodities
    goldHoldings = request.form.get('goldHoldings')
    silverHoldings = request.form.get('silverHoldings')
    platinumHoldings = request.form.get('platinumHoldings')
    palladiumHoldings = request.form.get('palladiumHoldings')
    formOfPreciousMetalHoldings = request.form.get('formOfPreciousMetalHoldings')

    # extras for quick
    quickYearlyIncome = request.form.get("quickYearlyIncome")
    quickExpenses = request.form.get('quickExpenses')
    quickDebt = request.form.get('quickDebt')
    quickInvestments = request.form.get('quickInvestments')
    investmentsDebt = request.form.get('investmentsDebt')

    quickAge = request.form.get("quickAge")
    quickRetirementAge = request.form.get("quickRetirementAge")
    quickChildren = request.form.get("quickChildren")
    quickScore = request.form.get("quickScore")
    quickMarital = request.form.get("quickMarital")
    quickShortTermGoals = request.form.get("quickShortTermGoals")
    quickMediumTermGoals = request.form.get("quickMediumTermGoals")
    quickLongTermGoals = request.form.get("quickLongTermGoals")

    global financial_position
    if mode == 'quick':
        financial_position = f"You are now a financial advisor. On the right of this chat is an area where the user can enter in their financial information. There are two modes, right now, the user is in quick mode. If any of the specific field's say None, that means the user did not enter that out. Use what they have filled out to answer their questions. If asked for specific security prices, repsond to check Yahoo Finance or Bloomberg since you don't have access to that data. Be specific, concrete, and use numbers. \n Here is their financial situation right now: \n Age: {quickAge}\nDesired Retirement Age: {quickRetirementAge}\nDependent Children: {quickChildren}\nCredit Score: {quickScore}\nMarital Status: {quickMarital}\nYearly Income: {quickYearlyIncome}\n Monthly Expenses: {quickExpenses} \n Total Debt: {quickDebt} \nTotal Investments: {quickInvestments}\n Describe Investments and Debt Further: {investmentsDebt}\n Short-Term Goals: {quickShortTermGoals}\nMedium-Term Goals {quickMediumTermGoals}\nLong-Term Goals: {quickLongTermGoals}"
    if mode == 'full':
        financial_position = f"You are now a financial advisor. On the right of this chat is an area where the user can enter in their financial information. If it says None, that means the user did not enter that specific field out. Use what they have filled out to answer their questions. Here is their financial position right now:\n\nAge: {age}\nDesired Retirement Age: {desiredRetirementAge}\nDependent Children: {children}\nCredit Score: {creditScore}\nMarital Status: {marital}\nShort Term Goals: {shortTermGoals}\nMedium Term Goals: {mediumTermGoals}\nLong-Term Goals: {longTermGoals}\nYearly Income: {yearlyIncome}\nOther Income: {otherIncome}\nChange in Income: {changeInIncome}\nRent Payment: {rentPayment}\nMortgage Payment: {mortgagePayment}\nProperty Tax: {propertyTax}\nHome Insurance: {homeInsurance}\nHome Maintenance: {homeMaintenance}\nUtilities: {utilities}\nCar Payment: {carPayment}\nFuel or Public Transportation: {fuel}\nCar Maintenance and Repairs: {carMaintenance}\nAuto Insurance Premium: {autoInsurancePremium}\nGroceries: {groceries}\nRestaurants: {restaurants}\nHealth Insurance Premium: {healthInsurancePremium}\nPrescription Medications: {prescriptionMedications}\nDoctor Visits and Co-pays: {doctorVisits}\nHealth Supplements or Treatments: {healthSupplements}\nStudent Loan Payments: {studentLoanPayments}\nPersonal Loan Payments: {personalLoanPayments}\nCredit Card Payments: {creditCardPayments}\nOther Debt Payments: {otherDebtPayments}\nEntertainment and Recreation: {entertainment}\nMiscellaneous Expenses: {miscellaneous}\nCredit Card Debt ($): {creditCardDebt}\nInterest Rate on Credit Cards (%): {interestRateOnCreditCard}\nStudent Loans ($): {studentLoanDebt}\nInterest Rate on Student Loans (%): {interestRateOnStudentLoan}\nTotal Mortgage Debt ($): {mortgageDebt}\nInterest Rate on Mortgages (%): {mortgageRate}\nAuto Loan Debt ($): {autoLoanDebt}\nInterest Rate on Auto Loans (%): {interestRateOnAutoLoan}\nMedical Debt ($): {medicalDebt}\nOther Debt: {otherDebt}\nType of Health Insurance Coverage: {healthInsuranceCoverageType}\nHealth Care Deductible: {deductible}\nHealth Insurance Coverage: {healthInsuranceCoverageAmount}\nType of Life Insurance Coverage: {lifeInsuranceType}\nLife Insurance Coverage: {lifeInsuranceCoverage}\nHomeowners/Renters Coverage Amount: {homeownerInsuranceCoverageAmount}\nAuto Insurance Coverage: {autoInsuranceCoverage}\nDisability Insurance Coverage: {disabilityInsuranceCoverage}\nLong-Term Care Coverage: {longTermCareCoverage}\nEmergency Fund ($): {emergencyFund}\nChecking Accounts ($): {checkingAccounts}\nSavings Accounts ($): {savingsAccounts}\nInterest Rate on Savings Accounts (%): {interestRateOnSavingsAccounts}\nCertificates of Deposit ($): {certificatesOfDeposit}\nInterest Rate on CD (%): {interestRateOnCD}\nMoney Market Accounts ($): {moneyMarketAccounts}\nInterest Rate on MMAs (%): {interestRateOnMMAs}\nCash Management Accounts ($): {cashManagementAccounts}\nInterest Rate on CMAs (%): {interestRateOnCMAs}\nBrokerage Accounts ($): {brokerageAccounts}\n401k ($): {_401kAccounts}\nTraditional IRA ($): {traditionalIRA}\nRoth IRA ($): {rothIRA}\n529 Accounts ($): {_529Accounts}\nEducation Savings Accounts ($): {educationSavingsAccounts}\nHealth Savings Accounts ($): {healthSavingsAccounts}\nTrust Accounts ($): {trustAccounts}\nMonthly Contributions: {monthlyContributions}\nDescription of Securities/Investments: {descriptionOfSecurities}\nRobo-Advisory Accounts ($): {roboAdvisoryAccounts}\nDiscretionary Managed Accounts ($): {discretionaryManagedAccounts}\nHome Equity ($): {homeEquity}\nInvestment Property Equity ($): {investmentPropertyEquity}\nDescribe Real Estate Investments Further: {describeRealEstateInvestments}\nOther Investments: {otherInvestments}\nGold (oz): {goldHoldings}\nSilver (oz): {silverHoldings}\nPlatinum (oz): {platinumHoldings}\nPalladium (oz): {palladiumHoldings}\nForm of Precious Metal Holdings: {formOfPreciousMetalHoldings}"
    return "Form data received."

# ai model
messages = [
    {"role": "system", "content": "You are a financial advisor. Provide concrete, data-driven financial advice based on the user's financial profile. When talking about investments, recommend specific securities where appropriate. Use numbers, and explain the math and compound interest calculations. Be very specific, use the information provided to help the user reach their goals, and tell them exactly what to do to get there, including recommending specific securities and other ivnestments. You can get 4 percent savings rate at Ally Bank or other online banks. At the end of your message, remember to say to always say that this is just an AI and doesn't hold any real certifications and recommend talking with a financial professional."},
    {"role": "system", "content": financial_position},
    {"role": "user", "content": ""}
]

@app.route('/get', methods=['POST'])
def get_bot_response():
    try:
        userid = session['user']
        userText = request.form.get('msg')

        messages[-2]["content"] = financial_position
        messages[-1]["content"] = userText # Update the user message in the messages list

        response = openai.ChatCompletion.create(
            model="gpt-4:capius::7rZgCaQ9",
            messages=messages,
            temperature=0.5
        )
        
        if user.is_susbcribed(userid):
            reply = response.choices[0].message["content"]
            messages.append({"role": "user", "content": ""}) # Add an empty user message for the next turn
            messages.append({"role": "assistant", "content": reply})

            user.decrease_message_count(userid) # function to decrease the message counter

            return reply
        else:
            return "You have no messages left. You can purchase more by clicking 'My Account' on the top right."

    except KeyError: # This handles the KeyError for session['user'] not existing
        return "You aren't currently signed in. You can sign in by clicking login or register at the top right."
    
if __name__ == "__main__":
    app.run(port=5000, threaded=True)
