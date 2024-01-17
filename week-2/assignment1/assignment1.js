function max(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));
