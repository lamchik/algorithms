/*
    Given a 0-indexed string word and a character ch,
    reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
    If the character ch does not exist in word, do nothing.

    For example, if word = "abcdefd" and ch = "d",
    then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
    Return the resulting string.

    Input: word = "abcdefd", ch = "d"
    Output: "dcbaefd"
*/

function reversePrefix (word, ch) {
    let stack = []
    let res = ''
    const index = word.indexOf(ch)
    const end = word.slice(index + 1)
    if (index < 0) {
        return word
    }
    for (let i = 0; i <= index; i++) {
        stack.push(word[i])
    }

    while (stack.length) {
        res = res + stack.pop()
    }

   return res + end
}

console.log(reversePrefix('abcdefd', 'd'))
