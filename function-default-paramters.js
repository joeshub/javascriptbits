'use strict'

// In ES5 you are responsible for dealing with initialization of arguments
function danceES5(style, speed) {
  style = style || 'Waltz'
  speed = speed || 1
  console.log(style, speed)
}

danceES5()

// ES6 lets you initialize default parameter values in your function signature
function danceES6(style = 'Waltz', speed = 1) {
  console.log(style, speed)
}

danceES6()
danceES6('Mambo', 10)
danceES6(undefined, '3')
danceES6('Ballroom')
danceES6('Swing', 5)
