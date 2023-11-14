//.....String......


// 1] String literals : primitive

let str = "Abhishek";
let str1 = "Gupta";
console.log([typeof str,typeof str1]);     //string***

// const str3 = str +"   "+ str1;
// console.log(str3);
// console.log(`My name is ${str} and  surName is ${str1}`);


// 2] String object : string constructor()
const str4 = new String("hello world");
console.log(typeof str4);                 //object***
  
// { } curly braces
// ( ) parenthesis
// [ ] squared brackets


//......object.......basic syntax

// let obj = {
//     name : "Abhishek",
//     surName : "Gupta",
//     rollNo : 19
// }


// "=="  or "==="

//.......primitive string type //string literals

// let str5 = "abhishek";
// let str6 = "abhishek";
// console.log(typeof str5);
// console.log(str5==str6);        //true     //you get 'copy'of that

// let str5 = "45";
// let str6 = 45;
// console.log(str5===str6);      //false    //data type and value should be same** in "==="


// ...string objects : constructor

// let str6 = new String("Abhishek");
// let str7 = new String("Abhishek");
// console.log(str6==str7);          //false    //you get ' reference' of that


//methods vs function
//methods==> dependent objects || standalone not
//function==> independent object || standalone


//............String Methods............

// 1] Length property
// let fruits = "Apple,Orange,pineapple"; 
// console.log(fruits.length);               //22

// 2] 3 methods for extracting string part
// 1] slice()         ==> -ve indexing is allowed
// 2] substring()     ==> -ve indexing consider as zero
// 3] substr()        ==>  (start,length)


// 1]slice().......            

let fruits = "Apple,Orange,Kiwi"; 
// let slicefruits = fruits.slice(0,5);    (start,end)    //Apple     //, and space also count
// let slicefruits = fruits.slice(10);       //which index you will give not print upto,there after print
console.log(slicefruits);


let text ="Apple, Orange, Banana";
// let text1 =text.slice(-14,-8);
let text1 =text.slice(-14);
console.log(text1);


let name = "Abhishek";
let sliced =name.slice(-8);
console.log(sliced);


// 2]substring().....
// slice and substring are similar

let sub = "apple,orange,Grapes";
// let substring = sub.substring(-3,-5)   // ==> let substring = sub.substring(0,0)
let substring = sub.substring(-786550496);
console.log(substring); 


// 3]substr().....
let surName ="Gupta";
let surN =surName.substr(-5,5);
console.log(surN);














