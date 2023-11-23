//Javascript Arrays 
//Arrays==> Collection of multiple values
//it,can be string,number,boolean,etc 

//........Creating an array ..........


// 1] primitive arrays literals
let Names = ["Abhishek", "Gupta", 19, true, false, {}, function() {}];
// console.log(Names[0]);
console.log(typeof Names);               //object 


// 2] object : Consructor
const constructor = new Array()
console.log(typeof constructor);         //object 


let obj = {
    name : "Abhishek",
    branch : "It"
}

console.log(Array.isArray(obj));    //False  // Array.isArray is to Strictly check the array or not 
console.log(Array.isArray(Names));  //true


// Major difference between primitive/literal and object 

const array = [30];
console.log(array);

let newArray = new Array(10);
console.log(newArray);                   // [ <10 empty items> ]

// It is not passing 10 value in it,it is creating 10 empty elements //undefined 



//........... Accessing and changing Array Elements.............


const access = ["Object", "Array", "Function"];  // Accessing the array element 
console.log(access[2]);


access[0] = "datatype";     // Changing array element 
console.log(access);


let brothers = ["Abhishek", "Vivek", "Sahil", "Daksh" ]
console.log(brothers[2]);        // Sahil 
console.log(brothers.length);   // 4
console.log(brothers[brothers.length-2]); // accesing the Second last elements
console.log(brothers[brothers.length-1]); // accesing the last elements


//...Converting an array to a String ==> toString()

let names = ["Banti", "Ansh", "Shantanu", "Vivek"];
let convertedString = names.toString()
console.log(convertedString);                
console.log(typeof convertedString);        //String


//..........Shallow copies vs deep copies................ 
// array always create a shallows copies


// let toppers = ["Prasad", "Sujata", "Sahil", "Mayuri"];
// let anotherArr = toppers;
// console.table([toppers,anotherArr])                   // Having Same value



let toppers = ["Prasad", "Sujata", "Sahil", "Mayuri"];
let anotherArr = toppers;  

anotherArr[1] = "Abhishek";
console.log(toppers);        

// Shallow copies ==> passes the reference
// Whenever changes in anotherArray it will change the value of original array 

// Deep copies is opposite of Shallow copies

















