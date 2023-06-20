// alert("raghul comming");
// console.log(1234);
// console.log("welcome to javascript")
// console.log([1,2,3,4,5]);
// console.log({fname:'raghul',age:19})
// console.log({fname:'sanmathi',age:20})
// console.error("custom sample error");
// console.clear();
// console.time("timer");
// for(i=0;i<10;i++)
// {
//     console.log(i);
// }
// console.timeEnd("timer");
//--------------------------TOPIC 1: VAR LET CONST------------------------------------------//
/* 
var
let 
const
*/

// var a=25;
// var b=35;
// console.log(a+b);

//1.scope:

//note: ->var is global scobe ->let and const were local scope.
// if(true)
// {
//     var msg="welcome to javascript";
//     //let msg="welcome to javascript";
//     //const msg="welcome to javascript";
// }
// console.log(msg);

//2.variable redeclaration:
// in case we want to use redeclaration we should var else use let and const
// var a=25; 
// console.log(a);

// var a=40;
// console.log(a);

// here var allows to change the previously declared variable a but 
// let and const not allowed to redeclaration show error

/*
let a=25;
console.log(a)
let a=45;
console.log(a)  //Uncaught SyntaxError: Identifier 'a' has already been declared


const b=25;
console.log(b)
const b=45;
console.log(b)

3.value assignment

const a=25;
console.log(a);
a=45;
console.log(a);  //script.js:64 Uncaught TypeError: Assignment to constant variable.
// we can do assignment operation in var and let but not able to do in const.

const student={'name':"ram",age:"25"}
console.table(student);
console.log(student.name);
student.name='raghul';
console.table(student);
*/


/*
<---------------------------------TOPIC 2: DATA TYPES---------------------------->
JS is a dynamic programming language like python.
c c++ java are static programming progamming languages.

Number  eg:1.25,40
boolean eg:true,false
Null
Undefined
Symbols
String

*reference type
Array
Object Literals
Date

-->typeof

var a=25;
console.log(typeof a); //number
var fname="raghul";
console.log(typeof fname); //string
var phone=null;
console.log(typeof phone); //object
var ismarried=true;
console.log(typeof ismarried);  //boolean
var b;
console.log(typeof b); //undefined

-->type conversion(number to string)[.tostring]

var a=35;
console.log(a, typeof a) //number
a=String(a);
console.log(a, typeof a) //string

var b= new Date();
console.log(b, typeof b);
b=b.tostring();
console.log(b, typeof b);
*/



/*
<------------------------------------TOPIC 3: TYPE CONVERSION------------------------------>
-->type conversion(string to number)[parseint]

var a="1234";
console.log(a, typeof a); //string
a=Number(a);
console.log(a, typeof a); //number

var a=[1,2,3];
console.log(a, typeof a); //object
a=Number(a);
console.log(a, typeof a); //NaN number

var a=35.5;
console.log(a, typeof a);
a=parseInt(a);
console.log(a, typeof a);

var a=35.5;
console.log(a, typeof a);
a=parseFloat(a);
console.log(a, typeof a);

-->type coercion

var a="25";
var b=10;
console.log(a+b); //2510
a=Number(a);
console.log(a+b); //35
*/


/*
<----------------------------TOPIC 4: ARITHMETIC OPERATION----------------------------->

let a=100;
let b=20;
c=a+b;  //120
c=a-b;  //80
c=a*b;  //2000
c=a/b;  //5
c=a%b;  //0
c=2**3  //8
c=++a;  //101
c=--b;  //19
console.log(c);
*/

/*
<----------------------------TOPIC 5: ASSIGNMENT OPERATION------------------------------->

let c=20;
c+=10; //-=,*=,/=,%=
console.log(c);
*/

/*
<----------------------------TOPIC 6: MATH FUNCTIONS-------------------------------------->

let c;
c=Math.PI;
c=Math.E;
c=Math.round(5.8);
c=Math.floor(5.8);
c=Math.ceil(5.3);
c=Math.sqrt(80);
c=Math.abs(-5);  //5
c=Math.trunc(2.68); //2
c=Math.pow(2,4);
c=Math.min(10,20,30,40);
c=Math.max(10,20,30,40);
c=Math.random();
c=Math.floor((Math.random()*50))
c=Math.sign(-25);
c=Math.sin(45);
c=Math.log(45);
console.log(c);
*/

/*
<------------------------------TOPIC 7: CAMPARISON OPERATION------------------------------>

let a=10;
let b="10";
let c=20;
console.log(a==b);  //true
console.log(a===b); //false
console.log(a!=c); //true
console.log(a!=b); //false
*/ 


/* 
<------------------------------TOPIC 8: RELATIONAL OPERATION------------------------------>

let a=10;
let b=20;
console.log(a>b); //fals <,>,<=,>=
*/


/* 
<------------------------------TOPIC 9: LOGICAL OPERATION------------------------------>
&& Logical and
|| Logical or
!  Logical not

let mark=35;
console.log(mark>=35 && mark<=100); //true
console.log(mark>35 && mark<=100);  //false
console.log(mark>35 || mark<=100);  //true
*/

/* 
<------------------------------TOPIC 10: CONDITIONAL OPERATOR------------------------------>
*/
const age=15;
const result=age>=18?"elgible":"noteligible";
console.log(result);

//holding null  values
 function welcome(name)
 {
    const result=name?name:"no name";
    console.log("welcome "+ result);
 }
 welcome();
 welcome("raghul");
 welcome("sanmathi");
 welcome("roja");