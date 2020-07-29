const utils = require('./utils')

let cans = [5,3,1,2,4]
const nCans = 5;
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

console.log(permuts.length)