function minimumBribes(queue) {
    let chaotic = false
    let bribes = 0
    for (let index = 0; index < queue.length; index++) {
        const currentPerson = queue[index];
        const currentIndex = index + 1;
        if (currentPerson - currentIndex > 2) {
            chaotic = true;
            console.log("Too chaotic");
            return;
        }
        for (let othersPersonsIndex = currentPerson - 2; othersPersonsIndex < index; othersPersonsIndex++) {
            const anotherPersonBehind = queue[othersPersonsIndex];
            if (anotherPersonBehind > currentPerson) {
                bribes++;
            }
        }
    }
    console.log(bribes);
}

minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);