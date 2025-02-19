
function jumpingOnClouds(c) {
    let jumpCount = 0;
    for (let index = 0; index < c.length - 1; index++) {
        const twoStepsCurrent = c[index + 2];
        if (twoStepsCurrent === 0) {
            index++;
        }
        jumpCount++;
    }
    return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))