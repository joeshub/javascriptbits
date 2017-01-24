'use strict'

export default 'I am a default export'

export const named = 'I am a named export'

export function adder (a = 0, b = 0) {
  return a + b
}

export class Boo {}

export const options = {
  name: 'Joe'
}
