
const maxiumTime = 9;
const maxEvents = (arrival, duration) => {
    let counter = 0;
    const eventsSchedules = new Map();

    for (let index = 0; index < arrival.length; index++) {
        const currentArraival = arrival[index];
        const currentDuration = duration[index];

        for (let scheduleIndex = currentArraival; scheduleIndex < currentArraival + currentDuration; scheduleIndex++) {
            let possibleIndex = scheduleIndex;
            let isScheduled = false;
            while (!isScheduled) {
                if (eventsSchedules.get(possibleIndex)) {
                    possibleIndex++;
                } else {
                    if (possibleIndex > maxiumTime) {
                        return counter;
                    }
                    eventsSchedules.set(possibleIndex, true);
                    isScheduled = true
                }
            }
        }
        counter++;
    }
    return counter;
}

console.log(maxEvents([1, 3, 3, 5, 7, 8], [2, 2, 1, 4, 1, 1])) // 5