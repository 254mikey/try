//console.log("hello")
//console.log("i like pizza")

//window.alert("this is an alert")
//window.alert("i like pizza")

/*document.getelementById("h1").textcontent *"hello";
document.getelementById('p').textcontent*"I like pizza"*/ 


 //variable *A container that stores a value.
 //     bshaves as if it were the value it contains.

 //1.declaration let x;
 //2. assignment   x=100;

/*let age;
age=25
let price;
price=100
console.log(`you are ${age} years old`);
console.log(`the price is ksh$${price}`);
console.log()*/

//string
/*let firstName="Mike"
let email="254stevemike@gmail.com"
console.log(typeof firstName);
console.log(`your name is ${firstName}`)
console.log(`check ${email}`)*/

//boolean
/*let online=true;
let forSale= false;
console.log(`this land is for sale :${forSale}`);
console.log( `X is online :${online}`);*/

//using html
/* let fullName="Steve Mike";
let age=19;
 let email="254stevemike@gmail.com";
 let isStudent = true;
;
 document.getElementById("p1").textContent =`my name is: ${fullName}`;
 document.getElementById("p2").textContent =`I am ${age} years old`;
 document.getElementById("p3").textContent = `contact at : ${email}`;
document. getElementById("p4").textContent =`Am I a student? ${isStudent}`;*/

//arithmeticOperators=operands(values, variables, etc)
//                   operators( + - * / )

/*let students= 30;

//students = students +1;(plus)
//students = students -1;(minus)
//students = students *1(multiply)
//students = students /1(divide)
//students = students **1(power of)
//let extraSstudents = students %1(modulus/rem)

console.log(students);*/

//augmentedAssistedOPerators
/*let students = 30;

students+=1;
students-=1;
students*=1;
students/=1;
students**=1;
students%=1;


console.log(students);*/
/*let students=30;
result= 6 / 2 **(2+5);
console.log(result);*/

//howToAcceptUserInput
//1:windowPrompt
/*let userName;

userName = window.prompt("what`s your USERNAME?");
console.log(userName);
document.getElementById("p1").textContent =` welcome @ ${userName}`;*/

//2:HTMLTextBox
/*document.getElementById("enterbtn").onclick = function(){
  username=document.getElementById ("text").value;
  console.log(username);
document.getElementById("h1").textContent=`Hello ${username}`
}*/

//type conversation =change the data type of a value to another
//                   (strings, number, booleans)

/*let age = window.prompt("how old are you?");
age = Number(age);
age+=1;

console.log(age, typeof age);*/

/*let x ="10";
let y ="pizza";
let z ="pizza";

x = Number(x);
y = String(y);
z = Boolean(z)

console.log(x,typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

// const = a variable that can`t be charged

/*let pi;
pi= 22/7;
let radius;
let circumfrence;

//radius = window.prompt("Enter the radius of a circle");
//radius= Number(radius);

//circumfrence = 2 * pi * radius;

//console.log(circumfrence);

document.getElementById("button").onclick =function(){
  radius = document.getElementById("input").value;
  radius =Number(radius);
  circumfrence = 2 * pi * radius;
  circumfrence =String(circumfrence);
  document.getElementById("h3").textContent =`your circumfrence is ${circumfrence}`;
  console.log(circumfrence);
}*/

//counterProgram
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count --;
  countLabel.textContent = count;
}
resetBtn.onclick = function(){
  count=0;
  countLabel.textContent = count;
}*/

//math=built-in object thet provides
//       a collecton of properties and methods

/*console.log(Math.PI);
console.log(Math.E);*/
/*let x = 2.46;
let y = 2;
let z;

//z= Math.round(x);
//z= Math.floor(x);
//z= Math.trunc(x);
//z= Math.pow(x, y);
//z= Math.sqrt(x);
//z= Math.log(x);
//z= Math.sin(x);
//z= Math.cos(x);
//z= Math.tan(x);
//z= Math.abs(x);
//z= Math.sign(x);
//let max = Math.max(x, y ,z);
//let min = Math.min(x, y ,z);

console.log(z);*/

