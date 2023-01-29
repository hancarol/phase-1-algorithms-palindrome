function isPalindrome(word) {
  const palindrome = word.split("").reverse().join("");
  return word === palindrome;
}

/* 
  initalize a function called idPalindrom

  take in an parameter named word
  in the body, compare the word to determine if its palindrome

  return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
