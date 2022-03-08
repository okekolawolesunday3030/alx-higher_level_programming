#!/usr/bin/node

const myVar = 'is';
const myArgs = process.argv.slice(2);


if(myArgs[0] === undefined){
     console.log(myVar + ' ' + 'undefined');
}else{

     console.log(myVar + ' ' +  myArgs[0]);
}
