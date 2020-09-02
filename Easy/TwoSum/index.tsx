// Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

// optimized --> 

function twoSum2(nums: number[], target: number): number[] {

    type Cache = { [key: number]: number };
    const cache: Cache = {};

    for (let i = 0; i < nums.length; i++) {

        if (cache[nums[i]] >= 0) {
            return [cache[nums[i]], i];
        }

        cache[target - nums[i]] = i;
    }
    return [0, 0]
};