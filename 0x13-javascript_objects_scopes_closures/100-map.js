#!/usr/bin/node

const list = require('./100-data.js');

const newMap = list.map((x, index) => x * index);

console.log(list);
console.log(newMap);
