import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")


oauth = OAuth(app)

oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration',
)


# Controllers API
@app.route("/")
def home():
    return render_template(
        "home.html",
        session=session.get("user"),
        pretty=json.dumps(session.get("user"), indent=4),
    )


@app.route("/callback", methods=["GET", "POST"])
def callback():
    token = oauth.auth0.authorize_access_token()
    session["user"] = token
    return redirect("/")


@app.route('/login')
def login():
    return auth0.authorize_redirect(redirect_uri=url_for('callback', _external=True))


@app.route("/logout")
def logout():
    session.clear()
    return redirect(
        "https://"
        + env.get("AUTH0_DOMAIN")
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("home", _external=True),
                "client_id": env.get("AUTH0_CLIENT_ID"),
            },
            quote_via=quote_plus,
        )
    )

# open ai
import openai
from flask import Flask, render_template, request, jsonify

openai.api_key = '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'
financial_position = ""

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


    global financial_position
    financial_position = f"You are now a financial advisor. On the right of this chat is an area where the user can enter in their financial information. If it says None, that means the user did not enter that specific field out. Use what they have filled out to answer their questions. Here is their financial position right now:\n\nAge: {age}\nDesired Retirement Age: {desiredRetirementAge}\nDependent Children: {children}\nCredit Score: {creditScore}\nMarital Status: {marital}\nShort Term Goals: {shortTermGoals}\nMedium Term Goals: {mediumTermGoals}\nLong-Term Goals: {longTermGoals}\nYearly Income: {yearlyIncome}\nOther Income: {otherIncome}\nChange in Income: {changeInIncome}\nRent Payment: {rentPayment}\nMortgage Payment: {mortgagePayment}\nProperty Tax: {propertyTax}\nHome Insurance: {homeInsurance}\nHome Maintenance: {homeMaintenance}\nUtilities: {utilities}\nCar Payment: {carPayment}\nFuel or Public Transportation: {fuel}\nCar Maintenance and Repairs: {carMaintenance}\nAuto Insurance Premium: {autoInsurancePremium}\nGroceries: {groceries}\nRestaurants: {restaurants}\nHealth Insurance Premium: {healthInsurancePremium}\nPrescription Medications: {prescriptionMedications}\nDoctor Visits and Co-pays: {doctorVisits}\nHealth Supplements or Treatments: {healthSupplements}\nStudent Loan Payments: {studentLoanPayments}\nPersonal Loan Payments: {personalLoanPayments}\nCredit Card Payments: {creditCardPayments}\nOther Debt Payments: {otherDebtPayments}\nEntertainment and Recreation: {entertainment}\nMiscellaneous Expenses: {miscellaneous}\nCredit Card Debt ($): {creditCardDebt}\nInterest Rate on Credit Cards (%): {interestRateOnCreditCard}\nStudent Loans ($): {studentLoanDebt}\nInterest Rate on Student Loans (%): {interestRateOnStudentLoan}\nTotal Mortgage Debt ($): {mortgageDebt}\nInterest Rate on Mortgages (%): {mortgageRate}\nAuto Loan Debt ($): {autoLoanDebt}\nInterest Rate on Auto Loans (%): {interestRateOnAutoLoan}\nMedical Debt ($): {medicalDebt}\nOther Debt: {otherDebt}\nType of Health Insurance Coverage: {healthInsuranceCoverageType}\nHealth Care Deductible: {deductible}\nHealth Insurance Coverage: {healthInsuranceCoverageAmount}\nType of Life Insurance Coverage: {lifeInsuranceType}\nLife Insurance Coverage: {lifeInsuranceCoverage}\nHomeowners/Renters Coverage Amount: {homeownerInsuranceCoverageAmount}\nAuto Insurance Coverage: {autoInsuranceCoverage}\nDisability Insurance Coverage: {disabilityInsuranceCoverage}\nLong-Term Care Coverage: {longTermCareCoverage}\nEmergency Fund ($): {emergencyFund}\nChecking Accounts ($): {checkingAccounts}\nSavings Accounts ($): {savingsAccounts}\nInterest Rate on Savings Accounts (%): {interestRateOnSavingsAccounts}\nCertificates of Deposit ($): {certificatesOfDeposit}\nInterest Rate on CD (%): {interestRateOnCD}\nMoney Market Accounts ($): {moneyMarketAccounts}\nInterest Rate on MMAs (%): {interestRateOnMMAs}\nCash Management Accounts ($): {cashManagementAccounts}\nInterest Rate on CMAs (%): {interestRateOnCMAs}\nBrokerage Accounts ($): {brokerageAccounts}\n401k ($): {_401kAccounts}\nTraditional IRA ($): {traditionalIRA}\nRoth IRA ($): {rothIRA}\n529 Accounts ($): {_529Accounts}\nEducation Savings Accounts ($): {educationSavingsAccounts}\nHealth Savings Accounts ($): {healthSavingsAccounts}\nTrust Accounts ($): {trustAccounts}\nMonthly Contributions: {monthlyContributions}\nDescription of Securities/Investments: {descriptionOfSecurities}\nRobo-Advisory Accounts ($): {roboAdvisoryAccounts}\nDiscretionary Managed Accounts ($): {discretionaryManagedAccounts}\nHome Equity ($): {homeEquity}\nInvestment Property Equity ($): {investmentPropertyEquity}\nDescribe Real Estate Investments Further: {describeRealEstateInvestments}\nOther Investments: {otherInvestments}\nGold (oz): {goldHoldings}\nSilver (oz): {silverHoldings}\nPlatinum (oz): {platinumHoldings}\nPalladium (oz): {palladiumHoldings}\nForm of Precious Metal Holdings: {formOfPreciousMetalHoldings}"
    print(financial_position)

    return "Form data received."


# ai model

messages = [
    {"role": "system", "content": "You are a financial advisor. Ask for financial advice."},
    {"role": "system", "content": financial_position},
    {"role": "user", "content": ""}
]

@app.route('/get', methods=['POST'])
def get_bot_response():
    userText = request.form.get('msg')

    # Update the messages list with the updated financial_position variable
    messages[-2]["content"] = financial_position

    messages[-1]["content"] = userText  # Update the user message in the messages list
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    reply = response.choices[0].message["content"]
    messages.append({"role": "user", "content": ""})  # Add an empty user message for the next turn
    messages.append({"role": "assistant", "content": reply})
    return reply


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))

