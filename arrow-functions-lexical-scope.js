'use strict'

// Note: 'this' is a blank object in Node and Window in the browser. We are using node in this example.
this.format = 'Message: %s'
console.log(this)

// In strict mode 'this' inside a function is undefined unless we use bind/call/apply to set it.
function Log (msg) {
  console.log(this.format, msg)
}

Log('Hello') // error, this is undefined
Log.call(this, 'Howdy') // Message: Howdy
Log.apply(this, ['Aloha']) // Message: Aloha
Log.bind({format:'OMG'})('Hi') // OMG Hi (Can change this on the fly)


// ES6 Arrow functions get 'this' from lexical scope e.g. surrounding code
const LogArrow = (msg) => {
  console.log(this.format, msg)
}
LogArrow('Hello Arrow') // Message: Hello Arrow (no binding needed)

// Note that even if you pass in 'this' arrow functions still use a lexical this
LogArrow.bind({format:'OMG'})('Hi') // Message: Hi (this will not be used when using arrow functions, will still get lexical this from line 4 above)
