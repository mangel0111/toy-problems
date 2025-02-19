function arrayManipulation(n, queries) {
    let listToOperate = new Array(n).fill(0);
    for (let index = 0; index < queries.length; index++) {
        const query = queries[index];
        const start = query[0] - 1;
        const end = query[1];

        for (let indexQuery = start; indexQuery < end; indexQuery++) {
            const valueToAdd = query[2];
            listToOperate[indexQuery] += valueToAdd;
        }
    }
    return Math.max(...listToOperate);
}

function arrayManipulationImproved(n, queries) {
    const arr = Array(n + 1);
    let maxValue = 0,
        currentNumber = 0;
    console.log(queries);
    queries.forEach(([startRange, endRange, value]) => {
        arr[startRange] = arr[startRange] || { start: 0, end: 0 };
        arr[endRange] = arr[endRange] || { start: 0, end: 0 };
        arr[startRange].start += value;
        arr[endRange].end += value;

        console.log(arr);
    });
    arr.forEach((cell) => {
        if (cell) {
            currentNumber += cell.start;
            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }
            currentNumber -= cell.end;
        }
    });
    return maxValue;
}

function arrayManipulationImprovedAdvanced(n, queries) {
    let arr = new Array(n + 1).fill(0);
    queries.forEach(([a, b, k]) => {
        arr[a - 1] += k;
        arr[b] -= k;
    })
    let sum = 0;
    let max = 0;
    arr.forEach(val => {
        sum += val;
        max = Math.max(sum, max)
    })
    return max;
}

console.log(arrayManipulationImprovedAdvanced(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))