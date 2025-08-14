/*
* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*
Example 1:
* Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*
* Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

function permute(nums) {
    let res = [] // [1, 2, 3, 4]

    let used = []
    function backtracking(index, path) {

        if(index === nums.length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used.includes(nums[i])) {
                continue
            }
            path.push(nums[i])
            used.push(nums[i])
            backtracking(index + 1, path) //2, [1, 2],  [1, 2]
            path.pop()
            used.pop()
        }

    }
    backtracking(0, [])
    return res
}

console.log(permute([1,2,3]))
