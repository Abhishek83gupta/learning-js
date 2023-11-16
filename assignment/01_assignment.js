// Q.1] Write JavaScript code to compare a number and a string.
// For example, compare 5 (number) and "5" (string) and explain the result.
// Is there a difference between == and === when comparing these values?

let num = 34;
let num2 = "34";

console.log(num==num2);  //true , since "==" check value only
console.log(num===num2); //false , since "===" check value and datatype both

//------------------------------------------------------------------------------------------------------------------------------------------

//Q.2] Explain the difference between primitive data types (e.g., numbers, strings, booleans)
//and non-primitive data types (objects) in JavaScript in terms of where they are stored in memory.
//Provide an example of a primitive data type and a non-primitive data type, and describe how they behave in memory.

// primitive(stack) , get copy

let name = "Abhishek";
let nickName1 = name;
nickName1 = "Abhi";


console.log(name);                 // Abhishek 
console.log(nickName1);            // Abhi     // These value can't change in original variable 


// Non-primitive(Heap) , original value reference

let user = {
   email:"abhi123@",
   phoneNo : 678976547
  }
  
  let user2 = user;
  user.email ="Abhishek@gmail.com";
  console.log(user.email);
  console.log(user2.email);


// let array1 = ["doreamon","Shinchan","Tomandjerry"];
// let array2 = array1;
// array2 = ["assignment","practical","Viva"];

// console.log(array1[0]);
// console.log(array2[0]);      

//-----------------------------------------------------------------------------------------------------------------------------------------

//Q.3] Write a code to print the typeof return value for all primitive and non-primitive datatypes.
// Refer this for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


// datatypes

//Primitive
// 7:number, string, boolean, null, undefined, Symbol, bigint  


//Number
let number = 45;
const num3 = 1.23;
console.log(typeof number,typeof num3);         // number number 




//String
let nickName = "Abhi";
let surName = "Gupta";
console.log(typeof nickName,typeof surName);     //string string



//boolean ==> true or false // 0 or 1
let assign = true;
const assign1 = false;
console.log(typeof assign1,typeof assign1);    // boolean boolean



//null ==> empty or khali ,==> assign value but empty
let empty = null; 
console.log(typeof empty);                     // object



//undefined ==> variable declare but not assign value
let undefined;
console.log(typeof undefined);                // undefined
 


// symbol ==> Uniqueness find
let sym = Symbol("name");
console.log(typeof sym);                      // symbol



//bigint
let bignum = 764524865085n;                   
const bigint = 7598576597n;
console.table([typeof bignum,typeof bigint]); // bigint bigint


//Non-primitive
//array,object,function


//array ==> Collection of similar items

let array = ["Abhishek","Gupta",19,"IT",21,true,"Naruto"];
console.log(array[6]);                        
console.log(typeof array);                    //object

//object

let obj = {
   name : "Abhishek",
   rollNo : 19,
   branch : "Information_technology"
}

console.log(obj.branch);
console.log(typeof obj);                     //object

//function

let fun =function(){
   console.log("This is assignment");
}

fun()  // This is Assignment
console.log(typeof fun);                     //function
 

//-----------------------------------------------------------------------------------------------------------------------------------------

//Q.4] Explain prefix and postfix with an example

//Prefix 
//(++x) pre-increment  ==> first incre then return value
//(--x) pre-decrement  ==> first decre then return value

let a = 10;
++a;
console.log(a);  //11

let b = 23;
--b;
console.log(b);  //22



let c = 10;
let d = 20;

let add = (++c) * (--d);  //11 * 19 //209
console.log(add); 



//postfix
//(x++) pre-increment ==> return value then incre
//(x--) pre-decrement ==> return value then decre

let post = 9;
post++;
console.log(post);



let fix = 10;
fix--;
console.log(fix);




let e = 10;
let f = 2;
let modular = (e++) % (f--);  //10 % 2 //0
console.log(modular);      

//--------------------------------------------------------------------------------------------------------------------------------------

// Q.5] Explain the concept of weakly typed in JavaScript.

const num7 = 7;
console.log(num7 + "1");
console.log(typeof (num7+"1"));   //string




let weak = "Abhi";
let number2 = 56;
console.log((weak + 56));        //Abhi56
console.log(typeof (weak + 56)); //string




console.log("Abhishek" + 56 + 5); // string in starting

console.log(6 - 3 + "Gupta");  // string in last 

console.log(5 % 5 + "name");




