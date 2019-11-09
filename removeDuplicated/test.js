const removeDuplicated = require('./index');

describe("removeDuplicated", () => {

    test(' error if not string', () => {
        expect(() => removeDuplicated(10)).toThrow();
    })

    test('[] if empty input', () => {
        expect(removeDuplicated([])).toEqual([]);
    })

    test('[1,2,1,2,1,5] return [1,2,5]', () => {
        const input = [1, 2, 1, 2, 1, 5];
        const expected = [1, 2, 5]
        expect(removeDuplicated(input)).toEqual(expected);
    })


})
