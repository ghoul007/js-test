const isPalindrome = str => {
    if (typeof str !== 'string') throw new Error('Invalid string');
    str = str.toLowerCase();
    return str.split('').reverse().join('') === str;
}


module.exports = isPalindrome;