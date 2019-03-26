//######################### JAVASCRIPT NOTES[Part-6] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//JAVASCRIPT CLASSES::
//Its main part of OOP concepts.

class Car{
	constructor(make,model,year){
		this.make=make;
		this.model=model;
		this.year=year;
	}
	
	print(){
		console.log(`${this.make} ${this.model} (${this.year})`);
	}
}
let myCar = new Car('bmw','745li',2010);
myCar.print(); //output> bmw 745li (2010)

//To define constructor, the term 'constructor' is used.
//As usual constructor is automatically called.
//'new' keyword is used during class object declaration.

class sportsCar extends Car{
	revEngine(){
		console.log(`Vrrroom goes the ${this.model}`);
	}
}
let mySportsCar = new sportsCar('dauge', 'viper', 2011);
mySportsCar.print(); //ouput> dauge viper (2011)
mySportsCar.revEngine(); //output> Vrrroom goes the viper

//Keyword 'extends' is used for inheriting classes.
//The inherited class retains all the primary class objects/methods.
//Notice that we even haven't created the constructor function of 'sportsCar' class.

//ARROW FUNCTIONS::
let a = () => {console.log('Hello readers!');}
let b = (name) => {console.log(`Hi ${name}`);}
a(); //output> Hello readers!
b('DSR'); //output> Hi DSR

//This is another variation of syntax to declare/define a function.
//It uses specifically '=>' operator.

let add = (m,n) => {return a+b;}
console.log(add(7,3)); //output>10

let Canony=['AZD','DSR','HJ'];
let c=0;
Canony.map((name)=> {c++;console.log(`cool${name} ${c}`);})
//output> coolAZD 1
//	    coolDSR 2
//	    coolHJ 3

//The '.map()' function is used to map ech element of the object to a function i.e.
//to pass through a function.
//The mapping is dine using '=>' function here.

let d = Canony.map((name)=> {return `cool${name}`;})
console.log(d) //output> [ 'coolAZD', 'coolDSR', 'coolHJ' ]

//TRUTHY AND FALSY VALUES::
//The conditions below are falsy, and hence the else command executes.

if(false){}else{console.log('false is falsy');}
if(null){}else{console.log('null is falsy');}
if(undefined){}else{console.log('undefined is falsy');}
if(0){}else{console.log('0 is falsy');}
if(''){}else{console.log('an empty string with single-quotes is falsy');}
if(NaN){}else{console.log('NaN is falsy');}
if(""){}else{console.log('an empty string in double-quotes is falsy');}

//Eveything else is Truthy.

if(true){console.log('true is truthy')}
if({}){console.log('an empty object is truthy')}
if([]){console.log('an emty array is truthy')}
if('Canony'){console.log('a non-emty string is truthy')}
if(10){console.log('+ve integers are truthy')}
if(-10){console.log('-ve integers are truthy')}
if(-1.23){console.log('non-zero floats are truthy')}
if(Infinity){console.log('positive infinity is truthy')}
if(-Infinity){console.log('negative infinity is truthy')}

//Note how we define NaN, Infinity, -Infinity in Javascript.

//'null' TYPE::
let regex = /xyz/;
let value = 'This is a sample string.';
let result = value.match(regex);
console.log(result); //output> null
console.log(typeof result); //output> object
console.log(typeof null); //output> object

//It results 'null' if there is no such regular expression in the provided string.
//The type of 'null' element is an object.
//'null' is not '0', nor 'undefined', neither an empty string. It just means that
//object reference was expected but was not set to any value.

//DATE OBJECTS::
let today = new Date();
let tom = new Date('February 29, 2000, 07:01:23');
let yes = new Date('2000-02-29T07:01:23');
let dby = new Date('2000,02,29');
let day = new Date('2000-02-30T07:01:23');
let one = new Date('2000,02,30');
console.log(today); //output> 2019-03-23T11:44:07.261Z
console.log(tom); //output> 2000-02-29T01:31:23.000Z
console.log(yes); //output> 2000-02-29T07:01:23.000Z
console.log(dby); //output> 2000-02-28T18:30:00.000Z
console.log(day); //output> 2000-03-01T07:01:23.000Z
console.log(one); //output> 2000-02-29T18:30:00.000Z

//In the representation for 'yes', 'T' used is for time.
//Above mentioned are the possible ways to print date and time.
//The 'new Date()' return today's date and time.
//If we pass non-existing date as in 'day', it will return the date corresponding
//to the extended no. of days.

let elapsedTime = today-tom;
console.log(elapsedTime); //output> 601554298744
console.log(yes.getDay()); //output> 2
console.log(yes.getTime()); //output> 951807683000
console.log(yes.getDate()); //output> 29
console.log(yes.getMonth()); //output> 1 
console.log(yes.getYear()); //output> 100

let two = new Date('2001-01-28T07:01:23');
console.log(two.getDay()); //output> 0
console.log(two.getTime()); //output> 980665283000
console.log(two.getDate()); //output> 28
console.log(two.getMonth()); //output> 0
console.log(two.getYear()); //output> 101

