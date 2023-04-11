//Coding Challenge #2
var tip;
const bill = Number(prompt("Enter you bill,Steven: "));


function calcTip(bill) {
    bill >= 50 && bill <= 300 ? tip = bill *0.15 : tip = bill*0.20;
    return tip;
}

console.log(calcTip(bill));

const bills = [100, 125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])];

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2], bills[3]+tips[3]];

console.log(bills, tips, totals);