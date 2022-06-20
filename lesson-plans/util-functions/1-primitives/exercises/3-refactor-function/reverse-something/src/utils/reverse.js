/**
 *
 */
export const reverse = (text = '') => {
  let reversedWord = '';
  for (const char of text) {
    reversedWord = char + reversedWord;
  }
  return reversedWord;
};
