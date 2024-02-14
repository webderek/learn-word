export const getArrayWithMaxLengthWords = (
  words: Array<string>,
  maxLength: number
): string[] => {
  const result = [];
  let currentWord = "";
  let currentLength = 0;

  for (const [index, word] of words.entries()) {
    const haveNextWord = words[index + 1];
    if (currentLength + word.length + 2 <= maxLength) {
      currentWord += (currentWord ? ", " : " ") + word;
      currentLength += word.length + 2;
    }

    if (currentLength + word.length + 2 > maxLength || !haveNextWord) {
      result.push(currentWord);
      currentLength = 0;
      currentWord = "";
    }
  }

  return result;
};
