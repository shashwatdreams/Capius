// script for passing variables test
setInterval(function() {
  let age = $("#age").val();
  let desiredRetirementAge = $("#desiredRetirementAge").val();
  let children = $("#children").val();
  let creditScore = $("#creditScore").val();
  let marital = $("#marital").val();

  // goals
  let shortTermGoals = $("#shortTermGoals").val() // goals
  let mediumTermGoals = $("#mediumTermGoals").val()
  let longTermGoals = $("#longTermGoals").val()
  
  // income
  let yearlyIncome = $('#yearlyIncome').val()
  let otherIncome = $('#otherIncome').val()
  let changeInIncome = $('#changeInIncome').val()
  
  let rentPayment = $("#rentPayment").val();
  let mortgagePayment = $("#mortgagePayment").val();
  let propertyTax = $("#propertyTax").val();
  let homeInsurance = $("#homeInsurance").val();
  let homeMaintenance = $("#homeMaintenance").val();
  let utilities = $("#utilities").val();
  let carPayment = $("#carPayment").val();
  let fuel = $("#fuel").val();
  let carMaintenance = $("#carMaintenance").val();
  let autoInsurancePremium = $("#autoInsurancePremium").val();
  let groceries = $("#groceries").val();
  let restaurants = $("#restaurants").val();
  let healthInsurancePremium = $("#healthInsurancePremium").val();
  let prescriptionMedications = $("#prescriptionMedications").val();
  let doctorVisits = $("#doctorVisits").val();
  let healthSupplements = $("#healthSupplements").val();
  let studentLoanPayments = $("#studentLoanPayments").val();
  let personalLoanPayments = $("#personalLoanPayments").val();
  let creditCardPayments = $("#creditCardPayments").val();
  let otherDebtPayments = $("#otherDebtPayments").val();
  let entertainment = $("#entertainment").val();
  let miscellaneous = $("#miscellaneous").val();
  let creditCardDebt = $("#creditCard").val();
  let interestRateOnCreditCard = $("#interestRateOnCreditCard").val();
  let studentLoanDebt = $("#studentLoan").val();
  let interestRateOnStudentLoan = $("#interestRateOnStudentLoan").val();
  let mortgageDebt = $("#mortgageDebt").val();
  let mortgageRate = $("#mortgageRate").val();
  let autoLoanDebt = $("#autoLoan").val();
  let interestRateOnAutoLoan = $("#interestRateOnAutoLoan").val();
  let medicalDebt = $("#personalLoan").val();
  let otherDebt = $("#otherDebt").val();
  let healthInsuranceCoverageType = $("#healthInsurance").val();
  let deductible = $("#deductible").val();
  let healthInsuranceCoverageAmount = $("#healthInsuranceCoverage").val();
  let lifeInsuranceType = $("#lifeInsurance").val();
  let lifeInsuranceCoverage = $("#lifeInsuranceCoverage").val();
  let homeownerInsuranceCoverageAmount = $("#homeownerInsuranceCoverage").val();
  let autoInsuranceCoverage = $("#autoInsuranceCoverage").val();
  let disabilityInsuranceCoverage = $("#disability").val();
  let longTermCareCoverage = $("#longterm").val();
  let emergencyFund = $("#emergencyFund").val();
  let checkingAccounts = $("#checkingAccounts").val();
  let savingsAccounts = $("#savingsAccounts").val();
  let interestRateOnSavingsAccounts = $("#interestSavingsAccounts").val();
  let certificatesOfDeposit = $("#cd").val();
  let interestRateOnCD = $("#cdRate").val();
  let moneyMarketAccounts = $("#moneyMarket").val();
  let interestRateOnMMAs = $("#mmRate").val();
  let cashManagementAccounts = $("#cma").val();
  let interestRateOnCMAs = $("#cmaRate").val();
  let brokerageAccounts = $("#brokerageAccount").val();
  let _401kAccounts = $("#401k").val();
  let traditionalIRA = $("#traditionalIRA").val();
  let rothIRA = $("#rothIRA").val();
  let _529Accounts = $("#529").val();
  let educationSavingsAccounts = $("#ESA").val();
  let healthSavingsAccounts = $("#HSA").val();
  let trustAccounts = $("#Trust").val();
  let monthlyContributions = $("#monthlyContribution").val();
  let descriptionOfSecurities = $("#descriptionOfSecurities").val();
  let roboAdvisoryAccounts = $("#robo").val();
  let discretionaryManagedAccounts = $("#discretionaryAccounts").val();
  let homeEquity = $("#homeEquity").val();
  let investmentPropertyEquity = $("#investmentPropertyEquity").val();
  let describeRealEstateInvestments = $("#describeRealEstate").val();
  let otherInvestments = $("#otherInvestments").val();
  let goldHoldings = $("#gold").val();
  let silverHoldings = $("#silver").val();
  let platinumHoldings = $("#platinum").val();
  let palladiumHoldings = $("#palladium").val();
  let formOfPreciousMetalHoldings = $("#formPrecious").val();
  // extras for quick
  let quickAge = $("#quickAge").val();
  let quickRetirementAge = $("#quickRetirementAge").val();
  let quickChildren = $("#quickChildren").val();
  let quickScore = $("#quickScore").val();
  let quickMarital = $("#quickMarital").val();

  let quickShortTermGoals = $("#quickShortTermGoals").val();
  let quickMediumTermGoals = $("#quickMediumTermGoals").val();
  let quickLongTermGoals = $("#quickLongTermGoals").val();

  let quickYearlyIncome = $("#quickYearlyIncome").val();
  let quickExpenses = $("#quickExpenses").val();
  let quickInvestments = $("#quickInvestments").val();
  let quickDebt = $("#quickDebt").val();
  let investmentsDebt = $("#investmentsDebt").val();


  
  // POST request to /submit_form
  $.post("/submit_form", {
    age: age,
    desiredRetirementAge: desiredRetirementAge,
    children: children,
    creditScore: creditScore,
    marital: marital,
    shortTermGoals: shortTermGoals,
    mediumTermGoals: mediumTermGoals,
    longTermGoals: longTermGoals,
    rentPayment: rentPayment,
    mortgagePayment: mortgagePayment,
    propertyTax: propertyTax,
    homeInsurance: homeInsurance,
    homeMaintenance: homeMaintenance,
    utilities: utilities,
    carPayment: carPayment,
    fuel: fuel,
    carMaintenance: carMaintenance,
    autoInsurancePremium: autoInsurancePremium,
    groceries: groceries,
    restaurants: restaurants,
    healthInsurancePremium: healthInsurancePremium,
    prescriptionMedications: prescriptionMedications,
    doctorVisits: doctorVisits,
    healthSupplements: healthSupplements,
    studentLoanPayments: studentLoanPayments,
    personalLoanPayments: personalLoanPayments,
    creditCardPayments: creditCardPayments,
    otherDebtPayments: otherDebtPayments,
    entertainment: entertainment,
    miscellaneous: miscellaneous,
    creditCardDebt: creditCardDebt,
    interestRateOnCreditCard: interestRateOnCreditCard,
    studentLoanDebt: studentLoanDebt,
    interestRateOnStudentLoan: interestRateOnStudentLoan,
    mortgageDebt: mortgageDebt,
    mortgageRate: mortgageRate,
    autoLoanDebt: autoLoanDebt,
    interestRateOnAutoLoan: interestRateOnAutoLoan,
    medicalDebt: medicalDebt,
    otherDebt: otherDebt,
    healthInsuranceCoverageType: healthInsuranceCoverageType,
    deductible: deductible,
    healthInsuranceCoverageAmount: healthInsuranceCoverageAmount,
    lifeInsuranceType: lifeInsuranceType,
    lifeInsuranceCoverage: lifeInsuranceCoverage,
    homeownerInsuranceCoverageAmount: homeownerInsuranceCoverageAmount,
    autoInsuranceCoverage: autoInsuranceCoverage,
    disabilityInsuranceCoverage: disabilityInsuranceCoverage,
    longTermCareCoverage: longTermCareCoverage,
    emergencyFund: emergencyFund,
    checkingAccounts: checkingAccounts,
    savingsAccounts: savingsAccounts,
    interestRateOnSavingsAccounts: interestRateOnSavingsAccounts,
    certificatesOfDeposit: certificatesOfDeposit,
    interestRateOnCD: interestRateOnCD,
    moneyMarketAccounts: moneyMarketAccounts,
    interestRateOnMMAs: interestRateOnMMAs,
    cashManagementAccounts: cashManagementAccounts,
    interestRateOnCMAs: interestRateOnCMAs,
    brokerageAccounts: brokerageAccounts,
    _401kAccounts: _401kAccounts,
    traditionalIRA: traditionalIRA,
    rothIRA: rothIRA,
    _529Accounts: _529Accounts,
    educationSavingsAccounts: educationSavingsAccounts,
    healthSavingsAccounts: healthSavingsAccounts,
    trustAccounts: trustAccounts,
    monthlyContributions: monthlyContributions,
    descriptionOfSecurities: descriptionOfSecurities,
    roboAdvisoryAccounts: roboAdvisoryAccounts,
    discretionaryManagedAccounts: discretionaryManagedAccounts,
    homeEquity: homeEquity,
    investmentPropertyEquity: investmentPropertyEquity,
    describeRealEstateInvestments: describeRealEstateInvestments,
    otherInvestments: otherInvestments,
    goldHoldings: goldHoldings,
    silverHoldings: silverHoldings,
    platinumHoldings: platinumHoldings,
    palladiumHoldings: palladiumHoldings,
    formOfPreciousMetalHoldings: formOfPreciousMetalHoldings,
    yearlyIncome: yearlyIncome,
    otherIncome: otherIncome,
    changeInIncome: changeInIncome,
    quickYearlyIncome: quickYearlyIncome,
    quickExpenses: quickExpenses,
    quickDebt: quickDebt,
    quickInvestments: quickInvestments,
    investmentsDebt: investmentsDebt,
    quickAge: quickAge,
    quickRetirementAge: quickRetirementAge,
    quickChildren: quickChildren,
    quickScore: quickScore,
    quickMarital: quickMarital,
    quickShortTermGoals: quickShortTermGoals,
    quickMediumTermGoals: quickMediumTermGoals,
    quickLongTermGoals: quickLongTermGoals
  }, function(data, status) {

    // This function runs when the server responds
    // 'data' holds the server's response, and 'status' holds the status code
    console.log("Data: " + data + "\nStatus: " + status);
  });
}, 5000);  // 5000 milliseconds

