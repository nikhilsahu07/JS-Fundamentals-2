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

//Functions calling other functions

function describePopulation(country, population) {
    return `${country} has ${population} million people,
which is about ${percentageOfWorld1(population).toFixed(2)}% of the world..! `;
}

console.log(describePopulation('India', 1428));
console.log(describePopulation('Nepal', 30));
console.log(describePopulation('Russia', 143));

//Introduction to Arrays

const populations = [1428, 30, 143, 33];

// populations.length > 4 ? console.log('true') : console.log('false');
console.log(populations.length === 4);

const percentages =[(populations[0] / 79).toFixed(2), 
                    (populations[1] / 79).toFixed(2), 
                    (populations[2] / 79).toFixed(2), 
                    (populations[populations.length - 1]).toFixed(2) 
                    ];
console.log(percentages);

//Basic Array Operations(methods)

const neighbours = ['pakistan', 'china', 'bangladesh', 'bhutan', 'nepal', 'maldives', 'sri lanka'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) console.log(`Probably not a central Europian country :D`);

neighbours[neighbours.indexOf('china')] = 'Republic of china';
console.log(neighbours);

//Intro to Objects

const myCountry = {
    country : 'India',
    capital : 'New Delhi',
    language : 'Hindi',
    population : 1428,
    neighbours : neighbours
}; 
console.log(myCountry);
