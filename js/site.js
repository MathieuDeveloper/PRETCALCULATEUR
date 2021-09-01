function getValue() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let numberPayments = parseFloat(document.getElementById("numberPayments").value);
    let rate = parseFloat(document.getElementById("rate").value);

    //  check if they are numbers
    if (Number.isNaN(loanAmount) == false && Number.isNaN(numberPayments) == false &&
        Number.isNaN(rate) == false) {
        let eachMonth = calculus(loanAmount, numberPayments, rate);
        displayValue(eachMonth);
    } else {
        alert("Vous devez entrer des nombres !");
    }
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
        totalInterestObj: [0],
        balance: [loanAmount],
        totalInterestEnd: 0,
        totalCost: 0,
        term: 0,
        loanAmount: 0,
    };
    
    //payment est la mensualité
    monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-60));
    //25000 × (5 ÷ 1200) ÷ (1 - (1 + 5 ÷ 1200))^(-60)=471.7808411
    eachMonth.payment = monthlyPayment;
    eachMonth.loanAmount = loanAmount;
    totalInterest = parseFloat((monthlyPayment * numberPayments) - loanAmount);
    eachMonth.totalInterestEnd = parseFloat(totalInterest);
    totalCost = parseFloat(loanAmount) + parseFloat(totalInterest);
    eachMonth.totalCost = totalCost;
    eachMonth.term = numberPayments;

    for (let i = 1; i <= numberPayments; i++) {
        eachMonth.month.push(i);
        eachMonth.interest.push(eachMonth.balance[i - 1] * rate / 1200);
        eachMonth.principal.push(monthlyPayment - eachMonth.interest[i]);
        eachMonth.totalInterestObj.push(eachMonth.interest[i - 1] + eachMonth.interest[i]);
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

function displayValue(eachMonth) {
    let tableBody = document.getElementById("results");
    tableBody.innerHTML = "";
    let templateRow = document.getElementById("loanTemplate");

    document.getElementById("payment").innerHTML = `$${eachMonth.payment.toFixed(2)}`;

    document.getElementById("totalPrincipal").innerHTML = `$${parseFloat(eachMonth.loanAmount).toFixed(2)}`;
    document.getElementById("totalInterest").innerHTML = `$${parseFloat(eachMonth.totalInterestEnd).toFixed(2)}`;

    document.getElementById("totalCost").innerHTML = `$${parseFloat(eachMonth.totalCost).toFixed(2)}`;

    for (let index = 1; index <= eachMonth.term; index += 1) {


        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].textContent = eachMonth.month[index];
        rowCols[1].textContent = eachMonth.payment.toFixed(2);
        rowCols[2].textContent = eachMonth.principal[index].toFixed(2);
        rowCols[3].textContent = eachMonth.interest[index].toFixed(2);
        rowCols[4].textContent = eachMonth.totalInterestObj[index].toFixed(2);
        rowCols[5].textContent = eachMonth.balance[index].toFixed(2);

        tableBody.appendChild(tableRow);



    }


}