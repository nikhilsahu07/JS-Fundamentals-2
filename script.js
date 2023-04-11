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

//Array methods or Opeartions

// const friends = ['kunal', 'sandeep2', 'sumit', 'anish'];

//Adding elements to the array
// friends.push('vivek'); //add elements to the end of the array
// console.log(friends);

// const myLove = friends.unshift('riya'); //return the length of the array
// console.log(myLove); //add elements to the begning of the array
 
//removing elements to the array
// friends.pop(); //remove elements in the last
// console.log(friends);

// const popped = friends.pop();//return that removed
// console.log(popped);

// friends.shift();
// console.log(friends);

// const firstElementOut = friends.shift();//return that removed elemets
// console.log(firstElementOut);


//more methods

// console.log(friends.indexOf('sumit')); //index of element in the fucntion
// console.log(friends.indexOf('riya')); //-1 means doesn't exit

// friends.push('riya');
// console.log(friends.includes('sumit')); //returns boolean value if it includes
// console.log(friends.includes('anish'));

// if (friends.includes('riya')) {
//     console.log('She is still with you..!');
// } else {
//     console.log('She dumped you..!');
// }


//Introduction to objects

//objects are same as array but with key-value pair

// const descStuent = ['Riya', 'Singh',
//                     20, 
//                     'nikhil', 
//                     2023 - 2003, 
//                     'BCA', 
//                     ['sheetal', 'rajani', 'vaishnavi'] 
//                 ];  

//definig an objects
// const myDetails = {firstName: 'Nikhil',
//                    lastName: 'Sahu',
//                    age: 2023 - 2004,
//                    love: 'Riya',
//                    course: 'BCA',
//                    friends: ['kunal', 'sandeep 2', 'sumit'],
//                    };
                   
// console.log(myDetails);

/*.Dot vs. [brackets] Notation
difference b/w dot and brackets notation is that
dot notation only accepts static keys while
Brackets Notation accepts dynamic keys
static key means values are directly type and dynamic means key is evaluated from an expression 
*/
// const myDetails = {firstName: 'Nikhil',
//                    lastName: 'Sahu',
//                    age: 2023 - 2004,
//                    love: 'Riya',
//                    course: 'BCA',
//                    friends: ['kunal', 'sandeep 2', 'sumit'],
//                    };

// console.log(myDetails);

// console.log(myDetails.firstName); //calling key name
// console.log(myDetails['age']);

// const nameKey = 'Name';
// console.log(myDetails['first' + nameKey]);
// console.log(myDetails[`last${nameKey}`]);

// const checkerObjects = prompt('What do you want check?(firstName/lastName/age/love/course/friends): ');

// myDetails[checkerObjects] ? console.log(myDetails[checkerObjects]) : console.log("Doesn't exit in data..!");

//adding more key value pair
// myDetails.location = 'India';
// console.log(myDetails);

//exercise
// console.log(`${myDetails.firstName + myDetails.lastName} has ${myDetails.friends.length} friends and has ${myDetails['love'] ? `a beautiful girlfriend named ${myDetails.love}.` : 'no girlfriend by choice'}
// and his best friend is ${myDetails.friends[1]} `);

//Object Methods

// const myDetails = { firstName: 'Nikhil ',
//                     lastName: 'Sahu',
//                     birthYear: 2003,
//                     love: 'Riya',
//                     course: 'BCA',
//                     hasDriversLicense: true,
//                     friends: ['kunal', 'sandeep 2', 'sumit'],

                    // calcAge: birthYear => 2023 - birthYear,

                    // calcAge: function () {
                    //     console.log(this); //'this' is same as the name of the object i.e., myDetails--> don't repeat code and not hardcore the code
                    //     return 2023 - this.birthYear;
                    // }
                
//                     calcAge: function () {
//                         this.age = 2023 - this.birthYear; //adding element directly in the object
//                         return this.age;
//                     },

//                     getSummary: function() {
// return  `${this.firstName + this.lastName} is ${this.calcAge()} years old 
// pursuing his studies in ${this.course} 
// and ${this.love ? `has a beautiful girlfriend named ${this.love},` : `he's single by choice,`}
// and he has ${this.hasDriversLicense ? 'a' : 'no'} driving license..! `
//                     }

//                    };

// console.log(myDetails.calcAge(2004));
// console.log(myDetails.calcAge(myDetails.birthYear));
// console.log(myDetails['calcAge'](myDetails.birthYear));

// console.log(myDetails.calcAge());

// console.log(myDetails.age);

// console.log(myDetails.getSummary())
