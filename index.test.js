const {
    reverseWords,
    toJadenCase,
    iqTest,
    isPangram
} = require('./index');

describe("reverse string", () => {
    test("Test should return reversed string", () => {
        expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe("ehT kciuq nworb xof spmuj revo eht yzal .god")
        expect(reverseWords('double  spaced  words')).toBe("elbuod  decaps  sdrow")
    });
});

describe("Capitalise first letter of each word", () => {
    test("Each letter at the start of a word to be capitalised", () => {
        expect(toJadenCase("How can mirrors be real if our eyes aren't real")).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
    })
})

describe("Find the odd number and return it index positon", () => {
    test("Test should return position 3", () => {
        expect(iqTest("2 4 7 8 10")).toBe(3)
    })
    test("Test should return position 2", () => {
        expect(iqTest("1 2 1 1")).toBe(2)
    })
})

describe("Test if string is a pangram", () => {
    test("Passed string should return true", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
    })
    test("Passed string should return false", () => {
        expect(isPangram("This is not a pangram.")).toBe(false);
    })
    test("Passed string should return true when using upper & lowercase letters", () => {
        expect(isPangram("Pack my box with five dozen liquor jugs.")).toBe(true);
    })
})