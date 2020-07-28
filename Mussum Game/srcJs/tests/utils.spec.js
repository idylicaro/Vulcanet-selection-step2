const sut = require('../utils')
describe('Utils ', () => {
    test('Should return vector with 2 index  ', () => {
        const result = sut.getCaseNM('1 2')
        expect(result[0]).toBe(1)
        expect(result[1]).toBe(2)
    });
});