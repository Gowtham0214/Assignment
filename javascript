1. Take a sentence as an input and reverse every word in that sentence.
Example - This is a sunny day > shiT si a ynnus yad.

  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  const reversedSentence = reverseWordsInSentence(sentence);
  console.log('Reversed sentence:', reversedSentence);
  rl.close();
});

function reverseWordsInSentence(sentence) {
  
  const words = sentence.split(' ');
  const reversedWords = words.map(word => reverseWord(word));
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}


2. Perform sorting of an array in descending order.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter numbers separated by spaces: ', (input) => {
  const numbers = input.split(' ').map(Number)
  numbers.sort((a, b) => b - a);
  console.log('Sorted in descending order:', numbers);
  rl.close();
});
