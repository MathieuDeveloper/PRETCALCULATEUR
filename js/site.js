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
    let payment = 0;
    let balance = 0;
    let interest = 0;
    let principal = 0;
    //let monthlyRate = 0;
    let totalCost = 0;
    let totalInterest = 0;
    let eachMonth = {month:[0], payment=0, principal:[0], interest:[0], totalInterest:[0], balance:[loanAmount], totalInterest=0};
//payment est la mensualité
    payment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-60));
    //25000 × (5 ÷ 1200) ÷ (1 - (1 + 5 ÷ 1200))^(-60)=471.7808411
    eachMonth.payment = payment;
    
    
    // taux periodique =(1+taux annuel)^(1/periode par an donc 12) -1
    //monthlyRate = ((1 + rate/100) ^ (1 / 12)) - 1;  // 0.00407412378
    // montant interets = (montant mensualite*nb mensualite)-capital emprunté
    totalInterest = (payment * numberPayments) - loanAmount;
    eachMonth.totalInterest = totalInterest;
    totalCost = loanAmount + totalInterestEnd;
    for (let i = 1; i <= numberPayment; i++) {
        
        

    }
    // formules a verifier:
    //balance 0 =loanAmount
    /* first Term:  interest1==balance0*5/1200
                    principal1==payment-interest1
                    balance1==balance0-principal1

                    eachMonth.interest[i]==eachMonth.balance[i-1]*5/1200
                    principali==payment-interesti
                    balancei==balance[i-1]]-principali


   



*/
    eachMonth.month.push(69);
    alert(eachMonth.month);
    
}

function display() {
    
}