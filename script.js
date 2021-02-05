// function print(text){
//     document.write(text + "<br>")
// }









// //variables

// //score
// let score = 0;
// //queestions
// let question1 = prompt("2 + 2");
// let answer1 = 4;
// let question2 = prompt("the highest mountain");
// let answer2 = "Everest";
// let question3 = prompt("owner of Facebook company");
// let answer3 = "Mark Zuckerberg";
// let question4 = prompt("the capital of Kyrgyzstan");
// let answer4 = "Bishkek";
// let question5 = prompt("country with the biggest population");
// let answer5 = "China";
// let question6 = prompt("Marvel Studios main producer");
// let answer6 = "Kevin Faige";
// let question7 = prompt("How many teeth peaple has");
// let answer7 = 32;
// let question8 = prompt("OS created by Linus Torvalds");
// let answer8 = "Linux";
// let questin9 = prompt("PHP, Python, Ruby, Node.js are languages for ...");
// let answer9 = "Backend";
// let question10 = prompt("What happaned in 1916");
// let answer10 = "Urkun";
// let question11 = prompt("Who is the best person ever");
// let answer11 = "Baitemir";

// //functions

// //questions functions
// if(question1 == answer1){
//     score += 5;
//     console.log("1")
// };
// if(question2 == answer2){
//     score += 5;
//     console.log("2")
// };
// if(question3 == answer3){
//     score += 5;
//     console.log("3")
// };
// if(question4 == answer4){
//     score += 5;
//     console.log("4")
// };
// if(question5 == answer5){
//     score += 10;
//     console.log("5")
// };
// if(question6 == answer6){
//     score += 10;
//     console.log("6")
// };
// if(question7 == answer7){
//     score += 10;
//     console.log("7")
// };
// if(question8 == answer8){
//     score += 10;
//     console.log("8")
// }
// if(question9 == answer9){
//     score += 10;
//     console.log("9")
// };
// if(question10 == answer10){
//     score += 10;
//     console.log("10")
// };
// if(question11 == answer11){
//     score +=20;
//     console.log("11")
// };
// //score alert
// alert("You have reached " + score + " points");















//
// alert("In what temoerature ice will melt?");

// let answer1 = prompt("unit");
// let answer2 = prompt("temperature");

// if(answer1 == "K" && answer2 == 273 || answer1 == "C" && answer2 == 0 || answer1 == "F" && answer2 == 32){
//     console.log("correct");
// }
// else{
//     console.log("incorrect");
// }








// alert("Speed of sound?");

// let answer1 = prompt("unit");
// let answer2 = prompt("speed");

// if(answer1 == "metres per second" && answer2 == 343 || answer1 == "miles per hour" && answer2 == 1234 || answer1 == "kilometres per hour" && answer2 == 767){
//     console.log("correct");
// }
// else{
//     console.log("incorrect");
// }


















// let newYear = prompt("новый год на каком языке");
// switch(newYear){
//     case "English":
//     case "Английский":
//     case "Англисче":
//         console.log("New Year");
//         break;

//     case "Kyrgyz":
//     case "Кыргызский":
//     case "Кыргызча":
//         console.log("Жаны жыл");
//         break;

//     case "Russian":
//     case "Русский":
//     case "Орусча":
//         console.log("Новый год");
//         break;
    
//     default:
//         console.log("не знаю о чем ты");
// };
























//25.01.21



//циклы

// let i = 1;
// while( i <= 20 ){
//     if(i % 2 == 1){
//         document.write(i + "<br>");
//     }
//     i++;
// }


// let i2 = 5;
// do{
//     document.write(i2 + "<br>");
//     i2--;
// } while (i2 >=1);


// for (let i3 = 5; i3 >= 1; i3--){
//     document.write(i3 + "<br>");
// }
// document.write("<table> <tr><td>hello</td><td>hello</td><td>hello</td></tr><table> <tr><td>hello</td><td>hello</td><td>hello</td></tr>  </table>")

















//27.01.21



// функции


//declaretions
// function printLine(text){
//     document.write(text + "<br>")
// }

// function sayBye(firstName, lastName){
//     let fullName = firstName + " " + lastName;
//     printLine("arrividerchi " + fullName);
// }

// function returnMax(digit1, digit2){
//     if(digit1 > digit2){
//         printLine(digit1);
//     }
//     else if(digit1 < digit2){
//         printLine(digit2);
//     }
//     else{
//         printLine(digit1);
//     }
// };

// function printSum(a, b){
//     printLine(a + b);
// }
// function getSum(a, b){
//     return(a + b);
// }


// function printCount(num){
//     for(i = 1; i <= num; i++ ) {
//         printLine(i);
//     }
// }



