export const recursiveSum = arr => {
  if (arr === undefined || arr === null) {
    return 0;
  }
  return arr.length === 0 ? 0 : arr[0] + recursiveSum(arr.slice(1));
};
