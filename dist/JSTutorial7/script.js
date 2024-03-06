let sum = (a, b) => {
  let result = a + b;
  return result;
}

let result1 = sum(5,7);
console.log(result1); // 12



let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby






let greet = x => console.log(x);
greet('Hello'); // Hello





//Function Expression
// let sum = function (num1,num2){
//   return num1 + num2;
// }
//Arrow Function
let sum1 = (num1,num2) => num1 + num2;

//difference of two numbers
const difference = function(num1,num2){
  return num1 - num2;
}


let number1 = 10;
let number2 = 20;
console.log("sum",sum1(number1,number2));
console.log("difference",difference(number1,number2));
console.log("product",product(number1,number2));
console.log("quotient",quotient(number1,number2));

// //sum of two numbers
// function sum(num1,num2){
//   return num1 * num2;
// }

// //difference of two numbers
// function difference(num1,num2){
//   return num1 - num2;
// }

//product of two numbers
function product(num1,num2){
  return num1 * num2;
}

//quotient of two numbers
function quotient(num1,num2){
  return num1 / num2;
}

