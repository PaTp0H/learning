// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 50
// const base = prompt('Enter base:')
// const height = prompt('Enter height:')

// alert(`The area of the triangle is ${0.5 * base * height}`)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// const a = parseInt(prompt('Enter side a:'))
// const b = parseInt(prompt('Enter side b:'))
// const c = parseInt(prompt('Enter side c:'))

// alert(`The perimeter of the triangle is ${a + b + c}`)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const heightP = parseInt(prompt('Enter height:'))
// const widthP = parseInt(prompt('Enter width:'))

// alert(`The area of the rectangle is ${heightP * widthP}`)
// alert(`The perimeter of the rectangle is ${2 * (heightP * widthP)}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// const birthYear = parseInt(prompt('Enter birth year'))
// const date = new Date();

// const age = date.getFullYear() - birthYear;

// if(age >= 18) {
//     alert(`You are ${age}. You are old enough to drive`)
// }
// else {
//   alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)  
// }


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of yours you live: 100
// You lived 3153600000 seconds.

// const age = parseInt(prompt('Enter number of yours you live'))

// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// let sec = (day * 24 * 60 * 60) + (month * 30 * 24 * 60 * 60) + (year * 12 * 30 * 24 * 60 * 60)

// sec = sec + (date.getHours() * 60) + date.getSeconds()

// alert(`You lived ${sec} seconds`)

// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let d = new Date;

let mformat = [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
].join('-') + ' ' + [d.getHours(),
    d.getMinutes(),
    d.getSeconds()
].join(':');

let dformat = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()
].join('-') + ' ' + [d.getHours(),
    d.getMinutes(),
    d.getSeconds()
].join(':');

let nformat = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()
].join('/') + ' ' + [d.getHours(),
    d.getMinutes(),
    d.getSeconds()
].join(':');

console.log(mformat, dformat, nformat)

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


function getFormattedDate(date) {
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day  = ("0" + (date.getDate())).slice(-2);
    let year = date.getFullYear();
    let hour =  ("0" + (date.getHours())).slice(-2);
    let min =  ("0" + (date.getMinutes())).slice(-2);
    let sec = ("0" + (date.getSeconds())).slice(-2);
    return year + "-" + month + "-" + day + " " + hour + ":" +  min + ":" + sec;
}

console.log(getFormattedDate(new Date()))