let userFirstMessage = true; // Flag to check if it's the user's first message

function getReply() {
  var userText = $("#textInput").val();
  $("#textInput").val("");

  if (userFirstMessage) {
      // Display the user's first message
      $("#ogchatbox").append(`
          <div class="message-container">
              <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="User" class="message-image">
              <p class="user-message">You: ${userText}</p>
          </div>
      `);
      userFirstMessage = false;
  } else {
      $("#ogchatbox").append(`
          <div class="message-container">
              <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="User" class="message-image">
              <p class="user-message">You: ${userText}</p>
          </div>
      `);
  }

  // Display the typing animation immediately after the user's message
  $("#ogchatbox").append(`
      <div class="message-container typing-animation">
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Robot-512.png" alt="Bot" class="message-image">
          <div class="bot-message typing-dots">
              <span></span><span></span><span></span>
          </div>
      </div>
  `);

  $.post("/get", { msg: userText })
      .done(function (botReply) {
          // Replace the typing animation with the bot's response
          $(".typing-animation .typing-dots").remove();
          $(".typing-animation").append(`
              <p class="bot-message">Assistant: ${botReply}</p>
          `);
          $(".typing-animation").removeClass("typing-animation");
      });
}

$(document).ready(function() {
  // Add typing animation for the bot when the webpage loads
  $("#ogchatbox").append(`
      <div class="message-container typing-animation">
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Robot-512.png" alt="Bot" class="message-image">
          <div class="bot-message typing-dots">
              <span></span><span></span><span></span>
          </div>
      </div>
  `);

  // Replace the typing animation with the greeting message after a delay (e.g., 2 seconds)
  setTimeout(function() {
      $(".typing-animation .typing-dots").remove();
      $(".typing-animation").append(`
          <p class="bot-message">Assistant: Hello! My name is Capius. How may I help you today?</p>
      `);
      $(".typing-animation").removeClass("typing-animation");
  }, 2000);
});