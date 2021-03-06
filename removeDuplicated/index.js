const removeDuplicated = arr => {
    if (arr.length === 0) return [];
    if (!Array.isArray(arr)) throw new Error('Not an array');
    return [...new Set(arr)];
}


module.exports = removeDuplicated;