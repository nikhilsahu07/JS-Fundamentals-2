'use strict';

//Activating strict mode

//strict mode helps to find errors easily and prevent us from making further big bug
//it must be in the first line of the js file otherwise it won't work

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest){
//     hasDriverLicense = true; //js console didn't warn me about this without strict mode
//     console.log("Allowed to drive..!");
// } else {
//     hasDriverLicense = false;
// }

// if (hasDriversLicense){
//     console.log('I can drive..!');
// }

// let interface = 'qwerty';  //strict mode save you from illigal commands before they become bug
// console.log(interface);
// const private = 'home';

//Basic Functions

// function firstJsFunction() {
//     console.log(`My first function is created on Javascript..!`);
// }
//calling-invoking-running a function 
// firstJsFunction();
// firstJsFunction();
// firstJsFunction();

//Here,apples and oranges are parameters because they only act as a variable and take value to be inserted in the functions
// function juiceMakerFunction(apples, oranges) {
//     const juice = (`Juice of ${apples} apples and ${oranges} oranges are made..!`);
//     return juice; //we saved juice in return so that even after calling a function we can particularly choose which variavle to be called individually if required
// }

// const appleJuice = juiceMakerFunction(5,0); //Now, we passes the arguements to be executed
// console.log(appleJuice);

// const appleOrangeJuice = juiceMakerFunction(2,3);
// console.log(appleOrangeJuice);

//Function declarations Vs. Expressions

//function Declarations

// function yourAge(birthYear) {
//     return 2023 - birthYear;
// }

// let myAge1 = yourAge(2004);
// console.log(myAge1);

// //fucntion Expression

//function without a name-anonymous function
// const yourAge2 = function (birthYear){
//     return 2023 - birthYear;
// }

// const myAge2 = yourAge2(2003);
// console.log(myAge2);
//Difference--> fucntion can called anywhere in the code in func declarations, but in func expressions we can't access func before initialization
