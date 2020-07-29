const sut = require('../utils')
describe('Utils ', () => {
    test('Should return vector with 2 index and correct values ', () => {
        const result = sut.convertCaseLine('2 1')
        expect(result[0]).toBe(2)
        expect(result[1]).toBe(1)
    });
    
    test('Should return correct Pn, Pn = (n!)/(n-3)! ', () => {
        let result = sut.permute(5)
        expect(result.length).toBe(60)
    });
});