const isPalindrome = require('./index');

describe("isPalindrome", () => {

    test(' error if not string', () => {
        expect(() => isPalindrome(10)).toThrow();
    })

    test(' "test" return false', () => {
        expect(isPalindrome('test')).toBe(false);
    })

    test(' "tet" return true', () => {
        expect(isPalindrome('tet')).toBe(true)
    })

    test(' "Aha" return true', () => {
        expect(isPalindrome('Aha')).toBe(true)
    })

    test(' "" return true', () => {
        expect(isPalindrome('')).toBe(true)
    })
})
