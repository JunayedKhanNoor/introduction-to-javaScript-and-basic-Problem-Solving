let arr = [44, 2, 3, 4, 22, 3, 4, 5, 4, 3, 4];
function summation(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(summation(arr));

