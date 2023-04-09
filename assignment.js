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

