//.....................Replace string content..............................


// 1] replace().............
let myNameis = "Abhishek";
let myReplacedNameis = myNameis.replace("Abhishek","Abhi")
console.log(myReplacedNameis);



let friends = "prasad,vishal,durvesh";
// let newfriends = friends.replace("vishal", "deep");    
// let newfriends = friends.replace("Vishal", "deep");         // case sensitive
 let newfriends = friends.replace(/VISHAL/i, "deep");          //       /  /i     i==> insensitive
console.log(newfriends);



const string = " hii guys Good Morning! Good Morning  ";
// const anotherstring = string.replace( "Morning ", "AfterNoon");
// const anotherstring = string.replace( /Morning/g, "AfterNoon");         //  /  /g  g==>global  
const anotherstring = string.replaceAll( "Morning", "AfterNoon");         //replaceAll
console.log(anotherstring);



// uppercase and lowercase............

let String = "abhishek";
let upper = String.toUpperCase();
console.log(upper);
// console.log(String.toUpperCase());


let String2 = "GUPTA";
let upper2 = String2.toLowerCase();
console.log(upper2);
// console.log(String.toLowerCase());




// concat().................

let str1 = "Struggle";
let str2 = "Hustle";
// const str3 = str1.concat(str2);
// const str3 = str1.concat("   ",str2);
const str3 = str1.concat(" and ",str2);
console.log(str3);



//trim()............................

let randomString = "    Abhishek     ";
console.log(randomString);                  // with space print 

let trimString = randomString.trim()        //space trimed
// let trimString = randomString.trimEnd()
console.log(trimString);
//trimStart() ==> for start
//trimEnd() ==> for end 


//.................Extracting string characters............

// charAt..........

let str5 = "Mayuri";
let str6 = str5.charAt(0)     //M
console.log(str6);



// charCodeAt()....... ==> 16-utf code return

let string1 = "Abhishek";
console.log(string1.charCodeAt(0));        //65




// property access.........

let strproperty = "Gupta";
console.log(strproperty[0]);                //accessing as a array

strproperty[0]="a";
console.log(strproperty);                   //but not chaning like a array //not possible

//split()............

let friend = "Prasad,Pranav,Durvesh,Deep";
let newfriend = friend.split(",")
console.log(newfriend);
console.log(newfriend[1]);   


