/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

*/

function isPalindrome(x: number): boolean {
    let str: string[] = x.toString().split('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;

};

function isPalindrome2(x: number): boolean {
    let y: string = x.toString().split('').reverse().join('');
    if (parseInt(y) === x) {
        return true;
    } else {
        return false;
    }
};