
function rotLeft(a, d) {
    for (let index = 0; index < d; index++) {
        const firstItem = a[0];
        a.splice(0, 1);
        a.push(firstItem);
    }
    return a;
}

function rotLeftImproved(a, d) {
    let rotationIndex = d;

    if (d === a.length) {
        return a;
    }

    if (d > a.length) {
        if (d % a.length === 0) {
            return a;
        }
        const difference = Math.floor(d / a.length);
        rotationIndex = d - (a.length * difference);
    }
    const rotatedNumber = a[rotationIndex - 1];
    const firstInter = a.slice(0, rotationIndex - 1);
    const lastInter = a.slice(rotationIndex, a.length);

    return [...lastInter, ...firstInter, rotatedNumber];
}

console.log(rotLeft([1, 2, 3, 4, 5], 104))
console.log(rotLeftImproved([1, 2, 3, 4, 5], 104))