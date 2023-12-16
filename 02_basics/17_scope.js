// let , const ==> scope limited
// var ==> scope not limited 


//.......................... global scope and local space.............................
                                                                                                                                                                                               // Ex :- principal and HOD


// let  boss = "rahul";                  // global scope 
// var assistant1 = "sachin";
// const assistant2 = "Viraj";

// console.table([boss, assistant1 ,assistant2]);


if(true) {

    let  boss = "rahul";                 // local scope  
    var assistant1 = "sachin";
    const assistant2 = "Viraj";

    console.table([boss, assistant1 ,assistant2]);
}


console.log(assistant1);   // It will print the value ,var doesn't have scope 

assistant1 = "Chetan";     // the value also get changed because var scope problem 
console.log(assistant1)   



// let arr = ["Anurag", "Khushi" , "Krishna"];
// const arr2 = arr.length;
// console.log(arr2);



// let arr = ["Anurag", "Khushi" , "Krishna"];            // Global scope

for (let index = 0 ; index < arr.length ; index++ ) {     

    //  console.log(index)
    let arr = ["Anurag", "Khushi" , "Krishna"];         // local scope

}

// console.log(index)      // Error!
console.log(arr);      
 


//-----------------------------------------------------------------------------------------------//


// nested function 
                                                                                                                                                                                                      // Dad pocket money stole
function mainHead () {
     
    const globalHead = "This is Head "
 

         function seniorHead () {
     

             let seniorLocalhead = " This is seniorHead "  

                // console.log(juniorHead);    // Error 
              function newJuniorHead () {


                const  juniorHead = " This is JuniorHead "

              console.log(globalHead);

          }

          newJuniorHead()
        }

        //   newJuniorHead()      // Error
    //  console.log(juniorHead);  // Error

   seniorHead()
}

mainHead()
 
// If main function is call automatically inside all function will call 
// for accessing the inside function values you have to call the inner function to outer function



if(true) {

  let computer = "This is my computer variable" 
  
      if(computer == "This is my computer variable"){

        let electricity = " withut electricity you can't you computer or else other electronic devices"

         console.log(computer);
      }

    // console.log(electricity);  // error

}


console.log(computer);    // error
console.log(electricity);   // error


//----------------------------------------------------------------//


// function add(value1,value2) {
//     return  value1 + value2 ;
// }

//  let outputValue = add(3,5);
//  console.log(outputValue);



// instead of using storing return value in another variable
// you can directly assign the function output to a variable


//  let addValue = function add(value1,value2) {
//     return  value1 + value2 ;
// }

// console.log(addValue(4,5));



let addValue = function (value1,value2) {
    return  value1 + value2 ;
}

console.log(addValue(4,5));




