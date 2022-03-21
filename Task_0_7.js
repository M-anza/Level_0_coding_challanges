function convertCelsiusToFahrenheit(celsius) {
    var fahrenheit;
    fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(19));

function convertFahrenheintToCelsius(fahrenheit) {
    var celsius;
    celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(convertFahrenheintToCelsius(45));