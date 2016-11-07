'use strict';

// declare a variable, using 'let'
let active = false
// later redeclare the same variable
// In ES6 you can not redeclare
// a variable in the same scope
let active = true // SyntaxError Identifier 'active' has already been declared

console.log(active)
