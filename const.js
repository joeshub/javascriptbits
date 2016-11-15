'use strict';

let foo = 'foo'
foo = 'FOO'
console.log(foo)

const bar = 'bar'
// bar = 'BAR'

const USER = {
  name: 'joe'
}

USER.name = 'bob'
console.log(USER.name)
delete USER.name
console.log(USER.name)
// USER = {}

const numbers = [1,2,3]
numbers.push(4)
numbers = []
