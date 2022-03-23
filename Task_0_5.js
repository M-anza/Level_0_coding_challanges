function threeLength(lengthA, lengthB, lengthC) {
  const semi_perimeters = ((lengthA + lengthB + lengthC) * 1) / 2;
  return (
    (semi_perimeters *
      ((semi_perimeters - lengthA) *
        (semi_perimeters - lengthB) *
        (semi_perimeters - lengthC))) **
    (1 / 2)
  );
}
console.log(threeLength(6, 7, 8));
