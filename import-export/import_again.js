'use strict'

import theDefaultExport, { named } from './exports'

import { named as renamed } from './exports'

import * as allExports from './exports'

export allExports

console.log(theDefaultExport)
console.log(named)
console.log(renamed)

console.log(allExports)
console.log(allExports.default)
console.log(allExports.named)
console.log(allExports.adder(2, 3))
