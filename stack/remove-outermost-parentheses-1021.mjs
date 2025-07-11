/*
    A valid parentheses string is either empty "", "(" + A + ")", or A + B,
    where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
    A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B,
    with A and B nonempty valid parentheses strings.

    Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk,
    where Pi are primitive valid parentheses strings.
    Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

    Input: s = "(()())(())"
    Output: "()()()"
* */

function removeOuterParentheses (s) {
    const stack = []
    let result = ''
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            stack.pop()
        }
        else { stack.push(s[i]) }
        if (stack.length === 0) {
            result = result + s.slice(counter+1, i)
            counter = i+1
        }
    }
    return result
}

console.log(removeOuterParentheses('()() () () (())'))
