//Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('India', 1428, 'New Delhi');
const country2 = describeCountry('Nepal', 30, 'Kathmandu');
const country3 = describeCountry('Russia', 143, 'Moscow');

console.log(country1);
console.log(country2);
console.log(country3);

//function decalartions vs expressions

//function declarations
function percentageOfWorld1(population) {
    return population / 79 ;
}

const countryPopulation1 = percentageOfWorld1(1428);
const countryPopulation2 = percentageOfWorld1(30);
const countryPopulation3 = percentageOfWorld1(143);

//function expressions
const percentageOfWorld2 = function (population) {
    return population / 79 ;
}

const countryPopulation4 = percentageOfWorld2(1428);
const countryPopulation5 = percentageOfWorld2(30);
const countryPopulation6 = percentageOfWorld2(143);

console.log(countryPopulation1, countryPopulation4);
console.log(countryPopulation2, countryPopulation5);
console.log(countryPopulation3, countryPopulation6);

//Arrow Functions

const percentageOfWorld3 = population => population / 79 ;
console.log(percentageOfWorld3(143));
