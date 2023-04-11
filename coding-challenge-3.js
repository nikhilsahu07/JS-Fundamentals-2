// Coding Challenge #3

const markDetails = {
    hisName: 'Mark',
    weight: 78,
    height: 1.69,

    calcBMI: function (){
        this.hisBMI = this.weight / this.height ** 2;
        return this.hisBMI;
    },
}

const johnDetails = {
    hisName: 'John',
    weight: 92,
    height: 1.95,

    calcBMI: function (){
        this.hisBMI = this.weight / this.height ** 2;
        return this.hisBMI;
    },
}

console.log(johnDetails, markDetails);
console.log(johnDetails.calcBMI());
console.log(markDetails.calcBMI());

console.log(johnDetails.hisBMI);
console.log(markDetails.hisBMI);

console.log(johnDetails.hisBMI > markDetails.hisBMI ? 
`${johnDetails.hisName}'s BMI (${johnDetails.hisBMI}) is higher than ${markDetails.hisName}'s (${markDetails.hisBMI}).` : 
`${markDetails.hisName}'s BMI (${markDetails.hisBMI}) is higher than ${johnDetails.hisName}'s (${johnDetails.hisBMI}).`);

