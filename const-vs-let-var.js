'use strict'

var items = []
items = [] // no error

let stuff = []
stuff = [] // no error

const list = [7,7,5]
list.unshift(13)  // no error
list[1] = 11  // no error
list.reverse()  // no error
list = [] // TypeError Assignment to constant variable.
console.log(list)

const thing = {}
thing.foo = 'bar' // no error
thing = {} // TypeError Assignment to constant variable.
console.log(thing)
// const creates a read only reference
// to a value and that variable can
// not be reassigned. It is still
// possible to change object keys
// and array items!
