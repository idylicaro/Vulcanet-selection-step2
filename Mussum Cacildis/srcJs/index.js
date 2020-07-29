const readlineSync = require('readline-sync');
const utils = require('./utils')


const nCases = readlineSync.question()
for (let x = 0; x < nCases; x++) {
    const nCans = readlineSync.question()
    const cans = utils.convertCaseLine(readlineSync.question())

    let permuts = new Array()

    for (let x = 0; x < nCans; x++)
        for (let j = 0; j < nCans; j++)
            for (let g = 0; g < nCans; g++)
                if (x != j && x != g && j != g)
                    permuts.push([x, j, g])
                    
    let flag = false;
    flag = utils.verifyValidPermut(cans, permuts)

    if (!flag) {
        console.log('NO')
    }
}
