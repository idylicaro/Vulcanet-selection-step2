const convertCaseLine = (str) => {
    let aux = str.split(' ')
    for (let index = 0; index < aux.length; index++) {
        aux[index] = parseInt(aux[index])
    }
    return aux
}

const permute = (permutation) => {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i]; // i % 2 != 0 , so k = c[i]
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

const verifyValidPermut = (cans, permuts) => {
    for (let x = 0; x < permuts.length; x++) {
        let i = permuts[x][0], j = permuts[x][1], k = permuts[x][2];

        if ((i < j < k) && (cans[i] < cans[j] && cans[j] > cans[k])) {
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