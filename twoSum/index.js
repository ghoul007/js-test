const twoSum = (nums, target) => {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (comp[diff] !=  undefined) {
            return [comp[diff], i]
        }
        comp[nums[i]] = i
    }
};


module.exports = twoSum;