// In JavaScript, objects are king. If you understand objects, you understand JavaScript.



// 1] Accessing javascript object properties 

// let myDreamHouse = {
//     location : "village(Rampur)",
//     design : "Farmhouse",
//     Budget : "20 Lakh",
//     isInTheConstructionProcess : false,
//     specialitiesOfTheHouse : function (){
//         console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
//         This house will be located at ${this.location} and its design wiil be ${this.design}`)
//     }

// }

// console.log(myDreamHouse.location);
// console.log(myDreamHouse["location"]);




// 2]  Javascript object for...in loop


// let myDreamHouse = {
//     location : "village(Rampur)",
//     design : "Farmhouse",
//     Budget : "20 Lakh",
//   "is In The Construction Process" : false,
//     specialitiesOfTheHouse : function (){
//         console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
//         This house will be located at ${this.location} and its design wiil be ${this.design}`)
//     }

// }


// for(let x in myDreamHouse){
//     console.log(myDreamHouse[x]);
// }

// for(let a in myDreamHouse){
//     console.log(myDreamHouse);
// }


// 3]  Adding new properties
 


// let myDreamHouse = {
//     location : "village(Rampur)",
//     design : "Farmhouse",
//     Budget : "20 Lakh",
//    " is In The Construction Process" : false,
//     specialitiesOfTheHouse  : function (){
//         console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
//         This house will be located at ${this.location} and its design wiil be ${this.design}`)
//     }

// }


// myDreamHouse.interior ="Fusion Interior";
// console.log(myDreamHouse);

// myDreamHouse["numberOfRooms"] ="15-20";
// console.log(myDreamHouse);


// 4]  Deleting Properties


// let myDreamHouse = {
//     location : "village(Rampur)",
//     design : "Farmhouse",
//     Budget : "20 Lakh",
//    " is In The Construction Process" : false,
//     specialitiesOfTheHouse  : function (){
//         console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
//         This house will be located at ${this.location} and its design wiil be ${this.design}`)
//     }

// }

// delete myDreamHouse.location;
// console.log(myDreamHouse);

// delete myDreamHouse["design"];
// console.log(myDreamHouse);



// 5]  Nested  Objects  
// you can define n number object inside object


// let obj ={
//     name : "Abhishek",
//     surName : "Gupta",
//     department : "IT",
//     rollNo : "19",
//     cartoon : {
//        cart1 : "NinjaHattori",
//        cart2 : "hagimaru",
//        favCartoon :{
//         cart1 : "Doreamon",
//         cart2 : "Shichan",
//         mostFavCartoon : {
//             car1 : "Kiterstu",
//             car2 : "OggyandtheCockroaches",
//             cartoonChannelsNames : ["Hungama", " Disney", "CartoonNetwork"],
//             mostFavCartoonEver : {
//                 cart1 : "Phenis and Ferb"
//             }
//         }
//        }
//     }
// }


//  use normal way of accessing,just use dot inside dot operation as per nested object

// console.log(obj.name);  
// console.log(obj.cartoon);
// console.log(obj.cartoon.favCartoon);
// console.log(obj.cartoon.favCartoon.mostFavCartoon.car1);
// console.log(obj.cartoon.favCartoon.mostFavCartoon.cartoonChannelsNames[0]);

//  use square bracket after square bracket as per nested object

// console.log(obj["cartoon"]["favCartoon"]["mostFavCartoon"]["cartoonChannelsNames"][0]);
// console.log(obj["cartoon"]["favCartoon"]["mostFavCartoon"]["mostFavCartoonEver"]["cart1"]);




// 6] Object inside an array
// In backend you will find out this mostly

// let array =[
    
//    {
//     name : "Abhishek",                  // just like an normal array 
//     surName : "Gupta",
//     rollNo : "19",
//    },
//    {
//     name : "Pranav",
//     surName : "Gujarathi",
//     rollNo : "18",
//    },
//    {
//     name : "Prasad",
//     surName : "Khandagale",
//     rollNo : "31",
//    },
//    {
//     name : "deep",
//     surName : "Astamkar",
//     rollNo : "1",
//    }

// ];

// console.log(array[0]);
// console.log(array[1].surName);
// console.log(array[2]["name"])




// 7] Object.assign() ==> Combines the objects

let obj1 = {
    name1: "Abhishek",
    surName1: "Gupta",
    rollNo1: "19"
}

let obj2 = {
    name: "Pranav",
    surName: "Gujarathi",
    rollNo: "18"
}


// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);



// Another method 
// spred operator...........

let obj3 = { ...obj1, ...obj2};
console.log(obj3);


// 8] Object.keys() ==> return value is in the form of array


let myDreamHouse = {
    "location" : "village(Rampur)",
    "design" : "Farmhouse",
    "Budget" : "20 Lakh",
    isInTheConstructionProcess : false,
    specialitiesOfTheHouse : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}


// console.log(Object.keys(myDreamHouse));


//checking array or not
// let check = Object.keys(myDreamHouse);
// console.log(typeof check);            // object
// console.log(Array.isArray(check));   //true 




// 9] Object.values()  ==> same 


// console.log(Object.values(myDreamHouse));


// const arr = Object.values(myDreamHouse);
// console.log(Array.isArray(arr));   // true




// 10] Object.entries()  ==> same

// console.log(Object.entries(myDreamHouse));





// 11] obj.hasOwnProperty()  ==>same


// console.log(myDreamHouse.hasOwnProperty("Budget"));  //true
// console.log(myDreamHouse.hasOwnProperty("locatio"));  //false









