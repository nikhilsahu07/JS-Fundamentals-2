//Coding challenge #1

const calcAverage = (score1, score2, score3)=> (score1 + score2 + score3)/3;

//Data-1
const avgdolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

//Data-2
const avgdolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgdolphins, avgKoalas){
    if (avgdolphins > avgKoalas && avgdolphins >= 2 * avgKoalas) {
        console.log(`Team Dolphins win (${avgdolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgdolphins && avgKoalas >= 2 * avgdolphins) {
        console.log(`Team Koalas wins (${avgKoalas} vs. ${avgdolphins})`);
    } else {
        console.log("No Team wins..!");
    }
}

checkWinner(avgdolphins1, avgKoalas1);
checkWinner(avgdolphins2, avgKoalas2);
