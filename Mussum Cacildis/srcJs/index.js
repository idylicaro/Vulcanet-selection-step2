const readlineSync = require('readline-sync');
const utils = require('./utils')


const nCases = readlineSync.question()
for(let x=0; x < nCases; x++){
    const nCans = readlineSync.question()
    const cans = utils.convertCaseLine(readlineSync.question())
}
console.log(nCases)

// p i , p j , p k tal que i <j <k e p i <p j e p j > p k .