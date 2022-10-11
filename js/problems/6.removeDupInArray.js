function removeDup(arr) {
  var finalArr = [];

  if (arr === []) {
    return arr;
  }

  for (var i = 0; i < arr.length; i++) {
    var pushflag = 1;

    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          pushflag = 0;
          break;
        }
      }
    }

    if (pushflag) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

var arr = [1, 1, 2, 3, 3, 4, 5, 6, 5];

console.log(removeDup(arr));
