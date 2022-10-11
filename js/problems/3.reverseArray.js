function reverseArray(arr) {
  reversedArr = [];
  j = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr[j] = arr[i];
    j++;
  }

  return reversedArr;
}

var arr = [6, 7, 8, 9, 10];
console.log(reverseArray(arr));
