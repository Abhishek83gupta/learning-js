//................Primitive...................... 

// 7 types : Number, String, Boolean, null, undefines, Symbol, Bigint

//Number
let num = 67;
const num1 = 89.6;

console.log(typeof num);
console.log(typeof num1);

let numtoint = parseInt(num1);
console.log(numtoint);

//string
let str = "Abhishek";
let str1 = "Gupta";


// Boolean
let bool = true;
let bool2 = false;


//undefined
let a;
console.log(typeof a);
var b;
console.log(typeof b);

//Null
let c = null;
console.log(typeof c);  //Object


//Symbol

const syn = Symbol("newSymbol");
const syn1 = Symbol("newSymbol");       // Symbol returns new unique value ****
console.log(syn===syn1);           //false
 
//Bigint

let Bigint = 3676435605848n;
console.log(typeof  Bigint);

//..............Non-primitive (reference)..................

// Array, Objects, Functions


//Array
let nonprimitive = ["Doreamon","Shinchan","Kiteretsu",90,80,true,false];
console.log(nonprimitive[2]);

//objects
const object = {
    name : "Abhishek",
    rollNo : 19,
    age : 19 
}
console.log(object.name);  //Abhishek
console.log(object.rollNo); //19
 
//function
//function defination ==> function(){}

let myfunction = function(){
    console.log("hello World");
}

myfunction()     //Hello World