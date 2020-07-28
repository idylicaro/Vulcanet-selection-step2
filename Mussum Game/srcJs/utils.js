const getCaseNM = (str) => {
    let aux = str.split(' ')
    aux[0] = parseInt(aux[0])
    aux[1] = parseInt(aux[1])
    return aux
}

module.exports = {
    getCaseNM
}