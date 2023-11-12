"use strict"; // treat all Js code as newer version

//alert(2+2); //we are using nodejs,not browers console window so this line won't run

//.....code readibility ==>
console.log("Abhishek");
console.log("Abhishek")

//string ==>"" or ''
console.log("Abhi");
console.log('Abhi');


// console.log(9 +        // What! again not a good practice
//      9
//   );


//....primitive and non primitive.....

//primitive datatypes

//weekly typed
let num = 7;
console.log(num + "1");
console.log(typeof(num+"1"));        //string


//Number
let num1 = 9;
const num2 = 4.67;
console.log(typeof num1, typeof num2);        // number number  


//String
let str = "Abhishek";
const str2 = "Gupta";
console.log(typeof str, typeof str2);         //string string   




//Boolean==> haa ya na // true or false // 0 or 1
let bool = true;
const bool2 = false;
console.log(typeof bool,typeof bool2);        //boolean boolean




//Symbol==> uniqueness find
const symbol = Symbol("age");                 // S
console.log(typeof symbol);                   //symbol




//Bigint
let bigint = 837657567429674956845628n;       // n in last
console.log(typeof bigint);                   //bigint




//Undefined==> declare but not assign values
let Undefined; 
console.log(typeof Undefined);                //undefined




//Null==> Khali yafir Empty ==> assign value but empty 
const number = null;
console.log(typeof number);                   //object   ******remember





















