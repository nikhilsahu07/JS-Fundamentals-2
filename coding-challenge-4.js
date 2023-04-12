//Coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
    if(bill >= 50 && bill <= 300) {
        return bill *.15;
    } else if (bill > 300) {
        return bill *.20;
    } else {
        return 0;
    }

}

for (i =0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips);
console.log(bills);
console.log(totals);

//bonus-challenge

// test array
arr1 = [6, 2, 3, 4, 5];

function calcAverage(arr) {
    var avg = 0;
    for (i =0; i < arr.length; i++) {
        avg += arr[i];
    }
    avg = avg / (arr.length);
    return avg;
}
// console.log(totals);
console.log(`Average of the array numbers are : ${calcAverage(totals).toFixed(2)}`);
