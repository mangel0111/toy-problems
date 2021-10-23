function countingValleys(steps, path) {
    let currentLevel = 0;
    let valleysCount = 0;
    for (let index = 0; index < path.length; index++) {
        const currentPath = path[index];
        if (currentPath === "D") {
            currentLevel--;
        }
        if (currentPath === "U") {
            currentLevel++;
            if (currentLevel === 0) {
                valleysCount++;
            }
        }

    }
    return valleysCount;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"))