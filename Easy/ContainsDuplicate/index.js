// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
    let cache = [];
    let hasDupe = false;

    nums.forEach(num => {
        if (cache.includes(num)) {
            hasDupe = true;
        } else {
            cache.push(num)
        }
    })
    return hasDupe;
};

var containsDuplicate2 = function (nums) {
    let cache = {};
    let hasDupe = false;

    let i = 0;

    while (hasDupe === false && nums.length > 1 && i < nums.length) {
        if (cache.hasOwnProperty(nums[i])) {
            hasDupe = true;
            return hasDupe;
        } else {
            cache[nums[i]] = nums[i];
            i++;
        }
    }

    return hasDupe;
};

var containsDuplicate3 = function (nums) {
    let cache = {};
    let i = 0;

    while (nums.length > 1 && i < nums.length) {
        if (cache[nums[i]]) {
            return true;
        } else {
            cache[nums[i]] = nums[i];
            i++;
        }
    }

    return false;
};

var containsDuplicate4 = function (nums) {
    let cache = {};
    let hasDupe = false;

    let i = 0;

    while (hasDupe === false && nums.length > 1 && i < nums.length) {
        if (cache.hasOwnProperty(nums[i])) {
            hasDupe = true;
            return hasDupe;
        } else {
            cache[nums[i]] = nums[i];
            i++;
        }
    }

    return hasDupe;
};

// your fastest JS solution

var containsDuplicate5 = function (nums) {
    nums.sort()

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};


// your shortest solution

var containsDuplicate6 = function (nums) {
    let numSet = new Set(nums)

    return numSet.size < nums.length
};