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

function letterCombinations2(digits) {
    if (!digits.length) {
        return []
    }
    const lettersMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    let result = [""];
    for (const digit of digits) {
        const letters = lettersMap[digit];
        const newResult = [];

        for (const prefix of result) {
            console.log('prefix', prefix)
            for (const letter of letters) {
                newResult.push(prefix + letter);
            }
        }
        result = newResult;
    }
    return result;
}

console.log(letterCombinations2('23'))

// ['abc', 'def']
