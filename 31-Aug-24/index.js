// console.log(10 + 10)
// console.log(10 - 10)
// console.log(10 + '10')
// console.log('10' + 10)
// console.log(10 - '10')
// console.log('10' - 10)

// console.log('10a' - 10) // NaN
// console.log(10 - '10a') // NaN

// console.log(10 + true)
// console.log(true + 10)
// console.log(10 + false)
// console.log(false + 10)

// console.log('10' + true)
// console.log('10' - true)
// console.log('10' + false)
// console.log('10' - false)

// console.log(false - '10a') //NaN
// console.log(true - '10a') //NaN

// console.log(undefined - null) //NaN
// console.log(undefined - undefined) //NaN
// console.log(null - null)

// console.log('KJASHD' - 'JGUE') // NaN
// console.log(NaN - NaN) // NaN

// console.log(false / 0) // NaN
// console.log(true / 0) // Infinity
// console.log(0 / false) // NaN
// console.log(0 / true) // 0
// console.log(false / 's') // NaN

// Symbol ----->
// It is a Primitive datatype
// It is used to declare a new identity
// var a = Symbol('hello')
// var b = Symbol('hello')
// console.log(a == b) // false
// console.log(a === b) // false

// console.log(Number('10a')) // NaN
// console.log(BigInt('adfas')) // error

// var, let & const ---------->

// 1. Declaration ---->
var a
console.log(a) // undefined

let b
console.log(a) // undefined

// const c;
// console.log(a);  // error

// 2. Initialization ---->
var d
d = 10
console.log(d)

let e
e = 20
console.log(e)

// const f
// f = 30
// console.log(f);  // error

// 3. Declaration & Initialization ----->

var g = 100
console.log(g)

let h = 200
console.log(h)

const i = 7.142
console.log(i)

// 4. Re-Delaration ---->

var j
var j
console.log(j)

// let k
// let k
// console.log(k) // error

// const l
// const l
// console.log(l);  // error

// 5. Re-Initialization ------>

var m = 45
m = 18
console.log(m)

let n = 56
n = 78
console.log(n)

// const o = 45
// o = 89
// console.log(o)   // error

// 6. Re-Delaration & Re-Initialization -------->

var p = 67
var p = 78
console.log(p)

// let q = 78
// let q = 68
// console.log(q);  // error

// const r = 89
// const r = 97
// console.log(r);  // error
