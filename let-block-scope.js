'use strict';

const active = true

if (active) {
  let total = 100
  console.log(total)
}

console.log(total) // total is not defined
// In ES6 let is block scoped,
// so total is not defined
// outside of the if block
