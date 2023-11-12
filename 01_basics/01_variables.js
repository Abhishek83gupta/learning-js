// Variables ===> let,const,var

const email_id = 'abhi123@gmail.com';

// email_id = 'vivek02@gmail.com';   // Not allowed 

var acc = 1234;
let name = 'abhi';

acc = 7890;
name = 'prasad';

console.log(acc);
console.log(name);

// print multiple value...in form of array ---> console.table

let firstName = 'Abhishek';
let surName = 'Gupta';
const rollNo = 19;

console.table([firstName,surName,rollNo]);


// var scope problem 

for(var i=0;i<5;i++)
{
 console.log(i);
}

console.log(i);  

// strictly follow the use let problem scope 



//  age = 19;                   //Not a good practice you just know 
//  console.log(age);

//  name = 'abhi';
// console.log(name);
