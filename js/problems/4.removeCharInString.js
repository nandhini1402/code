function removeChar(str, char) {
  var finalStr = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      finalStr = finalStr + str[i];
    }
  }

  return finalStr;
}

var str = "hello world";
var char = "o";
console.log(removeChar(str, char));
