//######################### JAVASCRIPT NOTES[Part-3] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//KEY POINTS::
//1. Javascript code runs fine without even ending some code lines with ';'.
//2. 'Namespacing' is a technique employed to avoid collisions with other objects or variables
//in the global namespace. They're also extremely useful for helping organize blocks of
//functionality in your application into easily manageable groups that can be uniquely identified.
//3. JSON: JavaScript Object Notation, and is used to send information between two different
//user systems.

//ITERATION STATEMENTS::
//for, while, do_while loops

let a=[1,3,5,7,9];
for(i=0;i<a.length;i++)
{
	console.log(a[i]);
}

//There is no need to use 'let' keyword in initialization of loop index.
//Rest of the for/While loop syntax is same as that in C/C++.

let b=1;
while(b<10)
{
	console.log(b++);
	if(b==8)break;	
}

//Its not compulsory to use code block {}, for single line commands, according
//to dependencies and its scope.
//Similar to this is the use of do_while loops in Javascript.

//BASICS OF SCOPE::
let c=c0='Ahmed';
function scopeTest()
{
	console.log(c0); //output> Ahmed
	let c='Himanshu';
	console.log(c); //output> Himanshu	
}
scopeTest();
console.log(c); //output> Ahmed

//The scope of c defined inside the function is within {}, and outside that, it
//doesn't holds valid.
//While for a global variable, the scope includes complete program.
//Variable defined in outer scope can be accessed/modified in inner scope.

//RETURNING FUNCTIONS FROM FUNCTIONS::
//In web developement, we avoid declaring global variables and functions, as that is
//considered to be a bad practice. Instead we try to return functions from functions!!.

//DON'T DO THIS EVER:
let d='I am a global variable, avoid Me!';
console.log(d);
let e=function(){console.log('Me too!');}

function one(){return 'one';}
let f=one;
let g=one();
console.log(typeof f); //output> function
console.log(typeof g); //output> string

//This happened because f has just become another name for the function which can be
//used in function call, but g is the value returned by the function.

function three()
{
	return function(){
		console.log("returning function!");
	}
}
let h=three();
h(); //output> returning function!

//In Javascript, we can even return a function itself.

function two()
{
	return function(){
		return "Its 2 bro..";
	}
}
console.log(two()); //output> [Function]
console.log(two()()); //output> Its 2 bro..

//OBJECT LITERALS::
let person ={
	college: 'IIT Palakkad',      //specifically defined object literal syntax
	name: 'BGP',
	subject: 'Maths',
	favouriteStudent: 'AhmedZeDdy',
	classAverage: function(){
		let AhmedMarks=20;
		return AhmedMarks-5;
	},
	intro: function(){
		console.log(this.name + ', ' + this.subject);
	}
}
console.log(person.college); //output> IIT Palakkad
console.log(person.classAverage()); //output> 15
person.intro(); //output> BGP, Maths
console.log(person['favouriteStudent']); //output> AhmedZeDdy

//Object literals is same as class in C/C++.
//To define a class variables/functions, we need to use ':' operator, and seperate out all
//the variables by ','.
//We use '.this' to refer to the class object.
//Note that we can also call any variable/method of object by: object['variable/method_name'].
//We always define a object within {}, which is its identity.

let friends={};
friends.names = ['AZD', 'DSR', 'HJ'];
console.log(friends.names[2]); //output> HJ

//Its another method to define object variables/methods after declaration.
//Note that, here we use '=', instead of ':' to assign a value to object variable.

let college = { student: { branch: 'CSE'}}
console.log(college.student.branch); //output> CSE

//This procedure is called chained or nested classes, which is somewhat used in something
//called 'namespace' in Javascript. 
//Functions defined inside object literals are generally termed as 'methods'.

let q={
	myQuote: [
		{q0:'Play ', user:'DSR08'},
		{q1:'Cool!', user:'re_cursed'}
	]
}
console.log(q.myQuote); //output> [ { q0: 'Play ' }, { q1: 'Cool!' } ]

//Javascript allows nested objects inside arrays and other such hierarchies.


//*** -> command line might produce error.
//############################################################################
