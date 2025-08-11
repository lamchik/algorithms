/*
* Given the root of a binary tree, return its maximum depth.

* A binary tree's maximum depth is the number of nodes along the longest path from
* the root node down to the farthest leaf node.
* */

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    return root.left
};

let root = [3,9,20,null,null,15,7]

console.log(maxDepth(root))
