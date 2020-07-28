const convertCaseLine = (str) => {
    let aux = str.split(' ')
    for (let index = 0; index < aux.length; index++) {
        aux[index] = parseInt(aux[index])
    }
    return aux.sort((a, b) => a - b)
}
const permutation = (resultTotal,vector, vectorSize) => {
    
}

module.exports = {
    convertCaseLine
}