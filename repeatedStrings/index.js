

function repeatedString(s, n) {
    let aCounts = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === "a") {
            aCounts++;
        }
    }
    const multiplier = Math.floor(n / s.length);
    let result = aCounts * multiplier;
    const difference = n % s.length;
    if (difference !== 0) {
        const stringDiference = s.slice(0, difference);
        result += repeatedString(stringDiference, stringDiference.length);
    }
    return result;
}

console.log(repeatedString("aba", 10));