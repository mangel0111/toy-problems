function sockMerchant(n, ar) {
    let pairs = {};
    let numberOfPairs = 0;
    for (let index = 0; index < ar.length; index++) {
        const currentSock = ar[index];
        if (pairs[currentSock]) {
            numberOfPairs++;
            delete pairs[currentSock];
        } else {
            pairs[currentSock] = true;
        }

    }
    return numberOfPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))