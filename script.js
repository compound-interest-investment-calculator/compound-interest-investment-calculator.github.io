function validateNumericInput(input) {
    let value = input.value.replace(/\D/g, '');
    let formattedValue = Number(value).toLocaleString();
    input.value = formattedValue;
}

function validateNumericInputWithComma(input) {
    let value = input.value.replace(/[^0-9,]/g, '');
    input.value = value;
}

function toggleSIP() {
    var yesRadio = document.getElementById('sipYes');
    var table = document.querySelector('.sipTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleSIPOne() {
    var yesRadio = document.getElementById('sipOneYes');
    var table = document.querySelector('.sipOneTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleSIPTwo() {
    var yesRadio = document.getElementById('sipTwoYes');
    var table = document.querySelector('.sipTwoTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleSWP() {
    var yesRadio = document.getElementById('swpYes');
    var table = document.querySelector('.swpTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleLumpsumWithdrawal() {
    var yesRadio = document.getElementById('lumpsumWithdrawalYes');
    var table = document.querySelector('.lumpsumWithdrawalTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleParallelInvestmentOne() {
    var yesRadio = document.getElementById('parallelInvestmentOneYes');
    var table = document.querySelector('.parallelInvestmentOneTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function showParallelInvestmentOneResult() {
    var resultTable = document.querySelector('.parallelInvestmentOneOverview');
    resultTable.classList.remove('hidden');
}

function hideParallelInvestmentOneResult() {
    var resultTable = document.querySelector('.parallelInvestmentOneOverview');
    var monthlyResult = document.getElementById('monthlyResultTableForParallelInvestmentOne');
    var yearlyResult = document.getElementById('yearlyResultTableForParallelInvestmentOne');
    resultTable.classList.add('hidden');
    monthlyResult.classList.add('hidden');
    yearlyResult.classList.add('hidden');
}


function toggleParallelInvestmentTwo() {
    var yesRadio = document.getElementById('parallelInvestmentTwoYes');
    var table = document.querySelector('.parallelInvestmentTwoTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function showCombinedPortfolio() {
    var resultTable = document.querySelector('.combinedInvestmentOverview');
    resultTable.classList.remove('hidden');
}

function hideCombinedPortfolio() {
    var resultTable = document.querySelector('.combinedInvestmentOverview');
    resultTable.classList.add('hidden');
}

function showParallelInvestmentTwoResult() {
    var resultTable = document.querySelector('.parallelInvestmentTwoOverview');
    resultTable.classList.remove('hidden');
}

function hideParallelInvestmentTwoResult() {
    var resultTable = document.querySelector('.parallelInvestmentTwoOverview');
    var monthlyResult = document.getElementById('monthlyResultTableForParallelInvestmentTwo');
    var yearlyResult = document.getElementById('yearlyResultTableForParallelInvestmentTwo');
    resultTable.classList.add('hidden');
    monthlyResult.classList.add('hidden');
    yearlyResult.classList.add('hidden');
}

function toggleBonusSIP() {
    var yesRadio = document.getElementById('bonusSipYes');
    var table = document.querySelector('.bonusSipTable');

    if (yesRadio.checked) {
        table.classList.remove('hidden');
    } else {
        table.classList.add('hidden');
    }
}

function toggleStepUpSIP() {
    var yesRadio = document.getElementById('sipStepUpYes');
    var rows = document.querySelectorAll('.sipStepUpRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function toggleStepUpOneSIP() {
    var yesRadio = document.getElementById('sipStepUpOneYes');
    var rows = document.querySelectorAll('.sipStepUpOneRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function hideStepUpOneSIP() {
    document.getElementById('sipStepUpOneNo').checked = true;
    var rows = document.querySelectorAll('.sipStepUpOneRows');
    rows.forEach(function (row) {
        row.classList.add('hidden');
    });
}

function hideStepUpTwoSIP() {
    document.getElementById('sipStepUpTwoNo').checked = true;
    var rows = document.querySelectorAll('.sipStepUpTwoRows');
    rows.forEach(function (row) {
        row.classList.add('hidden');
    });
}

function toggleStepUpTwoSIP() {
    var yesRadio = document.getElementById('sipStepUpTwoYes');
    var rows = document.querySelectorAll('.sipStepUpTwoRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}
function toggleDecreaseStepUp() {
    var yesRadio = document.getElementById('decreaseStepUpYes');
    var rows = document.querySelectorAll('.decreaseStepUpRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}
function toggleStopSip() {
    var yesRadio = document.getElementById('stopSipYes');
    var rows = document.querySelectorAll('.stopSipRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function toggleStopSipOne() {
    var yesRadio = document.getElementById('stopSipOneYes');
    var rows = document.querySelectorAll('.stopSipOneRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function toggleStopSipTwo() {
    var yesRadio = document.getElementById('stopSipTwoYes');
    var rows = document.querySelectorAll('.stopSipTwoRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function toggleBonusSipStepUp() {
    var yesRadio = document.getElementById('bonusSipStepUpYes');
    var rows = document.querySelectorAll('.bonusSipStepUpRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function toggleWithdrawalStepUp() {
    var yesRadio = document.getElementById('stepUpWithdrawalYes');
    var rows = document.querySelectorAll('.withdrawalStepUpRows');

    rows.forEach(function (row) {
        if (yesRadio.checked) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function getNumericValue(selector) {
    return Number(document.querySelector(selector).value.replace(/,/g, ''));
}

function getSelectedValue(id) {
    var selectElement = document.getElementById(id);
    var selectedValue = Number(selectElement.value);
    return selectedValue;
}

function isChecked(id) {
    var yesRadio = document.getElementById(id);
    return yesRadio.checked;
}
function getYearsArray() {
    var inputElement = document.querySelector('.lumpsumwithdrawalYears');
    var inputValue = inputElement.value.trim();

    if (inputValue === '') {
        return [];
    }

    var yearsArray = inputValue.split(',').map(function (item) {
        return item.trim();
    });

    return yearsArray;
}

function showMonthlyData() {
    document.querySelector('.monthly-data').classList.remove('hidden');
    document.querySelector('.yearly-data').classList.add('hidden');
}

function showYearlyData() {
    document.querySelector('.monthly-data').classList.add('hidden');
    document.querySelector('.yearly-data').classList.remove('hidden');
}

function calculate() {
    const startingYear = getNumericValue('.investmentYear');
    console.log("Investment Starting Year: " + startingYear);
    const initialInvestment = getNumericValue('.initialInvestment');
    console.log("Initial Investment: " + initialInvestment);
    const annualInterestRate = getNumericValue('.interestRate');
    console.log("Interest Rate: " + annualInterestRate + "%");
    const years = getNumericValue('.years');
    console.log("Years: " + years);
    const months = getNumericValue('.months');
    console.log("Months: " + months);
    const investmentFrequency = getSelectedValue('investmentFrequency');
    console.log("Investment Frequency: " + investmentFrequency);
    const sip = isChecked('sipYes');
    console.log("SIP? " + sip);
    const sipAmount = getNumericValue('.sipAmount');
    console.log("SIP Amount: " + sipAmount);
    const stepUpSip = isChecked('sipStepUpYes');
    console.log("StepUp SIP? " + stepUpSip);
    const stepUp = getSelectedValue('stepUpFrequency');
    console.log("StepUp Frequency: " + stepUp);
    const stepUpIncrease = getNumericValue('.stepUpIncreasePercentage');
    console.log("StepUp Increment By: " + stepUpIncrease + "%");
    const decreaseStepUpPercent = isChecked('decreaseStepUpYes');
    console.log("Decrease StepUp After a period of time? " + decreaseStepUpPercent);
    const decreaseStepUpPercentAfterYears = getNumericValue('.decreaseStepUpAfterYears');
    console.log("Decrease StepUp After Years: " + decreaseStepUpPercentAfterYears);
    const decreaseStepUpPercentTo = getNumericValue('.updatedStepUpPercentage');
    console.log("Decrease StepUp Percent to: " + decreaseStepUpPercentTo + "%");
    const stopSipAfterAPeriod = isChecked('stopSipYes');
    console.log("Stop SIP After a period of time? " + stopSipAfterAPeriod);
    const stopSipAfterYears = getNumericValue('.stopSipAfterYears');
    console.log("Stop SIP After Years: " + stopSipAfterYears);
    const systematicWithdrawalAfterAPeriod = isChecked('swpYes');
    console.log("SWP after a period of time? " + systematicWithdrawalAfterAPeriod);
    const systematicWithdrawalAfterYears = getNumericValue('.withdrawalAfterYears');
    console.log("SWP After Years: " + systematicWithdrawalAfterYears);
    const withdrawalPerMonth = getNumericValue('.withdrawalAmount');
    console.log("Withdrawal Per Month: " + withdrawalPerMonth);
    const withdrawalFrequency = getSelectedValue('withdrawalFrequency');
    console.log("Withdrawal Frequency: " + withdrawalFrequency);
    const stepUpWithdrawal = isChecked('stepUpWithdrawalYes');
    console.log("StepUp for Withdrawal? " + stepUpWithdrawal);
    const stepUpWithdrawalFrequency = getSelectedValue('withdrawalStepUpFrequency');
    console.log("StepUp Withdrawal Frequency: " + stepUpWithdrawalFrequency);
    const stepUpWithdrawalIncrease = getNumericValue('.withdrawalStepUpPercentage');
    console.log("Increase Withdrawal Precent by: " + stepUpWithdrawalIncrease + "%");
    const bonusSip = isChecked('bonusSipYes');
    console.log("Bonus SIP? " + bonusSip);
    const bonusSipAmount = getNumericValue('.bonusSipAmount');
    console.log("Bonus SIP Amount: " + bonusSipAmount);
    const bonusSipFrequency = getSelectedValue('bonusSipFrequency');
    console.log("Bonus SIP Frequency: " + bonusSipFrequency);
    const lumpSumWithdrawals = isChecked('lumpsumWithdrawalYes');
    console.log("LumpSum Withdrawals? " + lumpSumWithdrawals);
    const lumpSumWithdrawalAmount = getNumericValue('.lumpsumWithdrawalAmount');
    console.log("LumpSum Withdrawal Amount: " + lumpSumWithdrawalAmount);
    const lumpSumWithdrawalYears = getYearsArray();
    console.log("LumpSum Withdrawal Years: " + lumpSumWithdrawalYears);
    console.log("Total Lumsum Withdrawals: " + lumpSumWithdrawalYears.length)
    const stepUpBonusSip = isChecked('bonusSipStepUpYes');
    console.log("Bonus SIP StepUp: " + stepUpBonusSip);
    const stepUpBonusSipPercent = getNumericValue('.bonusSipStepUpPercentage');
    console.log("Increase Bonus SIP by: " + stepUpBonusSipPercent + "%");
    const stepUpBonusSipFrequency = getSelectedValue('bonusSipStepUpFrequency');
    console.log("Bonus SIP StepUp Frequency: " + stepUpBonusSipFrequency);

    const parallelInvestmentOne = isChecked('parallelInvestmentOneYes');
    console.log("Parallel Investment?: " + parallelInvestmentOne);
    const initialInvestmentOne = getNumericValue('.initialInvestmentOne');
    console.log("Initial Investment: " + initialInvestmentOne);
    const annualInterestRateOne = getNumericValue('.interestRateOne');
    console.log("Interest Rate: " + annualInterestRateOne + "%");
    const yearsOne = getNumericValue('.yearsOne');
    console.log("Years: " + yearsOne);
    const monthsOne = getNumericValue('.monthsOne');
    console.log("Months: " + monthsOne);
    const investmentOneFrequency = getSelectedValue('investmentOneFrequency');
    console.log("Investment Frequency: " + investmentOneFrequency);
    const sipOne = isChecked('sipOneYes');
    console.log("SIP? " + sipOne);
    const sipOneAmount = getNumericValue('.sipOneAmount');
    console.log("SIP Amount: " + sipOneAmount);
    const stepUpSipOne = isChecked('sipStepUpOneYes');
    console.log("StepUp SIP? " + stepUpSipOne);
    const stepUpOne = getSelectedValue('stepUpOneFrequency');
    console.log("StepUp Frequency: " + stepUpOne);
    const stepUpIncreaseOne = getNumericValue('.stepUpOneIncreasePercentage');
    console.log("StepUp Increment By: " + stepUpIncreaseOne + "%");
    const stopSipOneAfterAPeriod = isChecked('stopSipOneYes');
    console.log("Stop SIP After a period of time? " + stopSipOneAfterAPeriod);
    const stopSipOneAfterYears = getNumericValue('.stopSipOneAfterYears');
    console.log("Stop SIP After Years: " + stopSipOneAfterYears);

    const parallelInvestmentTwo = isChecked('parallelInvestmentTwoYes');
    console.log("Parallel Investment?: " + parallelInvestmentTwo);
    const initialInvestmentTwo = getNumericValue('.initialInvestmentTwo');
    console.log("Initial Investment: " + initialInvestmentTwo);
    const annualInterestRateTwo = getNumericValue('.interestRateTwo');
    console.log("Interest Rate: " + annualInterestRateTwo + "%");
    const yearsTwo = getNumericValue('.yearsTwo');
    console.log("Years: " + yearsTwo);
    const monthsTwo = getNumericValue('.monthsTwo');
    console.log("Months: " + monthsTwo);
    const investmentTwoFrequency = getSelectedValue('investmentTwoFrequency');
    console.log("Investment Frequency: " + investmentTwoFrequency);
    const sipTwo = isChecked('sipTwoYes');
    console.log("SIP? " + sipTwo);
    const sipTwoAmount = getNumericValue('.sipTwoAmount');
    console.log("SIP Amount: " + sipTwoAmount);
    const stepUpSipTwo = isChecked('sipStepUpTwoYes');
    console.log("StepUp SIP? " + stepUpSipTwo);
    const stepUpTwo = getSelectedValue('stepUpTwoFrequency');
    console.log("StepUp Frequency: " + stepUpTwo);
    const stepUpIncreaseTwo = getNumericValue('.stepUpTwoIncreasePercentage');
    console.log("StepUp Increment By: " + stepUpIncreaseTwo + "%");
    const stopSipTwoAfterAPeriod = isChecked('stopSipTwoYes');
    console.log("Stop SIP After a period of time? " + stopSipTwoAfterAPeriod);
    const stopSipTwoAfterYears = getNumericValue('.stopSipTwoAfterYears');
    console.log("Stop SIP After Years: " + stopSipTwoAfterYears);

    calculateCompoundInterest(startingYear, initialInvestment, annualInterestRate, years, months, sip, investmentFrequency, sipAmount,
        stepUpSip, stepUp, stepUpIncrease, decreaseStepUpPercent, decreaseStepUpPercentAfterYears,
        decreaseStepUpPercentTo, stopSipAfterAPeriod, stopSipAfterYears, systematicWithdrawalAfterAPeriod,
        systematicWithdrawalAfterYears, withdrawalPerMonth, stepUpWithdrawal, stepUpWithdrawalFrequency, stepUpWithdrawalIncrease,
        bonusSip, bonusSipAmount, bonusSipFrequency, lumpSumWithdrawals, lumpSumWithdrawalAmount,
        lumpSumWithdrawalYears, stepUpBonusSip, stepUpBonusSipPercent, stepUpBonusSipFrequency,
        parallelInvestmentOne, initialInvestmentOne, annualInterestRateOne, yearsOne, monthsOne, investmentOneFrequency,
        sipOne, sipOneAmount, stepUpSipOne, stepUpOne, stepUpIncreaseOne, stopSipOneAfterAPeriod, stopSipOneAfterYears,
        parallelInvestmentTwo, initialInvestmentTwo, annualInterestRateTwo, yearsTwo, monthsTwo, investmentTwoFrequency,
        sipTwo, sipTwoAmount, stepUpSipTwo, stepUpTwo, stepUpIncreaseTwo, stopSipTwoAfterAPeriod, stopSipTwoAfterYears);

    formatInputFieldValues();
}

class InvestmentHistory {
    constructor(year, month, sipAmount, principalForTheMonth, interestForTheMonth, totalInterest, totalAmount) {
        this.year = year;
        this.month = month;
        this.sipAmount = sipAmount;
        this.principalForTheMonth = principalForTheMonth;
        this.interestForTheMonth = interestForTheMonth;
        this.totalInterest = totalInterest;
        this.totalAmount = totalAmount;
    }
}

const STEP_UP_TYPE = {
    NONE: 0,
    QUARTERLY: 3,
    HALF_YEARLY: 6,
    YEARLY: 12
};

const INVESTMENT_FREQUENCY = {
    MONTHLY: 1,
    QUARTERLY: 3,
    HALF_YEARLY: 6,
    YEARLY: 12
};

function calculateCompoundInterest(
    startingYear, initialInvestment, annualInterestRate, years, months, sip, investmentFrequency, sipAmount,
    stepUpSip, stepUp, stepUpIncrease, decreaseStepUpPercent, decreaseStepUpPercentAfterYears,
    decreaseStepUpPercentTo, stopSipAfterAPeriod, stopSipAfterYears, systematicWithdrawalAfterAPeriod,
    systematicWithdrawalAfterYears, withdrawalPerMonth, stepUpWithdrawal, stepUpWithdrawalFrequency, stepUpWithdrawalIncrease,
    bonusSip, bonusSipAmount, bonusSipFrequency, lumpSumWithdrawals, lumpSumWithdrawalAmount,
    lumpSumWithdrawalYears, stepUpBonusSip, stepUpBonusSipPercent, stepUpBonusSipFrequency,
    parallelInvestmentOne, initialInvestmentOne, annualInterestRateOne, yearsOne, monthsOne, investmentOneFrequency,
    sipOne, sipOneAmount, stepUpSipOne, stepUpOne, stepUpIncreaseOne, stopSipOneAfterAPeriod, stopSipOneAfterYears,
    parallelInvestmentTwo, initialInvestmentTwo, annualInterestRateTwo, yearsTwo, monthsTwo, investmentTwoFrequency,
    sipTwo, sipTwoAmount, stepUpSipTwo, stepUpTwo, stepUpIncreaseTwo, stopSipTwoAfterAPeriod, stopSipTwoAfterYears) {
    console.log("************************************************************************************");
    const monthlyInterestRate = annualInterestRate / 12;
    const totalMonths = years * 12 + months;
    let totalDeposits = initialInvestment;
    let totalAmount = initialInvestment;
    let totalInterest = 0;
    let totalWithdrawals = 0;
    let currentYear = startingYear;
    let currentYearOne = startingYear;
    let currentYearTwo = startingYear;
    let monthCounter = 0;
    let frequencyCounter = 0;
    const sipFrequency = getSipFrequency(investmentFrequency);
    const stopSipAfterMonths = stopSipAfterYears * 12;
    const startWithdrawalAfterMonths = systematicWithdrawalAfterYears * 12;
    let withdrawalFrequencyCounter = 0;
    const withdrawalFrequency = getStepUpFrequency(stepUpWithdrawalFrequency);
    const monthlyInvestmentHistory = [];

    let decreasedStepUp = false;

    // Parallel investment 1 variables
    let totalDepositsOne = initialInvestmentOne;
    let totalAmountOne = initialInvestmentOne;
    let totalInterestOne = 0;
    const monthlyInterestRateOne = annualInterestRateOne / 12;
    const totalMonthsOne = yearsOne * 12 + monthsOne;
    let monthCounterOne = 0;
    let frequencyCounterOne = 0;
    const sipFrequencyOne = parallelInvestmentOne ? getSipFrequency(investmentOneFrequency) : 0;
    const stopSipAfterMonthsOne = stopSipOneAfterYears * 12;
    const monthlyInvestmentHistoryOne = []; // Track parallel investment history

    // Parallel investment 2 variables
    let totalDepositsTwo = initialInvestmentTwo;
    let totalAmountTwo = initialInvestmentTwo;
    let totalInterestTwo = 0;
    const monthlyInterestRateTwo = annualInterestRateTwo / 12;
    const totalMonthsTwo = yearsTwo * 12 + monthsTwo;
    let monthCounterTwo = 0;
    let frequencyCounterTwo = 0;
    const sipFrequencyTwo = parallelInvestmentTwo ? getSipFrequency(investmentTwoFrequency) : 0;
    const stopSipAfterMonthsTwo = stopSipTwoAfterYears * 12;
    const monthlyInvestmentHistoryTwo = []; // Track parallel investment history

    // Determine the bonus SIP frequency in months
    const bonusSipFreq = getStepUpFrequency(bonusSipFrequency);
    const stepUpBonusSipFreq = getStepUpFrequency(stepUpBonusSipFrequency);
    const lumpSumWithdrawalMonths = lumpSumWithdrawalYears.map(year => year * 12);

    if (initialInvestment !== 0) {
        monthlyInvestmentHistory.push(new InvestmentHistory(currentYear - 1, 0, 0, initialInvestment, 0, 0, initialInvestment));
    }

    if (parallelInvestmentOne && initialInvestmentOne !== 0) {
        monthlyInvestmentHistoryOne.push(new InvestmentHistory(currentYearOne - 1, 0, 0, initialInvestmentOne, 0, 0, initialInvestmentOne));
    }

    if (parallelInvestmentTwo && initialInvestmentTwo !== 0) {
        monthlyInvestmentHistoryTwo.push(new InvestmentHistory(currentYearTwo - 1, 0, 0, initialInvestmentTwo, 0, 0, initialInvestmentTwo));
    }

    for (let i = 1; i <= totalMonths; i++) {
        let sipForThisMonth = 0;
        if (sip && frequencyCounter === 0 && (!stopSipAfterAPeriod || i <= stopSipAfterMonths)) {
            sipForThisMonth = sipAmount;
        }

        if (sip && bonusSip && (i % bonusSipFreq === 0) && (!stopSipAfterAPeriod || i <= stopSipAfterMonths)) {
            sipForThisMonth += bonusSipAmount;
        }

        let withdrawalForThisMonth = 0;
        if (systematicWithdrawalAfterAPeriod && i > startWithdrawalAfterMonths) {
            withdrawalForThisMonth = -withdrawalPerMonth;
            totalWithdrawals += withdrawalPerMonth;
        }

        if (lumpSumWithdrawals && lumpSumWithdrawalMonths.includes(i)) {
            withdrawalForThisMonth -= lumpSumWithdrawalAmount;
            totalWithdrawals += lumpSumWithdrawalAmount;
        }

        sipForThisMonth = Math.round(sipForThisMonth);
        const principalForTheMonth = Math.round(totalAmount + sipForThisMonth + withdrawalForThisMonth);
        totalDeposits = Math.round(totalDeposits + sipForThisMonth);
        const interestForTheMonth = Math.round(principalForTheMonth * monthlyInterestRate / 100);
        totalInterest = Math.round(totalInterest + interestForTheMonth);
        totalAmount = Math.round(principalForTheMonth + interestForTheMonth);

        monthlyInvestmentHistory.push(new InvestmentHistory(currentYear, i, sipForThisMonth + withdrawalForThisMonth, totalDeposits, interestForTheMonth, totalInterest, totalAmount));

        monthCounter++;
        frequencyCounter = (frequencyCounter + 1) % sipFrequency;
        withdrawalFrequencyCounter = (withdrawalFrequencyCounter + 1) % withdrawalFrequency;

        if (i % 12 === 0) {
            currentYear++;
        }

        // SIP step-up logic for primary investment
        if (sip && stepUpSip && stepUp !== STEP_UP_TYPE.NONE) {
            const stepUpFrequency = getStepUpFrequency(stepUp);
            if (monthCounter === stepUpFrequency) {
                if (decreaseStepUpPercent && currentYear > decreaseStepUpPercentAfterYears && !decreasedStepUp) {
                    stepUpIncrease = decreaseStepUpPercentTo;
                    decreasedStepUp = true;
                }
                sipAmount += sipAmount * (stepUpIncrease / 100);
                sipAmount = Math.round(sipAmount);
                monthCounter = 0;
            }
        }

        // Apply step-up to SWP amount if conditions are met
        if (stepUpWithdrawal && systematicWithdrawalAfterAPeriod && withdrawalFrequencyCounter === 0 && i > startWithdrawalAfterMonths) {
            withdrawalPerMonth += withdrawalPerMonth * (stepUpWithdrawalIncrease / 100);
            withdrawalPerMonth = Math.round(withdrawalPerMonth);
        }

        // Apply step-up to bonus SIP amount if conditions are met
        if (sip && bonusSip && stepUpBonusSip && (i % stepUpBonusSipFreq === 0) && (!stopSipAfterAPeriod || i <= stopSipAfterMonths)) {
            bonusSipAmount += bonusSipAmount * (stepUpBonusSipPercent / 100);
            bonusSipAmount = Math.round(bonusSipAmount);
        }
    }

    // Parallel investment 1 calculations (SIP, Step-up, Stop SIP logic)
    if (parallelInvestmentOne) {
        for (let i = 1; i <= totalMonthsOne; i++) {

            let sipForThisMonthOne = 0;
            if (sipOne && frequencyCounterOne === 0 && (!stopSipOneAfterAPeriod || i <= stopSipAfterMonthsOne)) {
                sipForThisMonthOne = sipOneAmount;
            }

            totalDepositsOne += sipForThisMonthOne;
            const principalForTheMonthOne = Math.round(totalAmountOne + sipForThisMonthOne);
            const interestForTheMonthOne = Math.round(principalForTheMonthOne * monthlyInterestRateOne / 100);
            totalInterestOne += interestForTheMonthOne;
            totalAmountOne = Math.round(principalForTheMonthOne + interestForTheMonthOne);

            // Record monthly data for parallel investment
            monthlyInvestmentHistoryOne.push(new InvestmentHistory(currentYearOne, i, sipForThisMonthOne, totalDepositsOne, interestForTheMonthOne, totalInterestOne, totalAmountOne));
            monthCounterOne++;
            if (i % 12 === 0) {
                currentYearOne++;
            }
            // Step-up logic for parallel investment SIP
            if (sipOne && stepUpSipOne && stepUpOne !== STEP_UP_TYPE.NONE) {
                const stepUpFrequencyOne = getStepUpFrequency(stepUpOne);
                if (monthCounterOne === stepUpFrequencyOne) {
                    sipOneAmount += sipOneAmount * (stepUpIncreaseOne / 100);
                    sipOneAmount = Math.round(sipOneAmount);
                    monthCounterOne = 0;
                }
            }
            frequencyCounterOne = (frequencyCounterOne + 1) % sipFrequencyOne;
        }
    }

    // Parallel investment 2 calculations (SIP, Step-up, Stop SIP logic)
    if (parallelInvestmentTwo) {
        for (let i = 1; i <= totalMonthsTwo; i++) {

            let sipForThisMonthTwo = 0;
            if (sipTwo && frequencyCounterTwo === 0 && (!stopSipTwoAfterAPeriod || i <= stopSipAfterMonthsTwo)) {
                sipForThisMonthTwo = sipTwoAmount;
            }

            totalDepositsTwo += sipForThisMonthTwo;
            const principalForTheMonthTwo = Math.round(totalAmountTwo + sipForThisMonthTwo);
            const interestForTheMonthTwo = Math.round(principalForTheMonthTwo * monthlyInterestRateTwo / 100);
            totalInterestTwo += interestForTheMonthTwo;
            totalAmountTwo = Math.round(principalForTheMonthTwo + interestForTheMonthTwo);

            // Record monthly data for parallel investment
            monthlyInvestmentHistoryTwo.push(new InvestmentHistory(currentYearTwo, i, sipForThisMonthTwo, totalDepositsTwo, interestForTheMonthTwo, totalInterestTwo, totalAmountTwo));
            monthCounterTwo++;
            if (i % 12 === 0) {
                currentYearTwo++;
            }
            // Step-up logic for parallel investment SIP
            if (sipTwo && stepUpSipTwo && stepUpTwo !== STEP_UP_TYPE.NTwo) {
                const stepUpFrequencyTwo = getStepUpFrequency(stepUpTwo);
                if (monthCounterTwo === stepUpFrequencyTwo) {
                    sipTwoAmount += sipTwoAmount * (stepUpIncreaseTwo / 100);
                    sipTwoAmount = Math.round(sipTwoAmount);
                    monthCounterTwo = 0;
                }
            }
            frequencyCounterTwo = (frequencyCounterTwo + 1) % sipFrequencyTwo;
        }
    }

    for (const investmentDetails of monthlyInvestmentHistory) {
        console.log(`${investmentDetails.month}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
    }

    console.log();

    const yearlyInvestmentHistory = aggregateYearlyInvestmentHistory(monthlyInvestmentHistory);
    for (const investmentDetails of yearlyInvestmentHistory) {
        console.log(`${investmentDetails.year}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
    }
    let yearlyInvestmentOneHistory = [];
    if (parallelInvestmentOne) {
        for (const investmentDetails of monthlyInvestmentHistoryOne) {
            console.log(`${investmentDetails.month}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
        }
        yearlyInvestmentOneHistory = aggregateYearlyInvestmentHistory(monthlyInvestmentHistoryOne);
        for (const investmentDetails of yearlyInvestmentOneHistory) {
            console.log(`${investmentDetails.year}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
        }
    }

    let yearlyInvestmentTwoHistory = [];
    if (parallelInvestmentTwo) {
        for (const investmentDetails of monthlyInvestmentHistoryTwo) {
            console.log(`${investmentDetails.month}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
        }
        yearlyInvestmentTwoHistory = aggregateYearlyInvestmentHistory(monthlyInvestmentHistoryTwo);
        for (const investmentDetails of yearlyInvestmentTwoHistory) {
            console.log(`${investmentDetails.year}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
        }
    }

    let activeSipYears = 0;
    if (sip) {
        if (stopSipAfterAPeriod)
            activeSipYears = stopSipAfterYears;
        else
            activeSipYears = years;
    } else {
        activeSipYears = 0;
    }

    let activeSipYearsOne = 0;
    if (sipOne) {
        if (stopSipOneAfterAPeriod)
            activeSipYearsOne = stopSipOneAfterYears;
        else
            activeSipYearsOne = yearsOne;
    } else {
        activeSipYearsOne = 0;
    }

    let activeSipYearsTwo = 0;
    if (sipTwo) {
        if (stopSipTwoAfterAPeriod)
            activeSipYearsTwo = stopSipTwoAfterYears;
        else
            activeSipYearsTwo = yearsTwo;
    } else {
        activeSipYearsTwo = 0;
    }
    console.log();
    console.log("************************************************************************************");
    console.log("Total Deposit: ₹" + totalDeposits);
    console.log("Total Withdrawal: ₹" + totalWithdrawals);
    console.log("Total Interest Earned: ₹" + totalInterest);
    console.log("Future Investment Value: ₹" + totalAmount);
    console.log("Total No of Years: " + years);
    console.log("Total No of Years with Active SIP: " + activeSipYears);
    console.log("Total No of Years with Active SWP: " + (systematicWithdrawalAfterAPeriod ? (years - systematicWithdrawalAfterYears) : 0));
    console.log("Total No Lumpsum Withdrawals: " + lumpSumWithdrawalYears.length);
    console.log("************************************************************************************");

    document.querySelector('.totalDeposit').value = totalDeposits;
    document.querySelector('.totalWithdrawal').value = totalWithdrawals;
    document.querySelector('.totalInterest').value = totalInterest;
    document.querySelector('.futureInvestmentValue').value = totalAmount;
    document.querySelector('.noOfYears').value = years;
    document.querySelector('.noOfYearsSip').value = activeSipYears;
    document.querySelector('.noOfYearsSwp').value = (systematicWithdrawalAfterAPeriod ? (years - systematicWithdrawalAfterYears) : 0);
    document.querySelector('.noOfLumpsumWithdrawals').value = lumpSumWithdrawalYears.length;

    createMonthlyResultTable(monthlyInvestmentHistory, "monthlyResultTable");
    createYearlyResultTable(yearlyInvestmentHistory, "yearlyResultTable");

    if (parallelInvestmentOne) {
        createMonthlyResultTable(monthlyInvestmentHistoryOne, "monthlyResultTableForParallelInvestmentOne");
        createYearlyResultTable(yearlyInvestmentOneHistory, "yearlyResultTableForParallelInvestmentOne");
        console.log();
        console.log("************************************************************************************");
        console.log("Total Parallel Deposit 1 : ₹" + totalDepositsOne);
        console.log("Total Interest Earned in Parallel Investment 1: ₹" + totalInterestOne);
        console.log("Future Investment Value of Parallel Investment 1: ₹" + totalAmountOne);
        console.log("Total No of Years in Parallel Investment 1: " + yearsOne);
        console.log("Total No of Years with Active SIP in Parallel Investment 1: " + activeSipYearsOne);
        console.log("************************************************************************************");
        document.querySelector('.totalDepositOne').value = totalDepositsOne;
        document.querySelector('.totalInterestOne').value = totalInterestOne;
        document.querySelector('.futureInvestmentOneValue').value = totalAmountOne;
        document.querySelector('.noOfYearsOne').value = yearsOne;
        document.querySelector('.noOfYearsSipOne').value = activeSipYearsOne;
        showParallelInvestmentOneResult();
    } else {
        hideParallelInvestmentOneResult();
    }

    if (parallelInvestmentTwo) {
        createMonthlyResultTable(monthlyInvestmentHistoryTwo, "monthlyResultTableForParallelInvestmentTwo");
        createYearlyResultTable(yearlyInvestmentTwoHistory, "yearlyResultTableForParallelInvestmentTwo");
        console.log();
        console.log("************************************************************************************");
        console.log("Total Parallel Deposit 2: ₹" + totalDepositsTwo);
        console.log("Total Interest Earned in Parallel Investment 2: ₹" + totalInterestTwo);
        console.log("Future Investment Value of Parallel Investment 2: ₹" + totalAmountTwo);
        console.log("Total No of Years in Parallel Investment 2: " + yearsTwo);
        console.log("Total No of Years with Active SIP in Parallel Investment 2: " + activeSipYearsTwo);
        console.log("************************************************************************************");
        document.querySelector('.totalDepositTwo').value = totalDepositsTwo;
        document.querySelector('.totalInterestTwo').value = totalInterestTwo;
        document.querySelector('.futureInvestmentTwoValue').value = totalAmountTwo;
        document.querySelector('.noOfYearsTwo').value = yearsTwo;
        document.querySelector('.noOfYearsSipTwo').value = activeSipYearsTwo;
        showParallelInvestmentTwoResult();
    } else {
        hideParallelInvestmentTwoResult();
    }

    if (parallelInvestmentOne || parallelInvestmentTwo) {
        let combinedDeposit = (totalDeposits + totalDepositsOne + totalDepositsTwo);
        let totalCombinedInterestEarned = (totalInterest + totalInterestOne + totalInterestTwo);
        let totalFutureInvestmentValue = (totalAmount + totalAmountOne + totalAmountTwo);
        let totalCombinedYears = Math.max(years, yearsOne, yearsTwo);;
        let combinedSipYears = Math.max(activeSipYears, activeSipYearsOne, activeSipYearsTwo);
        console.log();
        console.log("************************************************************************************");
        console.log("Total Combined Deposit: ₹" + combinedDeposit);
        console.log("Total Combined Interest Earned: ₹" + totalCombinedInterestEarned);
        console.log("Combined Future Investment Value: ₹" + totalFutureInvestmentValue);
        console.log("Total Combined No of Years: " + totalCombinedYears);
        console.log("Total Combined No of Years with Active SIP: " + combinedSipYears);
        console.log("************************************************************************************");
        document.querySelector('.combinedTotalDeposit').value = combinedDeposit;
        document.querySelector('.combinedTotalInterest').value = totalCombinedInterestEarned;
        document.querySelector('.combinedFutureInvestmentValue').value = totalFutureInvestmentValue;
        document.querySelector('.combinedNoOfYears').value = totalCombinedYears;
        document.querySelector('.combinedNoOfYearsSip').value = combinedSipYears;
        showCombinedPortfolio();
    } else {
        hideCombinedPortfolio();
    }

    document.querySelector('.right-div-container').classList.remove('hidden');
    document.getElementById('yearly-data').classList.add('active');
    document.getElementById('monthly-data').classList.remove('active');
    showYearlyData();
}

function createMonthlyResultTable(monthlyInvestmentHistory, tableContainerId) {
    const tableContainer = document.getElementById(tableContainerId);
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Month', 'Deposit', 'Total Deposits', 'Interest', 'Accrued Interest', 'Balance'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    for (const investmentDetails of monthlyInvestmentHistory) {
        const row = table.insertRow();

        // Check for yearly high light
        if (investmentDetails.month !== 0 && investmentDetails.month % 12 === 0) {
            row.classList.add('highlight');
        }
        row.insertCell().textContent = investmentDetails.month;
        appendCellWithHtml(row, investmentDetails.sipAmount);
        appendCellWithHtml(row, investmentDetails.principalForTheMonth);
        appendCellWithHtml(row, investmentDetails.interestForTheMonth);
        appendCellWithHtml(row, investmentDetails.totalInterest);
        appendCellWithHtml(row, investmentDetails.totalAmount);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
    tableContainer.classList.remove('hidden');
}

function createYearlyResultTable(yearlyInvestmentHistory, tableContainerId) {
    const tableContainer = document.getElementById(tableContainerId);
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Year', 'Deposit', 'Total Deposits', 'Interest', 'Accrued Interest', 'Balance'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    for (const investmentDetails of yearlyInvestmentHistory) {
        const row = table.insertRow();
        row.insertCell().textContent = investmentDetails.year;
        appendCellWithHtml(row, investmentDetails.sipAmount);
        appendCellWithHtml(row, investmentDetails.principalForTheMonth);
        appendCellWithHtml(row, investmentDetails.interestForTheMonth);
        appendCellWithHtml(row, investmentDetails.totalInterest);
        appendCellWithHtml(row, investmentDetails.totalAmount);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
    tableContainer.classList.remove('hidden');
}

function appendCellWithHtml(row, data) {
    const cell = row.insertCell();
    if (data !== undefined) {
        if (data < 0) {
            const positiveData = Math.abs(data);
            const formattedData = positiveData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            cell.innerHTML = `
                <div class="resultNumberWrapper red">
                    <div>(</div>
                    <div class="container">
                        <div class="pWrapper">
                            <p>&#8377;</p>
                        </div>
                    </div>
                    <div class="resultNumber">${formattedData}</div>
                    <div>)</div>
                </div>
            `;
        } else {
            const formattedData = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            cell.innerHTML = `
                <div class="resultNumberWrapper green">
                    <div class="container">
                        <div class="pWrapper">
                            <p>&#8377;</p>
                        </div>
                    </div>
                    <div class="resultNumber">${formattedData}</div>
                </div>
            `;
        }
    }
}

function getStepUpFrequency(stepUp) {
    switch (stepUp) {
        case 3: // Quarterly
            return 3;
        case 6: // Half yearly
            return 6;
        case 12: // Yearly
            return 12;
        default:
            return Number.MAX_SAFE_INTEGER;
    }
}

function getSipFrequency(frequency) {
    switch (frequency) {
        case 3: // Quarterly
            return 3;
        case 6: // Half yearly
            return 6;
        case 12: // Yearly
            return 12;
        default:
            return 1; // Monthly
    }
}

function aggregateYearlyInvestmentHistory(monthlyInvestmentHistory) {
    const yearlyInvestmentMap = new Map();

    for (const monthlyInvestment of monthlyInvestmentHistory) {
        const year = monthlyInvestment.year;
        if (!yearlyInvestmentMap.has(year)) {
            yearlyInvestmentMap.set(year, new InvestmentHistory(year, 0, 0, 0, 0, 0, 0));
        }

        const yearlyInvestment = yearlyInvestmentMap.get(year);

        yearlyInvestment.sipAmount += monthlyInvestment.sipAmount;
        yearlyInvestment.principalForTheMonth = monthlyInvestment.principalForTheMonth;
        yearlyInvestment.interestForTheMonth += monthlyInvestment.interestForTheMonth;
        yearlyInvestment.totalInterest = monthlyInvestment.totalInterest;
        yearlyInvestment.totalAmount = monthlyInvestment.totalAmount;
    }

    return Array.from(yearlyInvestmentMap.values());
}

function formatInputFieldValues() {
    const inputElements = document.querySelectorAll('input[type="text"]:not(.lumpsumwithdrawalYears)');
    inputElements.forEach((input) => {
        let value = input.value.replace(/\D/g, '');
        if (!isNaN(value) && value !== '') {
            let formattedValue = Number(value).toLocaleString();
            input.value = formattedValue;
        } else {
            input.value = 0;
        }
    });
}
