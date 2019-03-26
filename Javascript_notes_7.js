//######################### JAVASCRIPT NOTES[Part-7] #########################

// AUTHOR : Devansh Singh Rathore (CSE, IIT Palakkad)
// SOURCE : Javascript Fundamentals for Absolute Beginners 2018 
//	    (CodeOnce, Youtube), by Bob Tabor

//############################################################################

//IMPORTANT LINKS AND WEBSITES::
//0. Google Fonts

//KEY POINTS::
//1. In order to print (') single quote as a part of string we need to add a '\' before the
//single quote so as to make Javascript recognize (') not as a end of string command.
//2. For adding a Javascript code in HTML file, we need to write the code within the 
//'<script>' and '</script>' tags.

//ERROR HANDLING WITH TRY CATCH::
//Javascript tries to correct the code as much as possible, and produce reasonable outputs.

let a = 7.23 * (undefined)/'ai';
console.log(a) //ouput> NaN

//That was certainly meaningless, but still instead of raising error it gave some output.

function beforeTryCatch(){
	let obj=undefined;
	console.log(obj.b);
	console.log('If previous linethrows an exception you\'ll can never see this');
}
//beforeTryCatch(); //<-- Commented as above function throws error.
function afterTryCatch(){
	try{
		let obj=undefined;
		console.log(obj.b);
		console.log('If previous line throws an exception you\'ll can never see this');
	}
	catch(error){
		console.log('Caught a bug! : ' + error.message);
	}
	finally{
		console.log('This will happen regardless of error occurs or not.')
	}
	console.log('When I am sad, I hack!!!');
}
afterTryCatch();
//output> Caught a bug! : Cannot read property 'b' of undefined
//	    This will happen regardless of error occurs or not.
//	    When I am sad, I hack!!!

//This represents general syntax of using 'try'/'catch'.
//Note that once an error is found, no other following commands in 'try' is executed.
//However content of 'finally' is always executed.
//We can also print error message in Javascript.

function performCalc(obj){
	if(!obj.hasOwnProperty('b')){
		throw new Error('object missing property');
	}
	return 8;
}
function perform(){
	let obj={};
	let value=0;
	try{
		value=performCalc(obj);
	}
	catch(error){
		console.log(error.message);
	}
	if(value!=0)
	{
		value+=1;
		console.log(value);
	}
}
perform(); //output> object missing property

//Note that, since the throw action takes place the 'return 8' doesn't takes place and
//the 'value' remains '0'.

//UNDERSTANDING THE DOCUMENT OBJECT MODEL(DOM)::
//Here we will be dealing with most of the web developement techniques. How the documents
//are created, how do we specify which functions are to be called on provided user input.

//The Document Object Model (DOM) is a programming API for HTML and XML documents. It 
//defines the logical structure of documents and the way a document is accessed and manipulated.

//The Document Object Model is a cross-platform and language-independent application programming
//interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is
//an object representing a part of the document. The DOM represents a document with a logical tree.

//Note: 'node' here should not be confused by 'nodejs', they are different.

//Each element node can have attribute nodes associated with it.We can find a node or a collection
//of nodes that satisfy a particular criteria, and then APIs provide us control to modify those
//collection of nodes i.e. text, attributes of the node, changing the class that was associated
//with the given node, we can add nodes, delete nodes.

//APIs also allows to associate events and arrays by the web browser.

//Take a look at: dom-intro.html                                                **
//This explains us how to use javascript function and codes in html and link with it.

//Take a look at: dom-intro2.html and dom-intro2.js                             **
//This explains us how to link with a document code of javascript with html and check for 
//the console messages and outputs.

//WORKING WITH DOM NODES::
//Take a look at dom-nodes.html and dom-nodes.js.                               **
//Just check out what this html file results to.


//** -> there's a file linked for it.
//############################################################################ 
