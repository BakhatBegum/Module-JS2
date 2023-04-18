/*
  This exercise is to write function that counts the number of times each word appears in a string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If the function is given the input:

  "you and me and you";

  the object returned would be:

  { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops or forEach
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the chapter
*/

function countWords(string) {
  const wordCount = {};

  let words = string.split(" ");

  words.forEach((word) => {
    if (word !== "") {
      if (wordCount.hasOwnProperty(word)) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    }
  });

  return wordCount;
}

/* ======= TESTS - DO NOT MODIFY =====
 */

test("given empty string returns an empty object", () => {
  expect(countWords("")).toEqual({});
});

test("works for a small string", () => {
  expect(countWords("I love CodeYourFuture")).toEqual({
    I: 1,
    love: 1,
    CodeYourFuture: 1,
  });
});

test("removes all punctuation", () => {
  expect(countWords("A string with, some punctuation")).toEqual({
    A: 1,
    string: 1,
    with: 1,
    some: 1,
    punctuation: 1,
  });
});

test("Example task string", () => {
  expect(
    countWords(
      "you're braver than you believe, stronger than you seem, and smarter than you think"
    )
  ).toEqual({
    "you're": 1,
    and: 1,
    believe: 1,
    braver: 1,
    seem: 1,
    smarter: 1,
    stronger: 1,
    than: 3,
    think: 1,
    you: 3,
  });
});
