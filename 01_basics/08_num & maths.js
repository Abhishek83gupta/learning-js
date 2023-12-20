

const number = 56;                      // primitive way of declaring Number 
console.log(typeof number);             //number 


let number1 = new Number(78);           // Number Object way of declaring number 
console.log(typeof number1);           //object
console.log(number1);


//------------------------Number methods------------------------------

// tolocalestring()........ ==> convert into a string

//........let pocketMoney = new Number(10);                   // quite readable
let pocketMoney1 = new Number(100000000)               // not readable 
console.log(` The my monthly pocketmoney is ${pocketMoney1}` );
console.log(` The my monthly pocketmoney is ${pocketMoney1.toLocaleString()}` );


// toString()...... ==> convert into a string 
const abhishek = 19;
console.log(typeof abhishek);          //number

const marks = abhishek.toString();
console.log(typeof marks);             //string

// toFixed()......  ==> round off the value 

// const totalMarks = 79.56;
// console.log(totalMarks.toFixed());



// toprecision().....
let bodytemp = 78.3445;
console.log(bodytemp.toPrecision(5));


// for more Number property........
// ==>browser,console window,create number object,
// print variable ,you will get all method
// Number. ==> more methods 


//.....................Maths........................
// No need to import maths library like other languages 
//browser window ==> Math. for more

console.log(Math);      //Object [Math] {}



// Math.abs()......... ==> convert -ve value in +ve 
let number3 = -100;
console.log(Math.abs(number3)); //100

const num3 = 100;
console.log(Math.abs(num3)); //100


// Math.round()........==> round off the value 
let numberIs = 34.6; 
console.log(Math.round(numberIs));  // 35

const Num = 34.4
console.log(Math.round(Num))   // 34


// Math.ceil().........==> round off to greater value
let longerValue= 34.1;
console.log(Math.ceil(longerValue)); //35



// Math.floor().........==> round off to lesser value 
const shorterValue= 12.9; 
console.log(Math.floor(shorterValue)); //12



//Math. Min,Max().......
console.log(Math.max(34,4,3,2,0));  //34
console.log(Math.min(34,3,2,1,3));  //1


//----------------------------------------------------------------//

// let randomNumber = Math.random();                  // Generate random number in the range (0-1)
// console.log(randomNumber);



const rValue = parseInt(Math.random() *10+1)
console.log(rValue);







