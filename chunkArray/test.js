const chunkArray = require('./index');

describe('chunkArray', () => {

    test('throw error if no array input ', () => {
        expect(() => chunkArray('1234564', 2)).toThrow();
    })

    test('throw error if no input ', () => {
        expect(() => chunkArray()).toThrow();
    })

    test('Expect [[1,2,3][4,5,6]]', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const expectedArray = [[1, 2, 3],[4, 5, 6]]
        expect(chunkArray(arr, 3)).toEqual(expectedArray);
    })

    test('Expect [[1,2,3,4,5,6]]', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(chunkArray(arr, 0)).toEqual(arr);
    })



})