function removeDup(arr) {
  var finalArr = [];

  if (arr.length === 0) {
    return [];
  }

  for (var i = 0; i < arr.length; i++) {
    var pushflag = 1;

    for (var j = 0; j < finalArr.length; j++) {
      if (arr[i] === finalArr[j]) {
        pushflag = 0;
        break;
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

export default removeDup;
