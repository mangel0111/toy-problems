
const checkCurrentCode = (codeSequences, shoppingItems) => {
    let codeValidated = 0;
    if (codeSequences.length !== shoppingItems.length) {
        return false;
    }
    for (let index = 0; index < codeSequences.length; index++) {
        const currentSequence = codeSequences[index];
        const shopItem = shoppingItems[index];
        if (currentSequence === "anything" || currentSequence === shopItem) {
            codeValidated++;
        }
    }
    return codeValidated === codeSequences.length;
}

function validator(codeList, shoppingCart) {
    let codeValidated = 0;
    let listCheckedIndex = 0;
    for (let index = 0; index < codeList.length; index++) {
        const currentCode = codeList[index];
        const codeSequences = currentCode.split(" ")

        for (let indexOfShopping = listCheckedIndex; indexOfShopping < shoppingCart.length; indexOfShopping++) {
            const shoppingItems = shoppingCart.slice(indexOfShopping, indexOfShopping + codeSequences.length);
            if (checkCurrentCode(codeSequences, shoppingItems)) {
                codeValidated++;
                listCheckedIndex += codeSequences.length;
                break;
            }
        }
    }
    return codeValidated === codeList.length;
}

console.log(validator(["orange", "apple apple", "banana apple banana"], ["orange", "apple", "apple", "banana", "apple", "banana"]))
console.log(validator(["orange", "apple apple", "banana anything banana"], ["orange", "apple", "apple", "banana", "apple", "banana"]))
console.log(validator(["orange", "apple apple", "banana anything banana"], ["orange", "orange", "apple", "apple", "banana", "apple", "banana"]))
console.log(validator(["apple apple", "apple apple banana"], ["apple", "apple", "apple", "banana"]))

