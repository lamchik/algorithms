/*
* You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.
*
* */

function calPoints (operations) {
    let result = 0
    let stack = []
    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(Number(operations[i]))) {
            stack.push(+operations[i])
            result = result + stack[stack.length - 1]
        }
        if (operations[i] === 'C') {
            result = result - stack[stack.length - 1]
            stack.pop()
        }
        if (operations[i] === 'D') {
            let last = stack[stack.length - 1]
            stack.push(+last * 2)
            result = result + stack[stack.length - 1]

        }
        if (operations[i] === '+') {
            let last = stack[stack.length - 1]
            let preLast = stack[stack.length - 2]
            stack.push(+last + +preLast)
            result = result + stack[stack.length - 1]
        }
    }
    return result
}

console.log(calPoints(["5","2","C","D","+"]))
