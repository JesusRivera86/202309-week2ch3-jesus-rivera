export const arrayLength = (arr) => {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }

  return count;
};

export const arrayPush = (arr, item) => {
  const length = arrayLength(arr);
  arr[length] = item;
  return length + 1;
};
