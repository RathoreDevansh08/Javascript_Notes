//######################### JAVASCRIPT NOTES[Part-1] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//TOP JAVASCRIPT FRAMEWORKS ::
//1. AngularJS (2.0 to 4)
//2. ReactJS
//3. Meteor.js
//4. Node.JS
//5. EmberJS

//IMPORTANT LINKS & WEBSITES ::
//0. https://nodejs.org/en
//1. https://caniuse.com :
//	Lets us know about Browser support tables for different modern
//	web techniques. 
//2. https://babeljs.io :
//	Its to let you know how syntax for a command code in another
//	version would look like.
//3. https://deal.codetrick.net
// 	for general info. on node.js, react.js, etc. and courses

//SETTING UP THE DEVEOPMENT ENVIRONMENT ::
//Steps for Ubuntu:
//1. Open Terminal
//2. Type node
//3. If it doesn't recognizes type : "sudo apt install nodejs"

//Trial Code :
console.log('Javascript is case sensetive!');
//This particular code is to print a message on console.

//COMMAND TO RUN A JAVASCRIPT FILE ::
//eg. node abc.js 

//BASIC JAVASCRIPT SYNTAX ::
//We expect a Javascript code to interact with HTML elements on a webpage,
//or to write video games, animations.

//There's a difference between the language itself and the encironment it
//runs on.

//Javascipt is a case sensetive language.

let x=3;
let y=7;
let z=x+y;
console.log('Answer after addition : ' + z); //output> Answer after addition : 10

//'let' keyword helps us to initialize a variable(identifier).

//The plus'+' used in the log code is actually concatenating the string
//with the value of z.

//VARIABLES ::
var x=3; //output> error //on my terminal                  ***
x=5;

//'var' is another keyword that works exactly same as 'let'(newer one).
//But it certainly can be problamatic in some special cases, that is why 
//we generally avoid to use it.

const m=7;
let myName = 'Devansh';

//'const' keyword is to set a constant which can't be changed in a program.
//we can use 'let' for a particular variable only once in its scope.

let n;
console.log(n); //output> undefined 
console.log(typeof n) //output> undefined
n=8;

//we can even declare a variable without initialization, but printing it 
//would result in 'undefined'.

//All variables(or identifiers) can begin with letter, '_', or '$'.
//Variables can have letters, numbers, '$', '_', but nothing else, no space.
//Moreover we can't use any keyword as a variable.
//Try to use camelCasing in variable names.

X=8;

//Excitingly, using a variable without 'let' declaration/initialization, 
//doesn't throws error unless it is a part of some print message, calculation.

//COMMENTS ::
//For single line comments: '//'
//For multiple line comments: '/*'--text--'*/'

//DATATYPES ::
//What makes Javascipt different from other programming languages is that,
//variables doesn't have any datatype but the datatypes are assigned to the 
//values that the variables obtain.

let w=12;
let e=true;
console.log(typeof w); //output> number 
console.log(typeof e); //output> boolean
console.log(typeof myName); //output> string

//For string it needs to be in single or double quotes.
//Type of uninitialized(can be declared) variables is also undefined.

let a=1;
let b='3';
let c=2;
let d=4;
let D=a+b+c;
console.log(typeof a, typeof b, typeof c) //output> number string number
let E=a+c+b;
console.log(typeof a, typeof b, typeof c) //output> number string number
console.log(typeof D, typeof E) //output> string string
console.log(D) //output> 132
console.log(E) //output> 33
let F=a+b+c+d; 
console.log(F) //output> 1324

//For printing a valid result in above case Javascipt takes preceeding
//numbers as string to concatenate with following string.

b=parseInt(b, 10) //10 is for decimal
let r=parseInt('coDeSpRinter', 10)
console.log(r) //output> NaN
let r0=isNaN(r)
console.log(r0) //output> true

//Here the command 'parseInt' is for the typecasting operation to int, which
//takes a variable and the radix of the number it is to be typecasted to.

//'NaN' will appear if try to typecast a non-number value using 'parseInt'.

//We can use 'isNaN' command to verify if a variable is NaN or not.

//There is nothing like 'parseBoolean' to typecast into boolean.


//*** -> command line might produce error.
//############################################################################
