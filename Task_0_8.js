function convertNumbersIntoTime (number){
    let hour, minute;
    let hours = Math.floor(number / 60);
    let minutes = number % 60;
    if (hours > 1){
         hour = " hours"
    } else {
         hour = " hour"
    }
    if (minutes > 1){
         minute = " minutes"
    }else {
        minute = " minute"
    }
    return hours.toString() + hour + ", " + minutes.toString() +  minute;
    
}

console.log(convertNumbersIntoTime(71))