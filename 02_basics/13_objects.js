/*
In JavaScript, almost "everything" is an object.

JavaScript object is a collection of named values

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.


There are different ways to create new objects:

Create a single object, using an object literal.    // most common method 
Create a single object, with the keyword new.     
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().


JavaScript Objects are Mutable ==> variable value can be change  
Objects are mutable: They are addressed by reference, not by value.

Singleton object made with constructor
whereas whenever we make object with literals, it wont create a singleton object
*/


// let arr = ["Abhishek",50,IT,19];        // you don't know where is name ,dept,age,etc instead of these we using object
// let myDetails = {Name : "Abhishek",surName : "Gupta", phoneNo : 985377535,age : 19}   // Not readable


//..... 1] Object literals              //mostly use 

let myDetails = {
    name : "Abhishek",                  // Name value pair or Key value pair 
    surName : "Gupta",
    phoneNo : 985377535,
    age : 19
}


//Accessing the value  ==> dot method or square bracket 
console.log(myDetails.name);
console.log(myDetails.phoneNo);
console.log(myDetails["age"]);

//adding more value
myDetails.dept ="IT";

console.log(myDetails);

// ....2] new object : constructor:

// const newObj = new Object()
// const nature = new Object({
//    sky : blue,
//    tree : green,
//    water : colourLess
// });


// Adding direct value  without passing in paranthesis
const newObj1 = new Object();

newObj1.name = "Abhishek"
newObj1.surName ="Gupta"
newObj1.departement = "IT"

console.log(newObj1);

//-----------------------------------------------------------------------------------------------------//

let home = {
    hall : "TV",               // "hall" : "TV"
    kitchen : "fridge",        // "kitchen" : "fridge"
   "bedroom" : ["Bed", "AC", "Bookshell"],
    details : function () {
        console.log(`In hall we have  ${this.hall} and In the kitchen we have ${this.kitchen} 
        or the bedroom consist of ${this.bedroom}`)
    }
}

//........ Accesssing the value........

// console.log(home);
// console.log(home.kitchen);
// console.log(home.details())

// console.log(home["hall"]);          //Another way to accessing the value
// console.log(home["details"]);



// ......Adding and Changing the value......

home.name="Abhishek";
console.log(home);

home.hall="Sofa";
console.log(home);


// ......deleting the values..... 

delete home.details
console.log(home);

//----------------------------------------------------------------------------------------//

let sym1 = Symbol("s1")


let home = {
    hall : "TV",               // "hall" : "TV"
    kitchen : "fridge",        // "kitchen" : "fridge"
   "bedroom" : ["Bed", "AC", "Bookshell"],
    details : function () {
        console.log(`In hall we have  ${this.hall} and In the kitchen we have ${this.kitchen} 
        or the bedroom consist of ${this.bedroom}`)
    },
    [sym1]: "s2"      // if you want to define any symbol in object you have to use always [] bracket
}

// console.log(typeof (home.sym1));
// console.log(home);

// freeze  ==> freeze the changes in the object

// Object.freeze(home);

// home.hall="PC";   //will not change
// console.log(home);

// Adding function in object
home.price =function(){
    return ("This home price is 20L");  // return keyword
}

console.log(home.price);
console.log(home.price());


// JavaScript Objects are Mutable ==> variable value can be change  
// Objects are mutable: They are addressed by reference, not by value.


let object1 = {
    childrenWatch : "Cartoon",
    elderWatch : "News"
}


let object2 = object1;

object2.elderWatch="Movies"

// console.log(object1);
// console.log(object2);



