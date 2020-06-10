// Codewars Challenges

function reverseWords(str) {

    const arr = str.split(" ").map((i) => i.split("").reverse().join(""));
    return arr.join(" ");

}

function toJadenCase(str) {
    // split string into array
    const arr = str.split(" ");
    // loop through array & capitalise each char at start of string
    return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function iqTest(numbers) {

    // get numbers into array & convert to int
    const numArr = numbers.split(" ").map((n) => parseInt(n));
    // count each of different types
    let odd = 0, even = 0;
    numArr.forEach((n) => {
        if (n % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    })

    // find the odd number out
    if (even > odd) {
        const findOddNum = numArr.filter((n) => n % 2 !== 0)
        // return index + 1
        return numArr.indexOf(findOddNum[0]) + 1
    } else {
        const findEvenNum = numArr.filter((n) => n % 2 === 0)
        return numArr.indexOf(findEvenNum[0]) + 1
    }

}

function isPangram(string) {
    // turn string into array
    const arr = string.split("");

    // loop through array and push characters only. Ignore space & punctuation
    const regex = /([a-z])/gi;
    let newArr = [];
    arr.forEach((i) => {
        if (i.match(regex)) {
            // make all characters lowercase so only unique are selected using new Set
            newArr.push(i.toLowerCase());
        }
    })
    // return true if unique letters === 26, else false
    return new Set(newArr).size === 26;
}

module.exports = {
    reverseWords,
    toJadenCase,
    iqTest,
    isPangram
};

