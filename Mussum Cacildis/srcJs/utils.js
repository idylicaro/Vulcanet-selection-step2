const convertCaseLine = (str) => {
    let aux = str.split(' ')
    for (let index = 0; index < aux.length; index++) {
        aux[index] = parseInt(aux[index])
    }
    return aux
}

const permute = (nCans) => {
    let result = new Array()
    for (let x = 0; x < nCans; x++)
        for (let j = 0; j < nCans; j++)
            for (let g = 0; g < nCans; g++)
                if ((x !== j) && (x !== g) && (j !== g))
                    result.push([x, j, g])     
    return result;
}

const verifyValidPermut = (cans, permuts) => {
    for (let x = 0; x < permuts.length; x++) {
        let i = permuts[x][0], j = permuts[x][1], k = permuts[x][2];
        if ((i < j && j < k) && (cans[i] < cans[j] && cans[j] > cans[k])) {
            console.log('YES')
            console.log(i + 1, j + 1, k + 1)
            return true;
        }
    }
    return false
}

module.exports = {
    convertCaseLine,
    permute,
    verifyValidPermut
}