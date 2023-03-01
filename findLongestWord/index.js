function findLongestWordLength(str) {
    let longestword = ""
    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        let individualWord = words[i];
        if (individualWord.length > longestword.length) {
            longestword = individualWord
        }
    }

  return longestword.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));