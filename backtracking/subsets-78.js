/*
* Given an integer array nums of unique elements, return all possible subsets (the power set).
* The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3,4]
Output: [ [],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3] ]
*/

function subsets (nums) {
    let res = [ ]

    function backtrack(start = 0, path = []) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop()
        }
    }

    backtrack();
    return res;

}

console.log(subsets([1, 2, 3]))
