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
    LET eachMonth = {};

    totalMonthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-60));
    //25000 × (5 ÷ 1200) ÷ (1 - (1 + 5 ÷ 1200))^(-60)=471.7808411
    // taux peridique =(1+taux annuel)^(1/periode par an donc 12) -1
    monthlyRate = ((1 + rate) ^ (1 / 12)) - 1;  // 0.161037
    // montant interets = (montant mensualite*nb mensualite)-capital emprunté
    totalInterestEnd = (totalMonthlyPayment * numberPayments) - loanAmount;
    /* first Term:  interestPayment=loanAmount*monthlyRate
                    totalmonthlyPayment-interestPayment
faire un objet  qui contient tous les Array.

*/
    
}