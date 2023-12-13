

// destructuring means extracting the values of the object 
// you can also change the key name inside the object



const todaysLecture=  {
    subject : "DSA",
    duration : "1 hour",
    taughtBy : "mahi Mam"

}

// // let lec = todaysLecture.subject;
// // console.log(lec);


// console.log(`So todays lecture is ${todaysLecture.subject} and the time duration of the lecture 
// is ${todaysLecture.duration} ,${todaysLecture.taughtBy} will teach `);

//-------------------------------------------------------------------------------------------------------//



let { subject , duration , taughtBy  } = todaysLecture
// console.log(subject , duration , taughtBy)

console.log(`So todays lecture is ${subject} and the time duration of the lecture 
is ${duration} ,${taughtBy} will teach `);


//------------------------------------------------------------------------------------------------------//

// const todaysLecture=  {
//     subject : "DSA",
//     duration : "1 hour",
//     taughtBy : "mahi Mam"

// }

// // syntax 
// // variable  { oldKeyName : newKeyName,.............n } = objectName
 

// const { subject : a , duration : b , taughtBy : c } = todaysLecture


// console.log(`So todays lecture is ${a} and the time duration of the lecture 
// is ${b} , and ${c} will teach `);






