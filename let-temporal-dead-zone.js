'use strict'

// use a var before it is declared
console.log(one) // returns undefined
var one = 1
console.log(one) // return 1

// now use a let before it is declared
console.log(two)
let two = 2
// in ES6 this causes a ReferenceError
// due to the new Temporal Dead Zone
