function commonCharacters(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  let results = "";
  for (let i = 0; i < string1.length; i++) {
    if (results.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        results += string1[i];
      }
    }
  }
  console.log("Common letters: " + results.split("").join(", "));
}
commonCharacters("Happy", "Happiness");
