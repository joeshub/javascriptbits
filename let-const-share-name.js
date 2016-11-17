'use strict';

var name = 'Joe'
function name () {}
// a function can accidentally share
// the same name as a variable and
// no error is thrown until the
// variable is used
name() // name is not a function

let zipCode = 12345
function zipCode () {}
// in ES6 we get a SyntaxError saying
// zipCode has been declared already
// let and const can not share their
// name with another variable or
// function in the same scope
