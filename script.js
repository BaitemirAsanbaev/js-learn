// //variables
// let a = +prompt(" ");
// let b = +prompt(" ");
// //result variables
// let addition = a + b;
// let subtraction = a - b;
// let multiplication = a * b;
// let divition = a / b;
// //functions
// console.log(a + "+" + b + "=" + addition);
// console.log(a + "-" + b + "=" + subtraction);
// console.log(a + "x" + b + "=" + multiplication);
// console.log(a + "/" + b + "=" + divition);
// //data types
// let num = 17_000_000_000; //number
// let name = "Baitemir"; //string
// let bool = true; //boolean
// let undef = undefined; //undefind
// let not = null; //null

// let independenceDate = prompt("When is independence day (year)");

// if(isNaN(independenceDate)){
//     console.log("enter a date please")
// }
// else{
//     if(independenceDate > 1991){
//             console.log("too late");
//         }
//     else if(independenceDate < 1991){
//         console.log("too early")
//     }
//     else{
//         console.log("yes");
//     }
// }






//variables
let a = prompt("What is A?");
let b = prompt("what is B");
let ost = a % b;

//functions
if(ost == 0){
    console.log("there is no ostatok")
}
else{
    console.log("ostatok is " + ost);
}