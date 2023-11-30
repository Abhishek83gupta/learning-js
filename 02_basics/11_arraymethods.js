// for more arraymethods ==> go to browser console window,Declare an array 
// and you get more methods


/*
JavaScript Array Methods

Array length     
Array toString()    !!
Array join()        !!
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
 */



//........Array length.........

let languages = ["Hindi", "Marathi", "English"]
// console.log(languages.length)                    // 3 
console.log(languages[languages.length-1])          // Accessing the last element


languages[languages.length] = " other languages";   // Changing value of original array 
console.log(languages);

// 1]....... Array toString()...... ==> array convert into a string
// 2]....... Array jion().......... ==> Similar toString but it provides Separator in value, which you pass

// let games = ["inDoor", "outDoor"];
// console.log(games.toString())
// console.log(typeof (games.toString()))          //String

// let games1 = ["inDoor", "outDoor", "orMore"];
// console.log(games1.join(" $ ")); 
// console.log(typeof (games1.join(" $ ")))        //String


//......... Pop()........ ==> last Elements get remove 
//.........Push()........ ==> last Elements get add 

let mobiles = ["mi", "oppo", "vivo"];
mobiles.pop();
mobiles.pop();
console.log(mobiles);     


mobiles.push("iPhone");
console.log(mobiles)

// some depth

// let placeName = ["thane", "Dombivali", "panvel"]; 
// console.log(placeName.pop());         //panvel         // pop returns the element which had removed
// console.log(placeName);

// let placeName = ["thane", "Dombivali", "panvel"]; 
// const lastRemovedElement = placeName.pop();
// console.log(lastRemovedElement);                      // you can also store them in other variable

// let placeName = ["thane", "Dombivali", "panvel"]; 
// const lastRemovedElement = placeName.push("kharGhar");
// console.log(lastRemovedElement);           //3+1     //4            // In case of push it returns length of the array  
// console.log(placeName);                    // new element get add     

//.... push also create nested array

let array = ["1", "2", "3"];
const newArray = ["4", "5", "6"];

array.push(newArray);
console.log(array)                   // nestedArray 

// nested array element accessing 

let name =["abhishek", "sujal", "vivek" , ["Daksh", "deepak"]]
console.log(name[3][1]);


//........flat()....... ==> merge nested array element into a single array

let number = ["01", "02", "03",["04", "05", ["06", "07"]]];
let flatNumberis = number.flat(2)                    // Infinity //1 //2
console.log(flatNumberis);                           



//..........Shifting elements     1]shift()  2]unshift()...........

// similar to pop() and push() ,the only difference is shift() and unshift() works on first index
// whereas in case of pop() and push() works on last indexing

const newNumArray = [ 1, 2, 3, 4 , 5, 6, 7, 8, 9];
let newValueis =newNumArray.unshift();
console.log(newValueis);



//........delete()...........

let deleteTheElementis = ["A", "B", "C","D"];
delete deleteTheElementis[0];
console.log(deleteTheElementis)  

/*
JavaScript Array delete()

Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.

*/


//..........conncat() ==> Merging the arrays


// let concat1 = ["1", "2", "3"];
// const concat2 = ["Abhishek"];
// let concantElement = concat1.concat(concat2);
// console.log(concantElement);



// let concat1 = ["1", "2", "3"];
// let concantElement = concat1.concat("4", "5", "6");
// console.log(concantElement);



// let merge = ["1", "2", "3"];
// const merge1 = ["Abhishek"];
// let merge2 = ["Vivek"];
// let concantElement = merge.concat(merge1,merge2);
// console.log(concantElement)


// slice()   and   splice()


// slice() ==> Cut/Remove the elements
let books = ["sundaram", "Doms", "local" , "Apsara"];
// let splicebooksis = books.slice(1);     // (start,end) // if start is undefined consider as zero 
// let splicebooksis = books.slice(2);      // (start,end-1) //end is excliusive 
let splicebooksis = books.slice(2,3);       // if end is undefined it extend
console.log(splicebooksis);
// console.log(books);            // Not affect the original array


// splice() ==> to add elments 


// let mobile = ["Mi","Oppo", "Vivo", "Poco"];
// const phones = mobile.splice(0,2,"Abhishek");    // (start,range,value) *****
// console.log(phones);
// console.log(mobile)              // Affect the original array

// let mobile = ["Mi","Oppo", "Vivo", "Poco"];
//  mobile.splice(0,1,"unkown"); 
// console.log(mobile);



//..........flat............


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr)





