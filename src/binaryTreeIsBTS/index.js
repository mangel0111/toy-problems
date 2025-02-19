// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const isBTS = (root, min = -Infinity, max = Infinity) => {
    if (!root) return true;
    if (min >= root.val || root.val >= max) {
        return false
    };
    return isBTS(root.left, min, root.val) && isBTS(root.right, root.val, max);
}

console.log(isBTS(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
console.log(isBTS(new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))));
console.log(isBTS(new TreeNode(100, new TreeNode(50, new TreeNode(25), new TreeNode(75)), new TreeNode(200, new TreeNode(125), new TreeNode(350)))));

