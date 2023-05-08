/* Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones takes off with a delivery,
 the delivery's ID is added to an array, deliveryIdConfirmations. When the drone comes back and lands, the ID is again added to the same
 array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back from a delivery.
We suspect a secret agent from Amazon placed an order and stole one of our patented drones. To track them down,
we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
*/

const findMisssingDrone = (ids) => {
  const missingDrones = new Set();
  ids.forEach((currentId) => {
    if (missingDrones.has(currentId)) {
      missingDrones.delete(currentId);
    } else {
      missingDrones.add(currentId);
    }
  });

  return Array.from(missingDrones);
};

console.log(findMisssingDrone([1, 1]));
console.log(findMisssingDrone([1, 1, 2]));
console.log(
  findMisssingDrone([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10])
);
