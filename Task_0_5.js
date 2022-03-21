function threeLength(lengthA, lengthB, lengthC){
    const semi_perimeters = 1/2*(lengthA + lengthB + lengthC)
    return (semi_perimeters*((semi_perimeters - lengthA)*(semi_perimeters - lengthB)*(semi_perimeters - lengthC))**2)
    
}
console.log(threeLength(2, 6, 5))