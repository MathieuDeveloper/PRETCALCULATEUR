//Call Hello World
function getValue() {
    let loanAmount = document.getElementById("loanAmount").value;
    let numberPayments = document.getElementById("numberPayments").value;
    let rate = document.getElementById("rate").value;
    
    // should check if they are numbers
    
    
    calculus(loanAmount, numberPayments, rate);


}
// use toFixed() to round and convert to string ! 
function calculus(loanAmount, numberPayments,rate) {
    let totalMonthlyPayment = 0;
    let remainingBalance = 0;
    let interestPayment = 0;
    let principalPayment = 0;
    let monthlyRate = 0;
    let totalCost = 0;
    let totalInterestEnd = 0;
    let eachMonth = {month:[0], payment=0, principal:[0], interest:[0], totalInterest:[0], balance:[loanAmount], totalInterestEnd=0};

    totalMonthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-60));
    //25000 × (5 ÷ 1200) ÷ (1 - (1 + 5 ÷ 1200))^(-60)=471.7808411
    eachMonth.payment = totalMonthlyPayment;
    
    
    // taux periodique =(1+taux annuel)^(1/periode par an donc 12) -1
    monthlyRate = ((1 + rate) ^ (1 / 12)) - 1;  // 0.161037
    // montant interets = (montant mensualite*nb mensualite)-capital emprunté
    totalInterestEnd = (totalMonthlyPayment * numberPayments) - loanAmount;
    eachMonth.totalInterestEnd = totalInterestEnd;
    totalCost = loanAmount + totalInterestEnd;
    for (let i = 1; i <= numberPayment; i++) {
        
        

    }
    // formules a verifier:
    //balance 0 =loanAmount
    /* first Term:  interestPayment1==balance0*monthlyRate
                    principal1==totalMonthlyPayment-interestPayment1
                    balance1==balance0-principal1

                    eachMonth.interest[i]==eachMonth.balance[i-1]*monthlyRate
                    principali==totalMonthlyPayment-interestPayment1
                    balancei==balance0-principal1


    second Term:    interestPayment2==balance1*monthlyRate
                    interestPayment2==(loanAmount-principal1)*monthlyRate

                    principal2==totalMonthlyPayment-interestPayment2
                    balance2==balance1-principal2



*/
    eachMonth.month.push(69);
    alert(eachMonth.month);
    
}

function display() {
    
}