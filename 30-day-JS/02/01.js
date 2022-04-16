/*
Write a function which count the number of occurrence of words in a paragraph or a sentence.
The function countWords takes a paragraph and two words as parameters.
 It compare which word is most frequently occurred in the paragraph.
*/

function countWords(para, sentence1, sentence2) {
  let count1 = 0;
  let count2 = 0;
  para.split(' ').filter((letter) => {
    if (letter === sentence1) {
      count1++;
    }
    if (letter === sentence2) {
      count2++;
    }
  });
  return `${sentence1} has appeared ${count1} times while ${sentence2} has appeared ${count2} times.`;
}

const paragraph =
  'I love teaching . If you do not love teaching what else can you love . I love JavaScript if you do not love something which can give life to your application what else can you love .';
console.log(countWords(paragraph, 'love', 'you'));
// The word love more frequently occurred than you.
