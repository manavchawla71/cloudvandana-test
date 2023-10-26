function reverseWords(sentence) {
  let words = [];
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word = sentence[i] + word;
    }
  }

  words.push(word);

  return words.join(" ");
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
