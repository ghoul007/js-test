const chunkArray = (arr, size) => {
    if (!arr) throw new Error('Undefined input')
    if (!Array.isArray(arr)) throw new Error('Invalid array');
    if(size===0) return arr;
    const result = [];
    const length = arr.length;
    for (let i = 0; i < length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;
}

module.exports = chunkArray;