function calculator(num1, num2, oper) {
  var result;

  if (oper === "+") return num1 + num2;
  if (oper === "-") return num1 - num2;
  if (oper === "/") return num1 / num2;
  if (oper === "*") return num1 * num2;

  return result;
}

var num1 = 2;
var num2 = 3;

var oper = "*";

console.log(calculator(num1, num2, oper));