//'elapsedTime' gives out the exact time difference in milliseconds between the two times.
//'.getDay' and similar functions are to return the exact day, date.. of that particular
//Date object.
//'.getDay': 0->Sunday, 1->Monday, ..., 6->Saturday.
//similraly we have '.getHours()', '.getMinutes()', '.getSeconds()', '.getMilliseconds()'.

//There are also in-built methods for conversion between UTC-time and local date/time.

//STRING METHODS::
console.log('Its a name dood!'.toUpperCase()); //output> ITS A NAME DOOD!
let primes = '2,3,5,7,11,13';
let mySplit = primes.split(',');
console.log(mySplit); //output> [ '2', '3', '5', '7', '11', '13' ]

//We can directly apply string methods to strings.
//The '.split()' method allows to split the string into various parts on each argument
//character provided(here ','), and stores it into an array.

let fact = 'BGP makes maths electives boring & complicated.';
let mySlice = fact.slice(10,25);
console.log(mySlice); //output> maths electives
let mySubString = fact.substr(10,15);
console.log(mySubString); //output> maths electives

//Note that here 10 is the index from where we have to start slicing and 25 is the 
//index next to the last element of the sliced part.
//Similar works the the 'substr' to extract out a substring, but takes first input 
//as the initial index and second input as the substring length.

let e=fact.endsWith('ted.'); 
let f=fact.startsWith('AZeDdy');
let g=fact.includes('bor');
console.log(e,f,g); //output> true false true

//These three methods returns boolean for checking if the string ends with, starts
//with or includes the given substrings as arguments to these methods.

let myRepeat = 'La! '.repeat(3);
console.log(myRepeat); //output> La! La! La!

//The repeat method is to return a string with repeated string many times.

let myTrim = '    Captain Marvel    ';
console.log(myTrim.length); //output> 22
console.log(myTrim.trim(), myTrim.trim().length); //output> Captain Marvel 14

//Basically '.trim()' methods trims out additional spaces from starting and the end
//of the string.

//ARRAY METHODS::
//There are methods like push and pop for the array in Javascript.

let names = ['AZD', 'DSR', 'HJ', 'PS', 'RK', 'SU', 'VJ'];
let userNames = ['tymefigther','DSR08','re_cursed','mr.convict','iamrakesh28','wildcat','vjac'];
let rollno = [02, 11, 13, 22, 24, 27, 29];
let fibonacci = [0,1,1,2,3,5,8,13];

let conCat = rollno.concat(fibonacci);
let fibstr = fibonacci.join(':');
console.log(conCat); //output> [ 2, 11, 13, 22, 24, 27, 29, 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibstr); //output> 0:1:1:2:3:5:8:13

//'.concat()' just concatenates the arrays and don't removes the repeatative elements.
//The '.join()' method joins the elements of array keeping passed char/string in between each
//element and returns it in form of a string.

console.log(fibonacci.shift()); //output> 0
console.log(fibonacci); //output> [ 1, 1, 2, 3, 5, 8, 13 ]

//The '.shift()' method shifts the array elements one step left and returns the 0th element.

fibonacci.unshift(0);
console.log(fibonacci); //output> [ 0, 1, 1, 2, 3, 5, 8, 13 ]

//We can even use '.unshift()' to add elements to the array by passing ',' seperated elments
// to the method which will be added in the front of array.

console.log(conCat.reverse()); //output> [ 13, 8, 5, 3, 2, 1, 1, 0, 29, 27, 24, 22, 13, 11, 2 ]
console.log(conCat.sort()); //output> [ 0, 1, 1, 11, 13, 13, 2, 2, 22, 24, 27, 29, 3, 5, 8 ]
let ab= names.sort();
console.log(ab===names); //output> true

//'.reverse()' reverses the elements of the array and '.sort()' sorts the array elements.

console.log(userNames.indexOf('wildcat')); //output> 5
console.log(userNames.indexOf('abc')); //output> -1
console.log(conCat.lastIndexOf(2)); //output> 7

//The '.indexOf()' method returns the index of passed element, in the array.
//The '.lastIndexOf()' method returns the index of last occurence of the passed element, in
//the array.
//These methods return '-1'if they sre not present in the array.

let canony = names.filter((x)=> {if(x<'Nobody!')return x;})
console.log(canony); //output> [ 'AZD', 'DSR', 'HJ' ]
let bb=0;
names.forEach((x) => {bb+=1;})
console.log(bb); //output> 7
console.log(rollno.every((roll) => roll<25)); //output> false
console.log(rollno.some((roll) => roll<25)); //output> true

//To filter the elements out of array under certain criterias we use '.filter()' method.
//'forEach()' method is to carry out a procedure for each single element in array.
//'every()' returns a boolean value according to the condition passed to it, checking that
//consition for all the elements of array.
//Similarly '.some()' mehod checks for any single element that satisfies given condition &
// returns boolean according to it.


//############################################################################
