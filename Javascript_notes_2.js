//######################### JAVASCRIPT NOTES[Part-2] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//KEY POINTS::
//1. Javascript doesn't requires indentation for different scopes.
//2. Writing two different console.log() prints out ouput in two different lines.
//3. Check out, what does 'delete' keyword is used for in Javascript. 

//EXPRESSIONS AND OPERATORS::
let b=2;
let c=3;

//Three expressions here......can you find them?
let a=b+c;

//Answer->
//1. Let a ... variable declaration.
//2. Perform evaluation b+c.
//3. Result assigned to a.

//Operators:
//1. Assignment -> '='
//2. Arithematic -> '+', '-', '*', '/', '%'
//3. Increment/Decrement -> '++', '--'

let d=4;
let e=d%3;
console.log(d++); //output> 4 
console.log(e); //output> 1
console.log(++d); //output> 6

//4. String operators -> '+', ' '' ', ' "" '
//5. Precedence -> () //for setting up the arithematic operations according to BODMAS

let f = 1+2*3;
let g = (1+2)*3;
console.log(f,g); //output> 7 9

//6. Function Invocation operators -> ()
//7. Logical -> and: &&, or: || 
//8. Member Accessor operators -> '.'
//9. Code Block operators -> {}
//10. Array element access operators -> []

//ARRAYS::
let h=[1,3,5,7,9];
let i=['coDeSpRinter', 'iamrakesh28', 'mr.convict', 're_cursed', 'tymefighter', 'wildcat'];

//Indexes in Javascript are 0 based.

console.log(h); //output> [1, 3, 5, 7, 9]
console.log(i[0]); //output> coDeSpRinter
console.log(typeof h); //output> object
h[3]=8;

//To change the values in array(no worry of copy(deep/shallow)).
//Arrays are of 'object' datatype.
//Arrays can include elements of different datatypes.

let j=[1,'DSR08', true];
console.log(k[5]); //output> undefined                        ***
console.log(j.length); //output> 3

//We have '.length' property to give out length of array.

j[8]=10;
console.log(j); //output> [1, 'DSR08', true, , , , , , 10]
console.log(j.length); //output> 9
console.log(j[6]) //output> undefined

//Such an array with some empty elements is called sparse array.
//Printing array element which is unspecified, outputs undefined.

i.pop();
console.log(i); //output> ['coDeSpRinter', 'iamrakesh28',..., 'tymefighter']
i.push('vjac');
i.push('wildcat');
console.log(i.length); //output> 7

//Pop operation removes the last element of the array.
//While the push operation adds new elements at the back of the array.

//FUNCTIONS IN JAVASCRIPT::
//Function declaration:

function Intro()
{
	console.log(i);
//When the function is called:
//output> [ 'coDeSpRinter','iamrakesh28','mr.convict','re_cursed','tymefighter','vjac','wildcat' ] 
}

Intro(); //function call
let l=Intro;
l(); 

//The above mentioned way is another way of function call.

function quote(name)
{
	console.log("Play"+name);
}
quote(' cool !'); //output> Play cool !
quote(' it hard'); //output> Play it hard

//We don't have to specify any datatype in argument of function in Javascript.

function theBestCoder(m)
{
	return m[1];
}
let n=theBestCoder(i);
console.log(n); //output> iamrakesh28

//We can pass arrays in functions.
//Use 'return' keyword for returning any value.

//FUNCTION EXPRESSIONS::
setTimeout(function (){console.log('Wait for 3 seconds');},3000);
//output> Wait for 3 seconds(after 3 seconds) 

//'setTimeout' is used to execute a function(1st argument) after the 
//provided t milliseconds(2nd argument).

let count=0;
function virtualTime()
{
	setTimeout(function(){                       //output> Hi 0
		if(count<3)                          //	  Hi 1   
		{                                    //	  Hi 2
			console.log("Hi " + count++);
			virtualTime();
		}
	},2000);
}
virtualTime();

(function(){
 	console.log("IIFE!!"); //output> IIFE!!
})();

//Immediately Invoked Function Expressions(IIFE) is a method to automatically
//execute a function in Javascript without any function call. 
//Notice the function is surrounded by '(',')' and then the function operator '()'
//is seperately used.

//DECISION STATEMENTS::
//if, else, ternary operators, switch statements

let o=5;
if(o%2==0) console.log("5 is Even");
else if(1==true) console.log("Surprize.."); //output> Surprize..
else console.log("5 is Odd");

//switch use 1:
let hero='xman'
switch(hero)
{
	case 'superman':
	console.log("x-ray vision");   //output> hand blades
	case 'xman':                   //        Its a super-hero  
	console.log("hand blades");
	default:
	console.log("Its a super-hero");
}

//without breaking the cases, we execute every case after the dezired case.
//'default' is for the default case if no other case is executed. 

//switch use 2:
let he='Xman'
switch(he.toLowerCase())
{
	case 'superman':
	console.log("x-ray vision");   //output> hand blades
	break;
	case 'xman':                   
	console.log("hand blades");
	break;
	default:
	console.log("Its a super-hero");
	break;
}
  
//'break' statements are used to exit the smallest code block{}.
//The '.toLowerCase()' function is to convert the argument into lowercase.

let p=1, q='1';
let res = (p==q) ? 'equal' : 'not equal';
console.log(res) //output> equal
let re = (p===q) ? 'equal' : 'not equal';
console.log(re) //output> not equal
let r = (p!==q) ? 'not equal' : 'equal';
console.log(r) //output> not equal

//These are called ternary operations.
//The operator '==' allows Javascript to compare two values, and if they are not of
//same datatype, then javascript can even typecast them into same datatype and compare. 
//But '===' is strict comparison and doesn't allows typecasting.
//Similar is the use of strict inequality '!==' operator.


//*** -> command line might produce error.
//############################################################################
