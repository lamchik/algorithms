/*
* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*
*
Example 2:
Input: n = 1
Output: ["()"]
*
*/

function generateParenthesis(n) {
    let res = [];

    function genCombinations (combination, start, end) {
        if (start === end && start === n) {
            res.push(combination)
        }
        if (start > end) {
            genCombinations(combination + '(', start, end + 1 )
        }
        if (start < n) {
            genCombinations(combination + ')', start + 1, end )
        }
    }
    genCombinations('', 0, 0);
    return res
}

console.log( generateParenthesis(2) )
