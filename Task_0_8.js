function convertNumbersIntoTime (number){
    var hours = Math.floor(number / 60);
    var minutes = number % 60;
    if (hours > 1){
        var hour = " hours"
    } else {
        var hour = " hour"
    }
    if (minutes > 1){
        var minute = " minutes"
    }else {
        var minute = " minute"
    }
    return hours.toString() + hour + ", " + minutes.toString() +  minute;
    
}

console.log(convertNumbersIntoTime(71))