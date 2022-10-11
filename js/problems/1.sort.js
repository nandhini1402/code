function sort(arr, sortType = "asc") {
  if (!arr || arr.length === 0) {
    return [];
  }

  var arrToSort = arr.slice();

  if (sortType === "asc") {
    for (var i = 0; i < arrToSort.length; i++) {
      for (var j = i + 1; j < arrToSort.length; j++) {
        if (arrToSort[i] > arrToSort[j]) {
          var temp = arrToSort[i];
          arrToSort[i] = arrToSort[j];
          arrToSort[j] = temp;
        }
      }
    }
  }

  if (sortType === "desc") {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arrToSort[i] < arrToSort[j]) {
          var temp = arrToSort[i];
          arrToSort[i] = arrToSort[j];
          arrToSort[j] = temp;
        }
      }
    }
  }

  return arrToSort;
}

// var arr = [5, 1, 2];
// var resultAsc = sort(arr);
// var resultDesc = sort(arr, "desc");
// console.log(resultAsc);
// console.log(resultDesc);

// // Improved
// function sortArr(arr, sortType) {
//   return arr.sort((a, z) => (sortType === "desc" ? z - a : a - z));
//   // return arr.sort(function (a, z) {
//   //   if (sortType === "desc") {
//   //     return z - a;
//   //   } else {
//   //     return a - z;
//   //   }
//   // });
// }

// console.log("ABC", resultAsc);
// console.log("CBA", resultDesc);

export default sort;
