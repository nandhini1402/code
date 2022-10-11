function reverse(str) {
  var reversedstring = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedstring = reversedstring + str[i];
  }

  return reversedstring;
}

var str = "hello world";

console.log(reverse(str));
