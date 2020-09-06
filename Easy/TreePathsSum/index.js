/*
Given the root of a binary tree where each node contains an integer, determine the sum of all of the integer values in the tree.

Example:

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
The expected output given the above tree is 5 + 4 + 8 + 11 + 13 + 4 + 7 + 2 + 1, so your function should return 55.
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function tree_paths_sum(root) {
    let sum = 0;
    let queue = [];
    let current = root;

    queue.push(current);

    while (queue.length) {
        current = queue.shift();
        sum += current.value;

        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    return sum;
}
