//######################### JAVASCRIPT NOTES[Part-5] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//KEY POINTS::
//1. Note the use of (`) instead of (') for javascript for string literals.
//2. Javascript majorly deals with objects similar to classes in python/C/C++, but
//classes/objects in javascript are dynamic, and static in python/C/C++.

//STRING TEMPLATE LITERALS::
let name='Devansh';
console.log(`Hi ${name}`); //ouput> Hi Devansh

//${variable_name} inside the string would equivalent to variable value.

let para =
`	The art of reading and studying
	consists in remembering the essentials
	and forgetting what is not essential.
				― Adolf Hitler`;
console.log(para) //output>
//	The art of reading and studying
//	consists in remembering the essentials
//	and forgetting what is not essential.
//				― Adolf Hitler

//Indentaion gets preserved in the ouput.

function getReasonCount() {return 1;}
console.log(`Give me ${(getReasonCount()==1 ? 'one good reason':'a few reasons')} to try this !`);
// output> Give me one good reason to try this !

//REGULAR EXPRESSIONS (REGEX)::
let pattern = /xyz/;
console.log(pattern); //output> /xyz/
console.log(typeof pattern); //output> object

//Text inside '/../' is called a regular expression which we searh in other strings.
//They are of object type.

let sent1='This is xyz a test';
let sent2='Hello viewers';
console.log(pattern.test(sent1)); //output> true
console.log(sent1.replace(pattern, 'just')); //output> This is just a test
console.log(sent2.replace(pattern, 'just')); //output> Hello viewers
console.log(sent1); //output> This is xyz a test
console.log(sent1.match(pattern)); //output> [ 'xyz', index: 8, input: 'This is xyz a test' ]
console.log(sent2.match(pattern)); //output> null

//The '.test()', is to check if the regex is present in sentence or not.
//The '.replace()' replaces regex with provided string if its present in the sentence
//, otherwise keeps the sentence unchanged.
//However the sentence(main string) doen't gets finally changed after replace operations. 
//'.match()' gives the details of pattern in sentence.eg. index: 8, means that the pattern
//was found at index 8 of the sentence.

let id1=sent1.match(pattern);
let id2=sent2.match(pattern);
console.log(id1.index); //output> 8

//console.log(id2.index); //output> error, because its null.

//BUILT-IN NATIVES::
//The primitive built-in natives : String(), Number(), Boolean(), Object(), Function(),
//Symbol().
//Built-in natives not having primitive versions : Array(), RegExp().
//Additional ones: Date(), Error().

let myStr = new String('Great Game');
console.log(myStr); //output> [String: 'Great Game']
console.log(myStr.toString()); //output> Great Game
console.log(typeof myStr); //output> object

//The 'new' keyword creates construtor call for function.
//Note that 'myStr' is still an object and not string.

let myPrimitive= 'DsR!';
console.log(myPrimitive, typeof myPrimitive); //ouput> DsR! string
myPrimitive=myPrimitive.toLowerCase();
console.log(myPrimitive, typeof myPrimitive); //output> dsr! string

let num = new Number(7);
console.log(num, typeof num); //output> [Number: 7] 'object'
let pri = num.valueOf();
console.log(pri, typeof pri); //output> 7 'number'

//'.valuOf', '.toLowerCase', '.toString' are some of in-built methods.

//CONSTRUCTOR FUNCTION CALLS WITH THE 'new' KEYWORD::
function car(make, model, year){
	this.make=make;
	this.model=model;
	this.year=year;
}
let myCar = new car('bmw','745li','2010');
console.log(myCar); //output> car { make: 'bmw', model: '745li', year: '2010' }

//This is a general way of creating object(class in other programming languages)
//variables of an object.

function MyFunc(){
	console.log('HIroSHIMA');
}
let myfunc = new MyFunc();
console.log(typeof myfunc); //output> object

//Once 'myfunc' was created using 'new' keyword procedure, it no more remains a
//function and is a object, and hence:
//	myfunc(); <== will throw error.

//Note that we generally keep first alphabet of primitive function(or class) always capital
//as a convention, so that we can identify that we can call them using 'new' keyword.

//OBJECTS AND THE PROTOTYPE CHAIN::
let carModel={
	make: 'bmw',
	model: '745li',
	year: 2010
};
let car1 = Object.create(carModel);
console.log(car1.make); //output> bmw
console.log(Object.getPrototypeOf(car1)); //output> { make: 'bmw', model: '745li', year: 2010 }
carModel.doors=4;
console.log(car1.doors); //output>4

//Note the use of 'Object.create()'.
//'.getPrototypeOf()' is used to return the original prototype of a particular new
//object created.
//There's always a link between newly created object and its prototype, i.e. when we
//update a prototype its objects gets additional properties.

console.log(carModel.hasOwnProperty('doors')); //output> true
console.log(car1.hasOwnProperty('doors')); //output> false
car1.make = 'audi'
console.log(car1.make); //output> audi

//That means, the property 'doors' is owned by prototype and just carried on to its objects.
//We can alter object properties without affecting their prototype.


//############################################################################
