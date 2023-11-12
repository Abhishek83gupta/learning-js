
let num = 16;             //number
let num1 = "16"           //string
console.log(typeof num,typeof num1); //number string
console.log(num,num1);        // 16 16


//........Conversion to Number().......

let marks = Number("35");   
console.log(typeof marks);   //number

let marks1 = Number("Abhishek");      //convert  successfully
console.log(typeof marks1);       // number
console.log(marks1);       // NaN  ==> Note a number

let marks3 = Number("1234abc");
console.log(marks3);   // NaN






//  Number(),parseInt(),parsefloat()

let marks4 = Number("345.68");            // Number ==> as it is print
console.log(marks4);       //345.68

let marks5 = parseInt("345.78");          // parseInt ==> decimal before number print ,decimal after number is removed   
console.log(marks5);     // 345                                 
 
// let marks6 = parsefloat("45.65");      // parsefloat ==> print complete number
// console.log(marks6);      //45.65

let marks6 = parseFloat("234.78abc");     
console.log(marks6);       //234.78 ***imp




// let markss = null   //object

let marks7 = Number(null); 
console.log(marks7);  //0

let marks8 = Number(undefined)
console.log(marks8);  //NaN     

let marks9 = Number(false)
console.log(marks9);  //0

let marks10 = Number(true)
console.log(marks10); //1




//.....Boolean() conversion.......


let bool = Boolean("Abhishek");
console.log(bool);  //true
console.log(typeof bool); //boolean

let bool1 = Boolean("");
console.log(bool1); //false

let bool3 = Boolean(0);     //0      //1
console.log(bool3);        //false  //true


//......String() conversion........

let str = String(78);
console.log(typeof str);  //string
console.log(str); //78



//tricky conversion
// let passed = 1;   //true 

//.......Operation.......

let random = 5;
let random2 = -random;
console.log(random2);



let str1 ="Abhishek";
let str2 ="Gupta"
console.log(str1 + str2);



console.log(2 + 2); //4
console.log(2 - 2);  //0
console.log(2 **3); //8
console.log(10 / 2); //5
console.log(25 % 5); //0  //remainder


//....some tricky....

console.log("1" + 2);  //12            //String intial
console.log(2 + "1");  //21            //String after
console.log("1" + 2 + 3);  //123       //String intial the addition
console.log(2 + 3 + "1");  //51        


//...special case...

console.log(true);           // true
console.log(false);          // false
console.log(null);           // null
console.log(undefined);      //undefined

// console.log(true +);     //error
// console.log(""+);        //error
console.log(+"");        //0