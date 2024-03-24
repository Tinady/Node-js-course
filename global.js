console.log(global)

const int=setInterval(() => {
    console.log("in the timeout")
}, 3000);

setTimeout(() => {
    clearInterval(int)
}, 3000);

console.log(__dirname)
console.log(__filename)