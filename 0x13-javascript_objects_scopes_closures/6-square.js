#!/usr/bin/node

const Rectangle = require('./5-square.js');

module.exports = class Square extends Rectangle {
  charPrint (C) {
    if (C === undefined) { this.print(); } else {
      for (let i = 0; i < this.width; i++) {
        console.log(C.repeat(this.height));
      }
    }
  }
};
