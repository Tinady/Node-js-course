console.log('Hello world')

// console.log(global)

const os=require('os')
const {add}=require('./math')

console.log(add(67, 78))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())
