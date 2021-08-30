function getValue() {
    let loanAmount = document.getElementById("loanAmount").value;
    let numberPayments = document.getElementById("numberPayments").value;
    let rate = document.getElementById("rate").value;
    // should check if they are numbers
    let eachMonth = calculus(loanAmount, numberPayments, rate);
    displayValue(eachMonth);

}
// use toFixed() to round and convert to string ! 
function calculus(loanAmount, numberPayments, rate) {
    let monthlyPayment = 0;
    let totalCost = 0;
    let totalInterest = 0;
    let eachMonth = {
        month: [0],
        payment: 0,
        principal: [0],
        interest: [0],
        totalInterestObj: 0,
        balance: [loanAmount],
        totalInterestEnd: 0,
        totalCost: 0
    };
    let obj = {
        un: 1,
        deux: 2
    };
    //payment est la mensualité
    monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-60));
    //25000 × (5 ÷ 1200) ÷ (1 - (1 + 5 ÷ 1200))^(-60)=471.7808411
    eachMonth.payment = monthlyPayment;
    totalInterest = (monthlyPayment * numberPayments) - loanAmount;
    eachMonth.totalInterestEnd = totalInterest;
    totalCost = loanAmount + totalInterest;
    eachMonth.totalCost = totalCost;

    for (let i = 1; i <= numberPayments; i++) {
        eachMonth.month.push(i);
        eachMonth.interest.push(eachMonth.balance[i - 1] * rate / 1200);
        eachMonth.principal.push(monthlyPayment - eachMonth.interest[i]);
        eachMonth.balance.push(eachMonth.balance[i - 1] - eachMonth.principal[i]);
    }
    return eachMonth;
    // formules a verifier:
    //balance 0 =loanAmount
    /* first Term:  interest1==balance0*5/1200
                    principal1==payment-interest1
                    balance1==balance0-principal1

                    eachMonth.interest[i]==eachMonth.balance[i-1]*5/1200
                    principali==payment-interesti
                    balancei==balance[i-1]]-principali */
}

function displayValue() {

}