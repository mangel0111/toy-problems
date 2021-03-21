/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const translateRomanNumeral = (romanNumber) => {
  const romanCharacters = romanNumber.split("");
  let naturalNumber = 0;
  for (let index = 0; index < romanCharacters.length; index++) {
    const currentLetter = romanCharacters[index];
    const nextLetter = romanCharacters[index + 1];

    const currentValue = romanNumbers[currentLetter];
    if (!currentValue) {
      return "Invalid Input";
    }
    const nextValue = romanNumbers[nextLetter];
    if (currentValue < nextValue) {
      naturalNumber -= currentValue;
    } else {
      naturalNumber += currentValue;
    }
  }
  return naturalNumber;
};

console.log("IV", translateRomanNumeral("IV"));
console.log("IX", translateRomanNumeral("IX"));
console.log("VI", translateRomanNumeral("VI"));
console.log("LX", translateRomanNumeral("LX"));
console.log("AA", translateRomanNumeral("AA"));
console.log("VII", translateRomanNumeral("VII"));
console.log("VIII", translateRomanNumeral("VIII"));
console.log("CD", translateRomanNumeral("CD"));
console.log("MCMXCIX", translateRomanNumeral("MCMXCIX"));
console.log("MMXXI", translateRomanNumeral("MMXXI"));
