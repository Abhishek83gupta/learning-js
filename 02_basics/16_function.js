// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "Something" invokes it(calls it)


// function() {}

function computer (computerParts,computerParts1) {          // inside  this (a,b,......n) ==> parameters
             
    console.log(`Hey there are so many parts of computer ${computerParts} and ${computerParts1} `)  ;
  
  }
  
  computer("monitor","CPU")           // function call  // inside this (a,b,.....n) ==> arguments
   
  
  //--------------------------------------------------------------//
  
  function addition(number1,number2){
      console.log(number1+number2);
  }
  
  addition(4,5)  //9
  addition(9,1)  //10
  
  let number3 = addition(4,10);
  console.log(number3);             // undefined  since,number3 is not storing any value ,the function is not returning any value
                                    // function only printing the value 
  
  
                                    
  
  // .................return keyword...............
  //return keyword use when to store value in another variable,return act as full stop
  //after return keyword any code line will not excute
  
  
  
  
  function multiplication(num1,num2){
      // console.log(num*num2);
      return num1*num2;
  }
  
  multiplication(2,3)  //6
  
  let num3 = multiplication(2,3)
  console.log(num3)    //6
  
  
  //after return keyword any code line will not excute
  
  
  function subtraction(sub1,sub2){
  
       let randomNumber = 10;
      //  console.log(randomNumber);
       
      return sub1-sub2;
      
      console.log(randomNumber);     // it willl not excecute
  
  }
  
  const sub3 = subtraction(10,5);
  console.log(sub3)
  
  
  
  //------------------------------------------------------------//
  
  
  
  function addition(number1,number2,number3,number4){
      return (number1+number2+number3+number4);
  }
  
  // let add = addition(5,9);             //NaN
  // let add = addition("5",9,4,9);
  // let add = addition(5,9,7,"Abhishek");
  // let add = addition(null,9,"3",9);
  // let add = addition(true,9,"3",3);
  // let add = addition(false,9,"3",9);
  let add = addition(5,9,"3",9);
  console.log(add);
  
  
  
  // n number of parameter 
  // known as rest operator in function
  // same like spread operator 
  //return value in the form of array 
  
  // function arithematic (...number) {
  //     console.log(number)
  // }
  
  // arithematic(1,2,3,4,5,6)
  
  function arithematic (num1,num2,...number) {
      console.log(num1,num2);
      console.log(number);
  }
  
  arithematic(1,2,3,4,5,6)
  
  
  //--------------------------------------------------------------//
  
  //function inside an object 
  
  // let insideFunction = {
  //     name :" Abhishek",
  //     rollNo : "19"
  // }
  
  // function  funObject(newVar) {              // anyname you can pass not complusory to pass same name 
  //     console.log(`My name is ${newVar.name} and my roll no is ${newVar.rollNo} `)
  // }
  
  // funObject(insideFunction)            // complusory to give as it is object name
  
  
  
  
  
  // or you  can pass direct  object values at the time of function call
  
  
  
  function  funObject(newVar) {              
      console.log(`My name is ${newVar.name} and my roll no is ${newVar.rollNo} `)
  }
  
  funObject({
      name :" Abhishek",
      rollNo : "19"
  })     
  
  
  //----------------------------------------------------------------//
  //function inside an array
  
  
  
  // const newGeometryBox = ["rounder", "eraser", "shopner","differentScales"]    // anyname you can pass not complusory to pass same name 
  
  // function usingGeometryBox(findingValue) {
  //     let firstValue = findingValue[0];
  //     console.log(firstValue);
  // }
  
  // usingGeometryBox(newGeometryBox)        // complusory to give as it is function name
  
  
  
  
  
  // const newGeometryBox = ["rounder", "eraser", "shopner","differentScales"]    
  
  // function usingGeometryBox(findingValue) {
  
  //      let items = findingValue[1];
  //      return items;
  // }
  
  // let returValueIs = usingGeometryBox(newGeometryBox);
  // console.log(returValueIs)       
  
  
  
  const newGeometryBox = ["rounder", "eraser", "shopner","differentScales"]    
  
  function usingGeometryBox(findingValue) {
  
     return findingValue[1];
  }
  
   console.log(usingGeometryBox(["rounder", "earser"]))   //passing direct array value
  
  
  
  
  
  
  
  
  