function printVowels(word) {
  word = word.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  let results = "";
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i]) && !results.includes(word[i])) {
      results += word[i];
    }
  }
  console.log("Vowels: " + results.split("").join(", "));
}
printVowels("HI THERE MY NAME IS BOB THE BUILDER");
