function letterCombinations(digits) {
    if (!digits.length) {
        return ['']
    }
    const lettersMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    let res = []
    function getCombinations(index, path) {
        if (index === digits.length) {
            res.push(path);
            return
        }

        let letters = lettersMap[digits[index]]
        for (let i = 0; i < letters.length; i++) {
            getCombinations(index + 1, path + letters[i])
        }
    }

    getCombinations(0, '')
    return res
}

console.log(letterCombinations(''))

// ['abc', 'def']
