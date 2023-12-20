//  JavaScript Date Objects
// JavaScript stores dates as number of milliseconds since January 01, 1970

/*
Creating Date Objects

Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:
    
    1] new Date()
    2] new Date(date string)
    3] new Date(year,month)
    4] new Date(year,month,day)
    5] new Date(year,month,day,hours)
    6] new Date(year,month,day,hours,minutes)
    7] new Date(year,month,day,hours,minutes,seconds)
    8] new Date(year,month,day,hours,minutes,seconds,ms)
    9] new Date(milliseconds)

*/

// 1] new Date()
let todayDates = new Date();
console.log(typeof todayDates);    // object 
// console.log(todayDates.tostring()) ;     



// 2] new Date(date string)
// let date1 = new Date("2023-1-19");
let date1 = new Date("02-19-2023"); 
console.log(date1.toLocaleString());


 
// 3] new Date(year,month)              //0==>january 1=>feb
const date2 = new Date(2023, 0);
console.log(date2.toDateString());


//8] new Date(year,month,day,hours,minutes,seconds,ms);
const date3 = new Date(2023, 0, 3, 12 ,5 , 12, 5 );
console.log(date3.toString()) 



// let newDate = Date.now();
// console.log(newDate);


//......................................Date Methods.......................................................
// We can use various methods to convert this date into more readable value.
// Date Methods
// When a date object is created, a number of methods allow you to operate on it.

//to...................


// let todaysDate = new Date();
// console.log(todaysDate);                      // 2023-12-19T11:28:45.703Z
// console.log(todaysDate.toString());           //Tue Dec 19 2023 17:00:14 GMT+0530 (India Standard Time)
// console.log(todaysDate.toLocaleString());     // 19/12/2023, 5:01:48 pm
// console.log(todaysDate.toLocaleDateString()); // 19/12/2023
// console.log(todaysDate.toLocaleTimeString()); //5:03:52 pm
// console.log(todaysDate.toDateString());       // Tue Dec 19 2023
// console.log(todaysDate.toTimeString());       //17:08:05 GMT+0530 (India Standard Time)
// console.log(todaysDate.toISOString());        //2023-12-19T11:38:55.959Z
// console.log(todaysDate.toJSON());             //2023-12-19T11:38:55.959Z
// console.log(todaysDate.toUTCString());        //Tue, 19 Dec 2023 11:38:05 GMT   // Coordinated Universal Time or UTC


/*

//get.................

Method          	Description

getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()        Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)

*/


// let date = new Date()              // 0=>Jan  11=>Dec
// console.log(date.getFullYear())    //2023
// console.log(date.getMonth())       //11
// console.log(date.getDate())        //19
// console.log(date.getDay())         //2
// console.log(date.getHours())       //23
// console.log(date.getMinutes())     //20
// console.log(date.getSeconds())     //17
// console.log(date.getMilliseconds())  //941
// console.log(date.getTime())    //1703008217941



let newDate = Date.now();    // Date.now() returns the number of milliseconds since January 1, 1970.
console.log(newDate);  


//set Methods

// const d = new Date();
//  d.setTime(4738826383);
// console.log(d);

