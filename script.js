//variables

//score
let score = 0;
//queestions
let question1 = prompt("2 + 2");
let answer1 = 4;
let question2 = prompt("the highest mountain");
let answer2 = "Everest";
let question3 = prompt("owner of Facebook company");
let answer3 = "Mark Zuckerberg";
let question4 = prompt("the capital of Kyrgyzstan");
let answer4 = "Bishkek";
let question5 = prompt("country with the biggest population");
let answer5 = "China";
let question6 = prompt("Marvel Studios main producer");
let answer6 = "Kevin Faige";
let question7 = prompt("How many teeth peaple has");
let answer7 = 32;
let question8 = prompt("OS created by Linus Torvalds");
let answer8 = "Linux";
let questin9 = prompt("PHP, Python, Ruby, Node.js are languages for ...");
let answer9 = "Backend";
let question10 = prompt("What happaned in 1916");
let answer10 = "Urkun";
let question11 = prompt("Who is the best person ever");
let answer11 = "Baitemir";

//functions

//questions functions
if(question1 == answer1){
    score += 5;
};
if(question2 == answer2){
    score += 5;
};
if(question3 == answer3){
    score += 5;
};
if(question4 == answer4){
    score += 5;
};
if(question5 == answer5){
    score += 10;
};
if(question6 == answer6){
    score += 10;
};
if(question7 == answer7){
    score += 10;
};
if(question8 == answer8){
    score += 10;
}
if(question4 == answer9){
    score += 10;
};
if(question5 == answer10){
    score += 10;
};
if(question11 == answer11){
    score +=20;
};
//score alert
alert("You have reached " + score + " points");