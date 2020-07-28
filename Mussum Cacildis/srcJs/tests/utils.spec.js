const sut = require('../utils')
describe('Utils ', () => {
    test('Should return vector with 2 index and correct values and sort ', () => {
        const result = sut.convertCaseLine('2 1')
        expect(result[0]).toBe(1)
        expect(result[1]).toBe(2)
    });
});