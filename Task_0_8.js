function convertNumbersIntoTime(number) {
  let hour, minute;
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  if (hours == 1) {
    hour = " hour";
  } else {
    hour = " hours";
  }
  if (minutes == 1) {
    minute = " minute";
  } else {
    minute = " minutes";
  }
  return hours.toString() + hour + ", " + minutes.toString() + minute;
}

console.log(convertNumbersIntoTime(70));
