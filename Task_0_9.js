function printVowels(word) {
  word = word.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  let results = "";
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i]) && !results.includes(word[i])) {
      let arr = vowel.splice(vowel.indexOf(word[i], 1));
      results += word[i];
    }
  }
  console.log("Vowels: " + results.split("").join(", "));
}
printVowels("umuziacademy");