// sayBye("Baitemir", "Asanbaev");
// returnMax(14, 115);
// printSum(10, 15);
// printSum(-5, -5);
// printSum(-10, -10);
// printCount(11);





















//29.01.2021



//объекты

// let object1 = new Object();
// let object2 = {};



// let user = {
//     firstName: "Baitemir",
//     lastName: "Asanbaev",
//     "will lives in US": true,
// };

// for (key in user){
//     print(key + ": " + user[key])
// }
// let person = {
//     mood = "good",
// }
// let finger = {
//     length: 8,
//     width: 1.2,
//     "has nail": true,
//     skin: true,
//     blood: false,
//     type: "middle",
//     wrinkles: false,
//     owner: person,
//     cut: function(skin, blood){
//         delete this.skin;
//         blood = true;
//     },
//     disrespect: function(){
//         if( this.type = middle){
//             this.disrespect;
//         }
//         mood = "bad";
//     },
// }



















//02.01.21



// let user1 = {
//     firstName: "Elon",
//     lastName: "Musk",
//     sayHello(){
//         print("good morning " + this.firstName + " " + this.lastName);
//     }
// }
// let user2 = {
//     firstName: "Bill",
//     lastName: "Gates",
//     sayHello(){
//         print("good morning " + this.firstName + " " + this.lastName);
//     }
// }
// let user3 = {
//     firstName: "Murk",
//     lastName: "Zuckerberg",
//     sayHello(){
//         print("good morning " + this.firstName + " " + this.lastName);
//     }
// }
// let user4 = {
//     firstName: "Baitemir",
//     lastName: "Asanbaev",
//     sayHello(){
//         print("good morning " + this.firstName + " " + this.lastName);
//     }
// }
// let user5 = {
//     firstName: "Asanbai",
//     lastName: "Baitemirov",
//     sayHello(){
//         print("good morning " + this.firstName + " " + this.lastName);
//     }
// }


// print("Users list:" + "<br>")
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();
// user5.sayHello();



// function User(firstName, lastName, prefix = " "){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.prefix = prefix;
//     this.sayHello = function(){
//         print("hello " + prefix + this.firstName);
//     }
// }
// let user = new User("Elon", "Musk", "mr. ");
// let user1 = new User("Jeff", "Besos",);
// let user2 = new User("Murk", "Zuckererg",);
// let user3 = new User("Bruce", "Lee", "dr. ");
// let user4 = new User("Baitemir", "Asanbaev", "sr. ");

// user.sayHello();
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();




// function Apple(name, weight){
//     this.name = name;
//     this.weight = weight;
//     this.toString = function(){
//         return "Aplle type " + this.name;
//     }
//     this.valueOf = function(){
//         return "Apple weight " + this.weight;
//     }
// }
// let apple1 = new Apple("Aport", 150);

// print(apple1 + +apple1);


// let ex1 = "Hello world";
// print(ex1.includes("o worr"));


// function ex(a, b){
//     // for(i = 1; i < b; i++){
//     //     a *= a;
//     // }
//     return a
// }
// document.write(ex(5, 3));


















// 03.02.21


//browser js




// let hea = document.querySelector("h1");
// let art = document.querySelector("article");
// let par = document.querySelectorAll("p");
// let list = document.querySelector("ul");

// let exampleList = ["aplle", "banana", "grapes", "lemon"];
// for (const fruit of exampleList) {
//     let listLi = document.createElement("li");
//     listLi.innerText = fruit;
//     list.append(listLi);
// }
// list.prepend(listLi);

// let exampleList = [
//     {name: "Apple", weight: 20},
//     {name: "Banana", weight: 30},
//     {name: "Grapes", weight: 50},
//     {name: "Lemon", weight: 10},
// ];


// for (const fruit of exampleList) {
//     let lili = document.createElement("li");
//     lili.innerText = fruit.name + " - " + fruit.weight;
//     list.append("li")
// }



// let exampleList = {
//     "apple": 10,
//     "Bananas": 20,
//     "Grapes": 30,
//     "Lemon": 40,
// }

// for (exampleList[key] of exampleList) {
//     let listLi = document.createElement("li");
//     listLi.innerText = exampleList[key] + " - " + exampleList.key;
//     list.append("listLi")
// }










// 05.02.2021




// let header = document.createElement("h1");
// let list = document.createElement("ul");
// header.innerText("JS");
// document.body.append(header);

// for (let i = 1; i<=5; i++){
//     let listItem = document.createElement("li");
//     let btn = document.createElement("button");
//     btn.innerText("Example");
//     btn.id = "example" + i;

//     listItem.append(btn);
//     list.append(listItem);
// }
// document.body.append(list);
// print("fefewfwf");