const  sumOfRange = arr => {
  if (!Array.isArray(arr)) throw new Error('Type must be of Array');

  const low = Math.min(...arr);
  const high = Math.max(...arr);
  let sum = 0;
  for (let i = low; i <= high; i += 1) sum += i;
  return sum;
}

module.exports = sumOfRange;