#!/usr/bin/node

const myArgs = process.argv.slice(2);
var num = myArgs[0];

function factorial(num){

	if(isNaN(num)){
		return (1);
	}		
		num *= factorial (num-1);
        return (num);
}	
console.log(factorial(num));


