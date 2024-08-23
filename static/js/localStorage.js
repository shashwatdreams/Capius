// Check for localStorage support
if (typeof(Storage) !== "undefined") {
    // When the document is loaded retrieve any stored values
    document.addEventListener('DOMContentLoaded', (event) => {
        if (localStorage.getItem('age')) {
            document.getElementById('age').value = localStorage.getItem('age');
        }
        if (localStorage.getItem('desiredRetirementAge')) {
            document.getElementById('desiredRetirementAge').value = localStorage.getItem('desiredRetirementAge');
        }
        if (localStorage.getItem('children')) {
            document.getElementById('children').value = localStorage.getItem('children');
        }
        if (localStorage.getItem('creditScore')) {
            document.getElementById('creditScore').value = localStorage.getItem('creditScore');
        }
        if (localStorage.getItem('marital')) {
            document.getElementById('marital').value = localStorage.getItem('marital');
        }
        if (localStorage.getItem('shortTermGoals')) {
            document.getElementById('shortTermGoals').value = localStorage.getItem('shortTermGoals');
        }
        if (localStorage.getItem('mediumTermGoals')) {
            document.getElementById('mediumTermGoals').value = localStorage.getItem('mediumTermGoals');
        }
        if (localStorage.getItem('longTermGoals')) {
            document.getElementById('longTermGoals').value = localStorage.getItem('longTermGoals');
        }
        if (localStorage.getItem('yearlyIncome')) {
            document.getElementById('yearlyIncome').value = localStorage.getItem('yearlyIncome');
        }
        if (localStorage.getItem('otherIncome')) {
            document.getElementById('otherIncome').value = localStorage.getItem('otherIncome');
        }
        if (localStorage.getItem('changeInIncome')) {
            document.getElementById('changeInIncome').value = localStorage.getItem('changeInIncome');
        }
        if (localStorage.getItem('rentPayment')) {
            document.getElementById('rentPayment').value = localStorage.getItem('rentPayment');
        }
        if (localStorage.getItem('mortgagePayment')) {
            document.getElementById('mortgagePayment').value = localStorage.getItem('mortgagePayment');
        }
        if (localStorage.getItem('propertyTax')) {
            document.getElementById('propertyTax').value = localStorage.getItem('propertyTax');
        }
        if (localStorage.getItem('homeInsurance')) {
            document.getElementById('homeInsurance').value = localStorage.getItem('homeInsurance');
        }
        if (localStorage.getItem('homeMaintenance')) {
            document.getElementById('homeMaintenance').value = localStorage.getItem('homeMaintenance');
        }
        if (localStorage.getItem('utilities')) {
            document.getElementById('utilities').value = localStorage.getItem('utilities');
        }
        if (localStorage.getItem('carPayment')) {
            document.getElementById('carPayment').value = localStorage.getItem('carPayment');
        }
        if (localStorage.getItem('fuel')) {
            document.getElementById('fuel').value = localStorage.getItem('fuel');
        }
        if (localStorage.getItem('carMaintenance')) {
            document.getElementById('carMaintenance').value = localStorage.getItem('carMaintenance');
        }
        if (localStorage.getItem('autoInsurancePremium')) {
            document.getElementById('autoInsurancePremium').value = localStorage.getItem('autoInsurancePremium');
        }
        if (localStorage.getItem('groceries')) {
            document.getElementById('groceries').value = localStorage.getItem('groceries');
        }
        if (localStorage.getItem('restaurants')) {
            document.getElementById('restaurants').value = localStorage.getItem('restaurants');
        }
        if (localStorage.getItem('healthInsurancePremium')) {
            document.getElementById('healthInsurancePremium').value = localStorage.getItem('healthInsurancePremium');
        }
        if (localStorage.getItem('prescriptionMedications')) {
            document.getElementById('prescriptionMedications').value = localStorage.getItem('prescriptionMedications');
        }
        if (localStorage.getItem('doctorVisits')) {
            document.getElementById('doctorVisits').value = localStorage.getItem('doctorVisits');
        }
        if (localStorage.getItem('healthSupplements')) {
            document.getElementById('healthSupplements').value = localStorage.getItem('healthSupplements');
        }
        if (localStorage.getItem('studentLoanPayments')) {
            document.getElementById('studentLoanPayments').value = localStorage.getItem('studentLoanPayments');
        }
        if (localStorage.getItem('personalLoanPayments')) {
            document.getElementById('personalLoanPayments').value = localStorage.getItem('personalLoanPayments');
        }
        if (localStorage.getItem('creditCardPayments')) {
            document.getElementById('creditCardPayments').value = localStorage.getItem('creditCardPayments');
        }
        if (localStorage.getItem('otherDebtPayments')) {
            document.getElementById('otherDebtPayments').value = localStorage.getItem('otherDebtPayments');
        }
        if (localStorage.getItem('entertainment')) {
            document.getElementById('entertainment').value = localStorage.getItem('entertainment');
        }
        if (localStorage.getItem('miscellaneous')) {
            document.getElementById('miscellaneous').value = localStorage.getItem('miscellaneous');
        }
        if (localStorage.getItem('creditCard')) {
            document.getElementById('creditCard').value = localStorage.getItem('creditCard');
        }
        if (localStorage.getItem('interestRateOnCreditCard')) {
            document.getElementById('interestRateOnCreditCard').value = localStorage.getItem('interestRateOnCreditCard');
        }
        if (localStorage.getItem('studentLoan')) {
            document.getElementById('studentLoan').value = localStorage.getItem('studentLoan');
        }
        if (localStorage.getItem('interestRateOnStudentLoan')) {
            document.getElementById('interestRateOnStudentLoan').value = localStorage.getItem('interestRateOnStudentLoan');
        }
        if (localStorage.getItem('mortgageDebt')) {
            document.getElementById('mortgageDebt').value = localStorage.getItem('mortgageDebt');
        }
        if (localStorage.getItem('mortgageRate')) {
            document.getElementById('mortgageRate').value = localStorage.getItem('mortgageRate');
        }
        if (localStorage.getItem('autoLoan')) {
            document.getElementById('autoLoan').value = localStorage.getItem('autoLoan');
        }
        if (localStorage.getItem('interestRateOnAutoLoan')) {
            document.getElementById('interestRateOnAutoLoan').value = localStorage.getItem('interestRateOnAutoLoan');
        }
        if (localStorage.getItem('personalLoan')) {
            document.getElementById('personalLoan').value = localStorage.getItem('personalLoan');
        }
        if (localStorage.getItem('otherDebt')) {
            document.getElementById('otherDebt').value = localStorage.getItem('otherDebt');
        }
        if (localStorage.getItem('healthInsurance')) {
            document.getElementById('healthInsurance').value = localStorage.getItem('healthInsurance');
        }
        if (localStorage.getItem('deductible')) {
            document.getElementById('deductible').value = localStorage.getItem('deductible');
        }
        if (localStorage.getItem('healthInsuranceCoverage')) {
            document.getElementById('healthInsuranceCoverage').value = localStorage.getItem('healthInsuranceCoverage');
        }
        if (localStorage.getItem('lifeInsurance')) {
            document.getElementById('lifeInsurance').value = localStorage.getItem('lifeInsurance');
        }
        if (localStorage.getItem('lifeInsuranceCoverage')) {
            document.getElementById('lifeInsuranceCoverage').value = localStorage.getItem('lifeInsuranceCoverage');
        }
        if (localStorage.getItem('homeownerInsuranceCoverage')) {
            document.getElementById('homeownerInsuranceCoverage').value = localStorage.getItem('homeownerInsuranceCoverage');
        }
        if (localStorage.getItem('autoInsuranceCoverage')) {
            document.getElementById('autoInsuranceCoverage').value = localStorage.getItem('autoInsuranceCoverage');
        }
        if (localStorage.getItem('disability')) {
            document.getElementById('disability').value = localStorage.getItem('disability');
        }
        if (localStorage.getItem('longterm')) {
            document.getElementById('longterm').value = localStorage.getItem('longterm');
        }
        if (localStorage.getItem('emergencyFund')) {
            document.getElementById('emergencyFund').value = localStorage.getItem('emergencyFund');
        }
        if (localStorage.getItem('checkingAccounts')) {
            document.getElementById('checkingAccounts').value = localStorage.getItem('checkingAccounts');
        }
        if (localStorage.getItem('savingsAccounts')) {
            document.getElementById('savingsAccounts').value = localStorage.getItem('savingsAccounts');
        }
        if (localStorage.getItem('interestSavingsAccounts')) {
            document.getElementById('interestSavingsAccounts').value = localStorage.getItem('interestSavingsAccounts');
        }
        if (localStorage.getItem('cd')) {
            document.getElementById('cd').value = localStorage.getItem('cd');
        }
        if (localStorage.getItem('cdRate')) {
            document.getElementById('cdRate').value = localStorage.getItem('cdRate');
        }
        if (localStorage.getItem('moneyMarket')) {
            document.getElementById('moneyMarket').value = localStorage.getItem('moneyMarket');
        }
        if (localStorage.getItem('mmRate')) {
            document.getElementById('mmRate').value = localStorage.getItem('mmRate');
        }
        if (localStorage.getItem('cma')) {
            document.getElementById('cma').value = localStorage.getItem('cma');
        }
        if (localStorage.getItem('cmaRate')) {
            document.getElementById('cmaRate').value = localStorage.getItem('cmaRate');
        }
        if (localStorage.getItem('brokerageAccount')) {
            document.getElementById('brokerageAccount').value = localStorage.getItem('brokerageAccount');
        }
        if (localStorage.getItem('401k')) {
            document.getElementById('401k').value = localStorage.getItem('401k');
        }
        if (localStorage.getItem('traditionalIRA')) {
            document.getElementById('traditionalIRA').value = localStorage.getItem('traditionalIRA');
        }
        if (localStorage.getItem('rothIRA')) {
            document.getElementById('rothIRA').value = localStorage.getItem('rothIRA');
        }
        if (localStorage.getItem('529')) {
            document.getElementById('529').value = localStorage.getItem('529');
        }
        if (localStorage.getItem('ESA')) {
            document.getElementById('ESA').value = localStorage.getItem('ESA');
        }
        if (localStorage.getItem('HSA')) {
            document.getElementById('HSA').value = localStorage.getItem('HSA');
        }
        if (localStorage.getItem('Trust')) {
            document.getElementById('Trust').value = localStorage.getItem('Trust');
        }
        if (localStorage.getItem('monthlyContribution')) {
            document.getElementById('monthlyContribution').value = localStorage.getItem('monthlyContribution');
        }
        if (localStorage.getItem('descriptionOfSecurities')) {
            document.getElementById('descriptionOfSecurities').value = localStorage.getItem('descriptionOfSecurities');
        }
        if (localStorage.getItem('robo')) {
            document.getElementById('robo').value = localStorage.getItem('robo');
        }
        if (localStorage.getItem('discretionaryAccounts')) {
            document.getElementById('discretionaryAccounts').value = localStorage.getItem('discretionaryAccounts');
        }
        if (localStorage.getItem('homeEquity')) {
            document.getElementById('homeEquity').value = localStorage.getItem('homeEquity');
        }
        if (localStorage.getItem('investmentPropertyEquity')) {
            document.getElementById('investmentPropertyEquity').value = localStorage.getItem('investmentPropertyEquity');
        }
        if (localStorage.getItem('describeRealEstate')) {
            document.getElementById('describeRealEstate').value = localStorage.getItem('describeRealEstate');
        }
        if (localStorage.getItem('otherInvestments')) {
            document.getElementById('otherInvestments').value = localStorage.getItem('otherInvestments');
        }
        if (localStorage.getItem('gold')) {
            document.getElementById('gold').value = localStorage.getItem('gold');
        }
        if (localStorage.getItem('silver')) {
            document.getElementById('silver').value = localStorage.getItem('silver');
        }
        if (localStorage.getItem('platinum')) {
            document.getElementById('platinum').value = localStorage.getItem('platinum');
        }
        if (localStorage.getItem('palladium')) {
            document.getElementById('palladium').value = localStorage.getItem('palladium');
        }
        if (localStorage.getItem('formPrecious')) {
            document.getElementById('formPrecious').value = localStorage.getItem('formPrecious');
        }
        if (localStorage.getItem('quickYearlyIncome')) {
            document.getElementById('quickYearlyIncome').value = localStorage.getItem('quickYearlyIncome');
        }
        if (localStorage.getItem('quickExpenses')) {
            document.getElementById('quickExpenses').value = localStorage.getItem('quickExpenses');
        }
        if (localStorage.getItem('quickDebt')) {
            document.getElementById('quickDebt').value = localStorage.getItem('quickDebt');
        }
        if (localStorage.getItem('quickInvestments')) {
            document.getElementById('quickInvestments').value = localStorage.getItem('quickInvestments');
        }
        if (localStorage.getItem('investmentsDebt')) {
            document.getElementById('investmentsDebt').value = localStorage.getItem('investmentsDebt');
        }
        if (localStorage.getItem('quickAge')) {
            document.getElementById('quickAge').value = localStorage.getItem('quickAge');
        }
        if (localStorage.getItem('quickReitrementAge')) {
            document.getElementById('quickReitrementAge').value = localStorage.getItem('quickReitrementAge');
        }
        if (localStorage.getItem('quickChildren')) {
            document.getElementById('quickChildren').value = localStorage.getItem('quickChildren');
        }
        if (localStorage.getItem('quickScore')) {
            document.getElementById('quickScore').value = localStorage.getItem('quickScore');
        }
        if (localStorage.getItem('quickMarital')) {
            document.getElementById('quickMarital').value = localStorage.getItem('quickMarital');
        }
        if (localStorage.getItem('quickShortTermGoals')) {
            document.getElementById('quickShortTermGoals').value = localStorage.getItem('quickShortTermGoals');
        }
        if (localStorage.getItem('quickMediumTermGoals')) {
            document.getElementById('quickMediumTermGoals').value = localStorage.getItem('quickMediumTermGoals');
        }
        if (localStorage.getItem('quickLongTermGoals')) {
            document.getElementById('quickLongTermGoals').value = localStorage.getItem('quickLongTermGoals');
        }
    });

    // Add an event listener to each input to store its value every time it changes
    
    document.getElementById('age').addEventListener('input', (event) => {
        localStorage.setItem('age', event.target.value);
    });
    document.getElementById('desiredRetirementAge').addEventListener('input', (event) => {
        localStorage.setItem('desiredRetirementAge', event.target.value);
    });
    document.getElementById('children').addEventListener('input', (event) => {
        localStorage.setItem('children', event.target.value);
    });
    document.getElementById('creditScore').addEventListener('input', (event) => {
        localStorage.setItem('creditScore', event.target.value);
    });
    document.getElementById('rentPayment').addEventListener('input', (event) => {
        localStorage.setItem('rentPayment', event.target.value);
    });
    document.getElementById('mortgagePayment').addEventListener('input', (event) => {
        localStorage.setItem('mortgagePayment', event.target.value);
    });
    document.getElementById('marital').addEventListener('input', (event) => {
        localStorage.setItem('marital', event.target.value);
    });
    document.getElementById('shortTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('shortTermGoals', event.target.value);
    });
    document.getElementById('mediumTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('mediumTermGoals', event.target.value);
    });
    document.getElementById('longTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('longTermGoals', event.target.value);
    });
    document.getElementById('yearlyIncome').addEventListener('input', (event) => {
        localStorage.setItem('yearlyIncome', event.target.value);
    });
    document.getElementById('otherIncome').addEventListener('input', (event) => {
        localStorage.setItem('otherIncome', event.target.value);
    });
    document.getElementById('changeInIncome').addEventListener('input', (event) => {
        localStorage.setItem('changeInIncome', event.target.value);
    });
    document.getElementById('propertyTax').addEventListener('input', (event) => {
        localStorage.setItem('propertyTax', event.target.value);
    });
    document.getElementById('homeInsurance').addEventListener('input', (event) => {
        localStorage.setItem('homeInsurance', event.target.value);
    });
    document.getElementById('homeMaintenance').addEventListener('input', (event) => {
        localStorage.setItem('homeMaintenance', event.target.value);
    });
    document.getElementById('utilities').addEventListener('input', (event) => {
        localStorage.setItem('utilities', event.target.value);
    });
    document.getElementById('carPayment').addEventListener('input', (event) => {
        localStorage.setItem('carPayment', event.target.value);
    });
    document.getElementById('fuel').addEventListener('input', (event) => {
        localStorage.setItem('fuel', event.target.value);
    });
    document.getElementById('carMaintenance').addEventListener('input', (event) => {
        localStorage.setItem('carMaintenance', event.target.value);
    });
    document.getElementById('autoInsurancePremium').addEventListener('input', (event) => {
        localStorage.setItem('autoInsurancePremium', event.target.value);
    });
    document.getElementById('groceries').addEventListener('input', (event) => {
        localStorage.setItem('groceries', event.target.value);
    });
    document.getElementById('restaurants').addEventListener('input', (event) => {
        localStorage.setItem('restaurants', event.target.value);
    });
    document.getElementById('healthInsurancePremium').addEventListener('input', (event) => {
        localStorage.setItem('healthInsurancePremium', event.target.value);
    });
    document.getElementById('prescriptionMedications').addEventListener('input', (event) => {
        localStorage.setItem('prescriptionMedications', event.target.value);
    });
    document.getElementById('doctorVisits').addEventListener('input', (event) => {
        localStorage.setItem('doctorVisits', event.target.value);
    });
    document.getElementById('healthSupplements').addEventListener('input', (event) => {
        localStorage.setItem('healthSupplements', event.target.value);
    });
    document.getElementById('studentLoanPayments').addEventListener('input', (event) => {
        localStorage.setItem('studentLoanPayments', event.target.value);
    });
    document.getElementById('personalLoanPayments').addEventListener('input', (event) => {
        localStorage.setItem('personalLoanPayments', event.target.value);
    });
    document.getElementById('creditCardPayments').addEventListener('input', (event) => {
        localStorage.setItem('creditCardPayments', event.target.value);
    });
    document.getElementById('otherDebtPayments').addEventListener('input', (event) => {
        localStorage.setItem('otherDebtPayments', event.target.value);
    });
    document.getElementById('entertainment').addEventListener('input', (event) => {
        localStorage.setItem('entertainment', event.target.value);
    });
    document.getElementById('miscellaneous').addEventListener('input', (event) => {
        localStorage.setItem('miscellaneous', event.target.value);
    });
    document.getElementById('creditCard').addEventListener('input', (event) => {
        localStorage.setItem('creditCard', event.target.value);
    });
    document.getElementById('interestRateOnCreditCard').addEventListener('input', (event) => {
        localStorage.setItem('interestRateOnCreditCard', event.target.value);
    });
    document.getElementById('studentLoan').addEventListener('input', (event) => {
        localStorage.setItem('studentLoan', event.target.value);
    });
    document.getElementById('interestRateOnStudentLoan').addEventListener('input', (event) => {
        localStorage.setItem('interestRateOnStudentLoan', event.target.value);
    });
    document.getElementById('mortgageDebt').addEventListener('input', (event) => {
        localStorage.setItem('mortgageDebt', event.target.value);
    });
    document.getElementById('mortgageRate').addEventListener('input', (event) => {
        localStorage.setItem('mortgageRate', event.target.value);
    });
    document.getElementById('autoLoan').addEventListener('input', (event) => {
        localStorage.setItem('autoLoan', event.target.value);
    });
    document.getElementById('interestRateOnAutoLoan').addEventListener('input', (event) => {
        localStorage.setItem('interestRateOnAutoLoan', event.target.value);
    });
    document.getElementById('personalLoan').addEventListener('input', (event) => {
        localStorage.setItem('personalLoan', event.target.value);
    });
    document.getElementById('otherDebt').addEventListener('input', (event) => {
        localStorage.setItem('otherDebt', event.target.value);
    });
    document.getElementById('healthInsurance').addEventListener('input', (event) => {
        localStorage.setItem('healthInsurance', event.target.value);
    });
    document.getElementById('deductible').addEventListener('input', (event) => {
        localStorage.setItem('deductible', event.target.value);
    });
    document.getElementById('healthInsuranceCoverage').addEventListener('input', (event) => {
        localStorage.setItem('healthInsuranceCoverage', event.target.value);
    });
    document.getElementById('lifeInsurance').addEventListener('input', (event) => {
        localStorage.setItem('lifeInsurance', event.target.value);
    });
    document.getElementById('lifeInsuranceCoverage').addEventListener('input', (event) => {
        localStorage.setItem('lifeInsuranceCoverage', event.target.value);
    });
    document.getElementById('homeownerInsuranceCoverage').addEventListener('input', (event) => {
        localStorage.setItem('homeownerInsuranceCoverage', event.target.value);
    });
    document.getElementById('autoInsuranceCoverage').addEventListener('input', (event) => {
        localStorage.setItem('autoInsuranceCoverage', event.target.value);
    });
    document.getElementById('disability').addEventListener('input', (event) => {
        localStorage.setItem('disability', event.target.value);
    });
    document.getElementById('longterm').addEventListener('input', (event) => {
        localStorage.setItem('longterm', event.target.value);
    });
    document.getElementById('emergencyFund').addEventListener('input', (event) => {
        localStorage.setItem('emergencyFund', event.target.value);
    });
    document.getElementById('checkingAccounts').addEventListener('input', (event) => {
        localStorage.setItem('checkingAccounts', event.target.value);
    });
    document.getElementById('savingsAccounts').addEventListener('input', (event) => {
        localStorage.setItem('savingsAccounts', event.target.value);
    });
    document.getElementById('interestSavingsAccounts').addEventListener('input', (event) => {
        localStorage.setItem('interestSavingsAccounts', event.target.value);
    });
    document.getElementById('cd').addEventListener('input', (event) => {
        localStorage.setItem('cd', event.target.value);
    });
    document.getElementById('cdRate').addEventListener('input', (event) => {
        localStorage.setItem('cdRate', event.target.value);
    });
    document.getElementById('moneyMarket').addEventListener('input', (event) => {
        localStorage.setItem('moneyMarket', event.target.value);
    });
    document.getElementById('mmRate').addEventListener('input', (event) => {
        localStorage.setItem('mmRate', event.target.value);
    });
    document.getElementById('cma').addEventListener('input', (event) => {
        localStorage.setItem('cma', event.target.value);
    });
    document.getElementById('cmaRate').addEventListener('input', (event) => {
        localStorage.setItem('cmaRate', event.target.value);
    });
    document.getElementById('brokerageAccount').addEventListener('input', (event) => {
        localStorage.setItem('brokerageAccount', event.target.value);
    });
    document.getElementById('401k').addEventListener('input', (event) => {
        localStorage.setItem('401k', event.target.value);
    });
    document.getElementById('traditionalIRA').addEventListener('input', (event) => {
        localStorage.setItem('traditionalIRA', event.target.value);
    });
    document.getElementById('rothIRA').addEventListener('input', (event) => {
        localStorage.setItem('rothIRA', event.target.value);
    });
    document.getElementById('529').addEventListener('input', (event) => {
        localStorage.setItem('529', event.target.value);
    });
    document.getElementById('ESA').addEventListener('input', (event) => {
        localStorage.setItem('ESA', event.target.value);
    });
    document.getElementById('HSA').addEventListener('input', (event) => {
        localStorage.setItem('HSA', event.target.value);
    });
    document.getElementById('Trust').addEventListener('input', (event) => {
        localStorage.setItem('Trust', event.target.value);
    });
    document.getElementById('monthlyContribution').addEventListener('input', (event) => {
        localStorage.setItem('monthlyContribution', event.target.value);
    });
    document.getElementById('descriptionOfSecurities').addEventListener('input', (event) => {
        localStorage.setItem('descriptionOfSecurities', event.target.value);
    });
    document.getElementById('robo').addEventListener('input', (event) => {
        localStorage.setItem('robo', event.target.value);
    });
    document.getElementById('discretionaryAccounts').addEventListener('input', (event) => {
        localStorage.setItem('discretionaryAccounts', event.target.value);
    });
    document.getElementById('homeEquity').addEventListener('input', (event) => {
        localStorage.setItem('homeEquity', event.target.value);
    });
    document.getElementById('investmentPropertyEquity').addEventListener('input', (event) => {
        localStorage.setItem('investmentPropertyEquity', event.target.value);
    });
    document.getElementById('describeRealEstate').addEventListener('input', (event) => {
        localStorage.setItem('describeRealEstate', event.target.value);
    });
    document.getElementById('otherInvestments').addEventListener('input', (event) => {
        localStorage.setItem('otherInvestments', event.target.value);
    });
    document.getElementById('gold').addEventListener('input', (event) => {
        localStorage.setItem('gold', event.target.value);
    });
    document.getElementById('silver').addEventListener('input', (event) => {
        localStorage.setItem('silver', event.target.value);
    });
    document.getElementById('platinum').addEventListener('input', (event) => {
        localStorage.setItem('platinum', event.target.value);
    });
    document.getElementById('palladium').addEventListener('input', (event) => {
        localStorage.setItem('palladium', event.target.value);
    });
    document.getElementById('formPrecious').addEventListener('input', (event) => {
        localStorage.setItem('formPrecious', event.target.value);
    });
    document.getElementById('quickYearlyIncome').addEventListener('input', (event) => {
        localStorage.setItem('quickYearlyIncome', event.target.value);
    });
    document.getElementById('quickExpenses').addEventListener('input', (event) => {
        localStorage.setItem('quickExpenses', event.target.value);
    });
    document.getElementById('quickDebt').addEventListener('input', (event) => {
        localStorage.setItem('quickDebt', event.target.value);
    });
    document.getElementById('quickInvestments').addEventListener('input', (event) => {
        localStorage.setItem('quickInvestments', event.target.value);
    });
    document.getElementById('investmentsDebt').addEventListener('input', (event) => {
        localStorage.setItem('investmentsDebt', event.target.value);
    });
    document.getElementById('quickAge').addEventListener('input', (event) => {
        localStorage.setItem('quickAge', event.target.value);
    });
    document.getElementById('quickRetirementAge').addEventListener('input', (event) => {
        localStorage.setItem('quickRetirementAge', event.target.value);
    });
    document.getElementById('quickChildren').addEventListener('input', (event) => {
        localStorage.setItem('quickChildren', event.target.value);
    });
    document.getElementById('quickScore').addEventListener('input', (event) => {
        localStorage.setItem('quickScore', event.target.value);
    });
    document.getElementById('quickMarital').addEventListener('input', (event) => {
        localStorage.setItem('quickMarital', event.target.value);
    });
    document.getElementById('quickShortTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('quickShortTermGoals', event.target.value);
    });
    document.getElementById('quickMediumTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('quickMediumTermGoals', event.target.value);
    });
    document.getElementById('quickLongTermGoals').addEventListener('input', (event) => {
        localStorage.setItem('quickLongTermGoals', event.target.value);
    });
    
} else {
    console.log('Sorry, your browser does not support Web Storage...');
}