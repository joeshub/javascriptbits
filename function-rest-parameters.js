'use strict'

// ES5 - arguments is not a real array, so it must be converted to one first
function ES5sum() {
  const args = Array.prototype.slice.call(arguments)
  console.log(args.reduce(
    function(prev, next) {
      return prev + next
    }
  ))
}
ES5sum(7, 21, 18, 12) // 58

// ES6 rest parameters - placing ... before any name creates a real array containing the 'rest' of that function's arguments
function ES6sum(...args) {
  console.log(args.reduce(
    function(prev, next) {
      return prev + next
    }
  ))
}
ES6sum(7, 21, 18, 12) // 58
