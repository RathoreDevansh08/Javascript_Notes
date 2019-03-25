//######################### JAVASCRIPT NOTES[Part-4] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//KEY POINTS::
//1. Disadvantages of using Global variables:
  //a. Each variable that you define in global scope is not going to be removed from
  //computer's memory until the web browser tab navigates to new webpage. The more we
  //add into the global scope, the more memory its going to consume, while that tab is 
  //open for a particular webpage.
  //b. If we merge codes, or by mistake use a declared global variable as a new variable
  //in a function, then collision might occur.
//2. We prefer to use 'let' keyword over 'var' keyword for variable declaration.
//3. The "use strict" directive was new in ECMAScript version 5. It is not a statement, 
//but a literal expression, ignored by earlier versions of JavaScript. The purpose of 
//"use strict" is to indicate that the code should be executed in "strict mode". With strict
//mode, you can not, for example, use undeclared variables.
  //eg. "use strict";
  //	x=3.14; //this will cause an error, because x is not defined.

//MODULE PATTERN AND REVEALING MODULE PATTERN::
let counter=(function(){
	//private stuff
	let count=0;
	function print(message){
		console.log(message+'==>'+count);
	}
	//return an object
	return {
		value: count,
		get: function(){return count;},
		set: function(v){count = v;},
		increment: function(){
			count+=1;
			print('After increment: ');
		},
		reset: function(){
			print('Before reset: ');
			count=0;
			print('After reset: ');
		}
	}
}
)();
console.log(counter.count); //output> undefined
console.log(counter.value); //output> 0
counter.increment(); //output> After increment: ==>1
counter.increment(); //output> After increment: ==>2
console.log(counter.value); //output> 0
counter.reset(); //output> Before reset: ==>2
                 //        After reset: ==>0

//This model returns an object from IIFE, and this technique is called 'module pattern'.
//Note the use of 'print' defined function and not 'console.log()'.
//We cannot access private variables like 'count' outside by using 'counter.count', it
//will be undefined as we return only the object containing 'value', 'increment','reset'
//to the counter.
//Note that value of 'counter.value' even after increment is 0 only, because we 
//accidently created something called 'Closure' in javascript.

counter.set(8); 
console.log(counter.get()); //output> 7
counter.reset(); //output> Before reset: ==>7
                 //        After reset: ==>0
                 
//Other than this, there is something called 'revealing module'.

let reveal=(function(){
	//private stuff
	let cnt=0;
	function print(msg){
		console.log(`${msg}==>${cnt}`); //note the way of using string.
	}
	function getCnt(){return cnt;}
	function setCnt(v){cnt=v;}
	function incrementCnt(){
		cnt+=1;
		print('After increment: ');
	}
	function resetCnt(){
		print('Before reset: ');
		cnt=0;
		print('After reset: ');
	}
	
	//return an object
	//'reveals' the public functions
	return {
		get: getCnt,
		set: setCnt,
		increment: incrementCnt,
		reset: resetCnt
	}
})();
console.log(reveal.get()); //output> 0

//This model is 'revealing model' as here we reveal public functions through certain
//objects returned to it.

//CLOSURES::
//A closure is a feature in JavaScript where an inner function has access to the outer
//(enclosing) function’s variables — a scope chain.

//The closure has three scope chains:
//1. It has access to its own scope — variables defined between its curly brackets.
//2. It has access to the outer function’s variables.
//3. It has access to the global variables.

function sayHi(name)
{
	return function(){
		console.log('Long live '+name);
	}
}
let vaibhav=sayHi('vjac')
vaibhav(); //output> Long live vjac

//'this' KEYWORD::
function first(){
	return this;
}
console.log(first()===global) //output> true

//'this' is node's global object, because that's where the first method was called.

function second(){
	'use strict';
	return this;
}
function third(){
	'CSE';
	return this;
}
console.log(second()===global); //output> false
console.log(second()===undefined); //output> true
console.log(third()===global); //output> true
console.log(third()===undefined); //output false

//Here 'use strict' is undefined value and is bound to nothing, hence its undefined.
//The rule around binding of 'this' keyword changes according to the context, here
//the contexts were 'use strict', 'CSE'.

let myObject={value: 'My object '}
global.value = 'Global object ';
function fourth(name){
//Return something different depending on how we call this method.
	return this.value + name;
}
console.log(fourth()); //output> Global object undefined
console.log(fourth('DSR')); //output> Global object DSR
console.log(fourth.call(myObject, 'DSR')); //output> My object DSR
console.log(fourth.apply(myObject, ['DSR'])); //output> My object DSR

//Here '.call()', '.apply()' are a built-in function, and will bind the 'this.value'
//from that of 'myObject' function.
//Difference between them is that, 'call()' method takes arguments seperately while
//the 'apply()' method takes arguments as an array.

//Use of 'call()' function explained:
function fifth(){
	console.log(this.firstName + ' ' + this.lastName);
}
let person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
let person1 = {
  firstName:"Deepak",
  lastName: "Sir",
  print: fifth
}
let person2 = {
  firstName:"Chandru",
  lastName: "Sir",
  print: fifth
}
console.log(person.fullName.call(person2)); //output> Chandru Sir.
person1.print(); //output> Deepak Sir
person2.print(); //output> Chandru Sir

//Thus 'this' keyword depends on how a function is called, and the site from which it
//is called.

//Take a look at: this_keyword.html                                            **

//DESTRUCTURING::
//Method for unpacking the elements of arrays or other such structures.

let marvels=['satvik', 'amit', 'kaushal'];
let s,a,k,b,others;
[s,a,k]=marvels;
console.log(s,a,k); //output> satvik amit kaushal
[b, ...others]=marvels;
console.log(b); //output> satvik
console.log(others); //output> [ 'amit', 'kaushal' ]

//To take all the rest of the elements use '...' with a variable name which will contain
//array of rest of the elements.

let year, model;
({year, model}={
	make: 'bmw',
	model: '745li',
	year: 2010,
	cost: 5000
}); 
console.log(year); //output> 2010
console.log(model); //output> 745li

//Just note the use of IIFE in the previous example for destructuring.


//** -> there's a file linked for it.
//############################################################################

