
// 1.
let firstName = "Alex"
let lastName = "Levkovich"
let fullName = `${firstName} ${lastName}`
console.log(fullName)


// 2.
let width  = 20;
let length = 10;
console.log(width * length)

// 3.
Math.pow(10, 6)

// 4.
console.log(Math.floor(Math.random()*50))

// 5.
let number = -5;

if (number  < 0) {
    console.log('negative value')
}else {
    console.log('positive value')
}


// 6.
let text="text"
if (text.length > 1) {
    console.log (text [2])
}



// 7.
let month = 13;
switch (month) {
    case 1:
        console.log ("January"); break
    case 2:
        console.log("February"); break
    case 3:
        console.log("March"); break
    case 4:
        console.log("April"); break
    case 5:
        console.log("May"); break
    case 6:
        console.log("June"); break
    case 7:
        console.log("July"); break
    case 8:
        console.log("August"); break
    case 9:
        console.log("September"); break
    case 10:
        console.log("October"); break
    case 11:
        console.log("November"); break
    case 12:
        console.log("December"); break
    default:
        console.log("The month does not exist.")
}


    



// 8.
let password = "fks&ds";
if(password.length > 5 && password.indexOf('&')!== -1){
    console.log("this password is strong")
}   
else {
    console.log("this password is weak")
}

// 9.
let a = 5;
let b = 5;
if(typeof a === "number" && typeof b === "number") {
    console.log(a + b)
}
else{
    console.log( "Sum of those items can't becounted")
}

// 10.
let textOne = "text";
let textTwo = "pass";
if(typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length){
    console.log("those items are strings and they're equal")
}
else {
    console.log("items are not compareble")
}




