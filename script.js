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

//Arrow Fucntions

//helps in writing one line functions
// const yourAge = birthYear => 2023 - birthYear;
// const myAge = yourAge(2003);
// console.log(myAge);

//if parameters or/and return code block are more than just a one line

// const yearsLeftinRetirement = (birthYear, myName) => {
//     const myAge = 2023 - birthYear;
//     const leftAge = 60 - myAge;
    // return leftAge;
//     return `${myName} you are ${myAge} year old and after 
// ${leftAge} years you'll be retired..!`;
// }
//💡 A function in Javascript can return only one vlaue at once
// console.log(yearsLeftinRetirement(2003, 'Riya'));

//Functions calling another functions- Nested functions

// function fruitCutter(fruit) {
//     return fruit * 4;
// }

// function juiceMakerFunction(apples, oranges) {
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     const juice = (`Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces..!`);
//     return juice; //we saved juice in return so that even after calling a function we can particularly choose which variavle to be called individually if required
// }

// const appleOrangeJuice = juiceMakerFunction(3,4);
// console.log(appleOrangeJuice);

//Reviewing and revising functions

// const myAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsLeftinRetirement = function (birthYear, myName) {
//     const myAge1 = myAge(birthYear);
//     const leftAge = 60 - myAge1;

//     if (leftAge > 0) {
//         console.log(`${myName} wil be retired after ${leftAge} years..!`);
//         return leftAge;
        //return keyword imidiately return the value and end the function
    // } else{
    //     console.log(`${myName} is already been retired..!`);
    //     return -1;
        //no code work after return keyword
    // }
//     return `${myName} you are ${myAge} year old and after 
// ${leftAge} years you'll be retired..!`;
// }

// console.log(yearsLeftinRetirement(1950, 'riya'));
// console.log(yearsLeftinRetirement(1969, 'raj'));

//Arrays

// const frnd1 = 'kunal';
// const frnd2 = 'sandeep';
// const frnd3 = 'sumit';

//initializing an array
// const friends = ['kunal', 'sandeep', 'sumit', 'anish'];
// console.log(friends);

//another way of writing a data-types in array
// const year = new Array(1969, 2003, 2004, 2008);
// console.log(year);

// console.log(friends[0]); //indexing from zero
// console.log(friends[2]);

//length property
// console.log(friends.length);
// console.log(friends.length - 1); //index of last element of given array
// console.log(friends[friends.length - 1]);

//array data-types are mutable
// friends[2] = 'sandeep 2';
// console.log(friends);

// const descStuent = ['Riya', 'Singh', 20, 2023 - 2003, 'BCA', friends];
// console.log(descStuent);
// console.log(descStuent.length);

//Exercise
// const yourAge = function (birthYear){
//     return 2023 - birthYear;
// }

// const age1 = yourAge(year[0]);
// const age2 = yourAge(year[1]); 
// const age3 = yourAge(year[2]); 
// const age4 = yourAge(year[year.length - 1]);

// console.log(age1, age2, age3, age4);

//we can also save values in an array
// const ages = [yourAge(year[0]), yourAge(year[1]), yourAge(year[year.length - 1])];
// console.log(ages);
