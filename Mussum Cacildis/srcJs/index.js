const readlineSync = require('readline-sync');
const utils = require('./utils')

let nCases = readlineSync.question()
while(nCases--){
    const nCans = readlineSync.question()
    const cans = utils.convertCaseLine(readlineSync.question())

    const permuts = utils.permute(nCans)
           
    let flag = false;
    flag = utils.verifyValidPermut(cans, permuts)

    if (!flag) {
        console.log('NO')
    }
}
