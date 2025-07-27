const score=200
console.log(score)

const balance= new Number(300)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))
console.log(score.toFixed(2))

const anothernum=365.888845
console.log(anothernum.toPrecision(4))

const hundreds=1000000000
console.log(hundreds.toLocaleString())

//-----------------math------------//
console.log(Math)

console.log(Math.abs(-4))
console.log(Math.abs(4))

console.log(Math.round(5.2))
console.log(Math.round(5.6))
console.log(Math.round(-54.2))
console.log(Math.ceil(5.2))//rounds of the value to 6
console.log(Math.floor(5.2))//rounds of the value to 5
console.log(Math.min(4,3,5,6,9))
console.log(Math.max(4,3,5,6,9))

console.log(Math.random())

console.log(Math.floor(Math.random()*10)+1)

const min=50
const max=10

console.log(Math.floor(Math.random()*(max-min+1))+min)