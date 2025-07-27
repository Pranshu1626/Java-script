let myDate= new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)

let mycreateddate= new Date("05-16-2025")
console.log(mycreateddate.toLocaleString())

let timestamp= Date.now()
console.log(timestamp)

console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/100))

let anotherdate= new Date()
console.log(anotherdate)
console.log(anotherdate.getDay())
console.log(anotherdate.getMonth())
console.log(anotherdate.getTime())

anotherdate.toLocaleDateString('default',{
    weekday: "long"
})
console.log(anotherdate.toLocaleDateString())