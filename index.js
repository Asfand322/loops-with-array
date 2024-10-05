// for each loop

let num = [4,5,6,9]

num.forEach((Element)=> {
    console.log(Element * Element)
})

// result will be
// 16
// 25
// 36
// 81

// array.from

let a = "haris"
let c = Array.from(a)
console.log(c)

// result will be
// (5) ['h', 'a', 'r', 'i', 's']
// used to convert any type of data into array

// for of loop
// same method and easy method
for(let i of num){
    console.log(i)
}

// result will be
// 4
// 5
// 6
// 9

// for in loop
for(let i in num) {
    console.log(i)
}

// it shows the keys which is invisible
// result will be
// 0
// 1
// 2
// 3