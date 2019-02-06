export const sumOfMultiplesOf3and5 = num => {
  var sum = 0;

  for (let index = 1; index < num; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
};
