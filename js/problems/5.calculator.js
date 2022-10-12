function calculator(num1, num2, oper) {
  if (oper === "+") return num1 + num2;
  else if (oper === "-") return num1 - num2;
  else if (oper === "/") return num1 / num2;
  else if (oper === "*") return num1 * num2;
  else {
    return "";
  }
}

var num1 = 2;
var num2 = 3;

var oper = "*";

console.log(calculator(num1, num2, oper));

export default calculator;
