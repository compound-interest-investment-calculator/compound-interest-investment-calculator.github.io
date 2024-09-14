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
    const investmentFrequency = getSelectedValue('investmentFrequency'); // Monthly
    console.log("Investment Frequency: " + investmentFrequency);
    const sip = isChecked('sipYes');
    console.log("SIP? " + sip);
    const sipAmount = getNumericValue('.sipAmount');
    console.log("SIP Amount: " + sipAmount);
    const stepUpSip = isChecked('sipStepUpYes');
    console.log("StepUp SIP? " + stepUpSip);
    const stepUp = getSelectedValue('stepUpFrequency'); // Yearly
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
    const stepUpWithdrawalFrequency = getSelectedValue('withdrawalStepUpFrequency'); // Yearly
    console.log("StepUp Withdrawal Frequency: " + stepUpWithdrawalFrequency);
    const stepUpWithdrawalIncrease = getNumericValue('.withdrawalStepUpPercentage');
    console.log("Increase Withdrawal Precent by: " + stepUpWithdrawalIncrease + "%");
    const bonusSip = isChecked('bonusSipYes');
    console.log("Bonus SIP? " + bonusSip);
    const bonusSipAmount = getNumericValue('.bonusSipAmount');
    console.log("Bonus SIP Amount: " + bonusSipAmount);
    const bonusSipFrequency = getSelectedValue('bonusSipFrequency'); // Yearly
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
    const stepUpBonusSipPercent = getNumericValue('.bonusSipStepUpPercentage'); // Adjust this as per the requirement
    console.log("Increase Bonus SIP by: " + stepUpBonusSipPercent + "%");
    const stepUpBonusSipFrequency = getSelectedValue('bonusSipStepUpFrequency'); // Yearly
    console.log("Bonus SIP StepUp Frequency: " + stepUpBonusSipFrequency);

    calculateCompoundInterest(startingYear, initialInvestment, annualInterestRate, years, months, sip, investmentFrequency, sipAmount,
        stepUpSip, stepUp, stepUpIncrease, decreaseStepUpPercent, decreaseStepUpPercentAfterYears,
        decreaseStepUpPercentTo, stopSipAfterAPeriod, stopSipAfterYears, systematicWithdrawalAfterAPeriod,
        systematicWithdrawalAfterYears, withdrawalPerMonth, stepUpWithdrawal, stepUpWithdrawalFrequency, stepUpWithdrawalIncrease,
        bonusSip, bonusSipAmount, bonusSipFrequency, lumpSumWithdrawals, lumpSumWithdrawalAmount,
        lumpSumWithdrawalYears, stepUpBonusSip, stepUpBonusSipPercent, stepUpBonusSipFrequency);

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

function calculateCompoundInterest(startingYear, initialInvestment, annualInterestRate,
    years, months, sip, investmentFrequency, sipAmount,
    stepUpSip, stepUp, stepUpIncrease,
    decreaseStepUpPercent, decreaseStepUpPercentAfterYears, decreaseStepUpPercentTo,
    stopSipAfterAPeriod, stopSipAfterYears,
    systematicWithdrawalAfterAPeriod, systematicWithdrawalAfterYears, withdrawalPerMonth,
    stepUpWithdrawal, stepUpForWithdrawal, stepUpWithdrawalIncrease,
    bonusSip, bonusSipAmount, bonusSipFrequency,
    lumpSumWithdrawals, lumpSumWithdrawalAmount, lumpSumWithdrawalYears,
    stepUpBonusSip, stepUpBonusSipPercent, stepUpBonusSipFrequency) {
    console.log("************************************************************************************");
    const monthlyInterestRate = annualInterestRate / 12;
    const totalMonths = years * 12 + months;
    let totalDeposits = initialInvestment;
    let totalAmount = initialInvestment;
    let totalInterest = 0;
    let totalWithdrawals = 0;
    let currentYear = startingYear;
    let monthCounter = 0;
    let frequencyCounter = 0;
    const sipFrequency = getSipFrequency(investmentFrequency);
    const stopSipAfterMonths = stopSipAfterYears * 12;
    const startWithdrawalAfterMonths = systematicWithdrawalAfterYears * 12;
    let withdrawalFrequencyCounter = 0;
    const withdrawalFrequency = getStepUpFrequency(stepUpForWithdrawal);
    const monthlyInvestmentHistory = [];

    let decreasedStepUp = false;

    // Determine the bonus SIP frequency in months
    const bonusSipFreq = getStepUpFrequency(bonusSipFrequency);
    // Determine the step-up bonus SIP frequency in months
    const stepUpBonusSipFreq = getStepUpFrequency(stepUpBonusSipFrequency);

    // Convert lump sum withdrawal years to months for easier comparison
    const lumpSumWithdrawalMonths = lumpSumWithdrawalYears.map(year => year * 12);

    if (initialInvestment !== 0) {
        monthlyInvestmentHistory.push(new InvestmentHistory(currentYear - 1, 0, 0, initialInvestment, 0, 0, initialInvestment));
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

        // Check for lump sum withdrawals
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

        // Check if SIP step-up is enabled
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

    for (const investmentDetails of monthlyInvestmentHistory) {
        console.log(`${investmentDetails.month}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
    }

    console.log();

    const yearlyInvestmentHistory = aggregateYearlyInvestmentHistory(monthlyInvestmentHistory);
    for (const investmentDetails of yearlyInvestmentHistory) {
        console.log(`${investmentDetails.year}\t${investmentDetails.sipAmount}\t${investmentDetails.principalForTheMonth}\t${investmentDetails.interestForTheMonth}\t${investmentDetails.totalInterest}\t${investmentDetails.totalAmount}`);
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

    createMonthlyResultTable(monthlyInvestmentHistory);
    createYearlyResultTable(yearlyInvestmentHistory);
    document.querySelector('.right-div-container').classList.remove('hidden');
    document.getElementById('yearly-data').classList.add('active');
    document.getElementById('monthly-data').classList.remove('active');
    showYearlyData();
}

function createMonthlyResultTable(monthlyInvestmentHistory) {
    const tableContainer = document.getElementById('monthlyResultTable');
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

function createYearlyResultTable(yearlyInvestmentHistory) {
    const tableContainer = document.getElementById('yearlyResultTable');
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