//randomNumberGenerator
/*
let randomNum = Math.floor (Math.random () *100) +50;

console.log(randomNum);*/
/*
const min =50;
const max =100;


let randomNum = Math.floor (Math.random () *max)+min;

console.log(randomNum);*/
/*
const button= document.getElementById("button");
const label1= document.getElementById("label1");
const label2= document.getElementById("label2");
const label3= document.getElementById("label3");
const min =1;
const max =6;
let randomNum1;
let randomNum2;
let randomNum3;
button.onclick =function(){
  randomNum1 = Math.floor (Math.random () *max)+min;
  randomNum2 = Math.floor (Math.random () *max)+min;
  randomNum3 = Math.floor (Math.random () *max)+min;
  label1.textContent=randomNum1;
  label2.textContent=randomNum2;
  label3.textContent=randomNum3;
}*/
  
//IF STATEMENTS =if a condition is true, execute some code
//               =if not ,do something else
/*
const text =document.getElementById("text");
const button =document.getElementById("button");
const result =document.getElementById("results");
let age;

button.onclick = function(){
age = text.value;
age= Number(age);

if (age >=80){
  
  result.textContent =`you cannot enter`;
}
else if(age <=0){

  result.textContent =`you cannot be under 0`;
}
else if(age >=18){

  result.textContent =`you can enter`;
}

else{

  result.textContent =`you cannot enter`;
}
}
*/

// Checked =property that determines the checked state
//            of HTML checkbox  or radio button element
/*
const checkbox= document.getElementById("checkbox");
const visa= document.getElementById("visa");
const mastercard= document.getElementById("mastercard");
const paypal= document.getElementById("paypal");
const button =document.getElementById("submit");
const result= document.getElementById("result");
const payment= document.getElementById("payment");

button.onclick =function (){
  if(checkbox.checked){
    result.textContent= ` subscribed!`;
  }
else{
  result.textContent=`not subscribed!`;
}

if(visa.checked){
  payment.textContent =`paying via visa`;
}
else if(mastercard.checked){
  payment.textContent =`paying via mastercard`;
}
  else if(paypal.checked){
    payment.textContent =`paying via paypal`;
}
else{
  payment.textContent=`please choose payment method`;
}
}
*/
// ternary operator = ashortcut to if { }and else{ statements}
//                     helps to assign a variable based on a condition
//                     condition ? codeIfTrue :codeIfFalse;

//temporaryOperator=a shortcut to if{}and else{} statements 
//  helps to assign a variable based on a condition 
//  condition  ? codeIfTrue :codeIfFalse;

/*let age=15;
let message = age>=18?"you are an adult":"you are a minor";
console.log(message);*/
/*
let purchaseAmount =125;
let discount = purchaseAmount >=100 ? 10 : 0;
console.log(`your total is ksh${purchaseAmount - purchaseAmount *(discount/100)}`)
*/
//SWITCH =can be efficienmt to many else if statemenmts
/*
let day =5;

switch (day){
  case 1:
    console.log("it is Monday");
    break;
    case 2:
      console.log("it is Tuesday");
      break;
      case 3:
        console.log("it is Wednesday");
        break;
        case 4:
          console.log("it is Thursday");
          break;
          case 5:
            console.log("it is Friday");
            break;
            case 6:
              console.log("it is Saturday");
              break;
                case 7:
              console.log("it is Sunday");
              break;
              default:
                console.log(`${day} is not a day`);
}*/
/*
let textScore = 190;
let letterGrade;

switch(true){
  case textScore>=100:
    letterGrade="enter valid marks"
    break;
  case textScore>=80:
    letterGrade="A";
    break;
    case textScore>=70:
      letterGrade="B";
      break;
      case textScore>=60:
        letterGrade="C";
        break;
        case textScore>=50:
          letterGrade="D";
          break;
          case textScore>=0:
            letterGrade="E";
            break;
            default:
            letterGrade="enter valid marks";

}
console.log(letterGrade);
*/

//stringMethods = allows you to manipulate and work with text (strings)

//let userName = " mikey";
 //userName.charAt(0)
 //userName.indexOf("k")
 //userName.length
 /*userName = userName.trim().toUpperCase().toLowerCase().repeat(3);
 console.log(userName);*/
//let result = userName /*.startsWith *//*.endsWith*//*.includes*/(" ");
/*
if (result){
  console.log("your user name cannot include ` `");
}

else {
  console.log(userName);
}
*/

//let phoneNumber = "123-456-789";
//phoneNumber = phoneNumber/*.replaceAll("-","/")*//*.padStart(15, "5");*//*.padEnd(15, "5")*/
//console.log(phoneNumber);



