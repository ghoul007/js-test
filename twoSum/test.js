const twoSum = require('./index');


describe("twoSum", () => {

    test('[4, 7, 11, 15] target=15 return [0, 2]', () => {
        expect(twoSum([4, 7, 11, 15], 15)).toEqual([0, 2])
    })
})