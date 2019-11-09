const sumOfRange = require('./index');

describe('Sum of Range', () => {
    test('Throw error if non-array', () => {
        expect(() => sumOfRange('apple')).toThrow();
    });

    test('Expect a number returned', () => {
        expect(typeof sumOfRange([1, 4])).toBe('number');
    });

    test('[1, 5]  return 15', () => {
        expect(sumOfRange([1, 5])).toBe(15);
        expect(sumOfRange([5, 1])).toBe(15);
    });

});