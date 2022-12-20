#!/usr/bin/node

const myArgs = process.argv.slice(2);
const num = myArgs[0];

function factorial (num) {
  if (isNaN(num) || (num <= 0)) {
    return (1);
  } else {
    num *= factorial(num - 1);
    return (num);
  }
}
console.log(factorial(num));
