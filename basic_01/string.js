const name="Pranshu"
const age=17
console.log("My name is "+name+" and my age is "+age)

const newName="Patel-Pranshu"
console.log(newName[0])
console.log(newName.__proto__)
console.log(newName.length)
console.log(newName.toLowerCase())
console.log(newName.charAt(4))
console.log(newName.indexOf('t'))

const newstring= newName.substring(0,3)
console.log(newstring)

const anotherstring=newName.slice(1,4)
console.log(anotherstring)

const newone= "      Pranshu      "
console.log(newone.trim())

const email="patel5458@gmail.com"
console.log(email)
console.log(email.replace("patel","pranshu"))
console.log(email.includes("sundar"))
console.log(email.split("-"))