(function(){
	function clickHandler (message){
		console.log('Hi...'+message);
	}
	
	//Get reference to myButton
	let myButton = document.getElementById('myButton');
	myButton.addEventListener('click',clickHandler('Hi from iife'));
})();
