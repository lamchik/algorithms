/*
* Дан массив различных целых чисел `candidates` и целое число `target`.
Нужно вернуть список всех уникальных комбинаций элементов из `candidates`, сумма которых равна `target`.
Комбинации можно возвращать в любом порядке.
Одно и то же число из массива `candidates` можно использовать неограниченное количество раз.
Две комбинации считаются уникальными, если частота хотя бы одного выбранного числа отличается.
Гарантируется, что количество уникальных комбинаций, сумма которых равна `target`, для данного входного набора меньше 150.
*
* Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
* */


function combinationSum(candidates, target) {
    const res = []
    function backtracking(start, sum, path) {
        if (sum === target) {
            return res.push([...path])
        }
        if(sum > target) {
            return
        }


        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtracking(i, sum + candidates[i], path)
            path.pop()
        }
    }

    backtracking(0, 0, [])
    return res
}

console.log(combinationSum([2,3,6,7], 7))
