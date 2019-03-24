(function(){
	function incrementCounter(){
		counter+=1;
	}
	function updateUI(){
		const colors=[
			{name: 'AZD', value:'#e74c3c'},
			{name: 'DSR', value:'#2980b9'},
			{name: 'HJ', value:'#2ecc71'},
			{name: 'PS', value:'#2c3e50'},
			{name: 'RK', value:'#f1c40f'},
			{name: 'VJ', value:'#d35400'},
		];
		let result=document.getElementById('resultDiv');
		
		//Relative to the font size of the element.
		//(2em means 2 times the size of current font)
		result.innerText = counter;
		if(counter>0)
		{
			result.style.fontSize = counter +'em';
		}
		
		//Divide first into second, return the remainder.
		//Access the element of the colors array to grab
		//the color object:
		let remainder = counter % color.length
		result.style.color = colors[remainder].value;
		
		//Clear out all existing child color divs
		let colorDiv = document.getElementById('colorDiv');
		colorDiv.innerHTML = '';
		
		//Re-add the child color divs
		for(i=0;i<colors.length;i++)
		{
			//Creating node dynamically with the intent of 
			//adding it to the colorDiv.
			let node=document.createElememt('div');
			let textnode=document.createTextNode(colors[i].name);
			node.appendChild(textnode);
			node.style.backgroundColor=colors[i].value;
			
			//Alternatively we could have amde this into a CSS
			//style and added that to the node.ClassList ...
			node.style.width='150px';
			node.style.height='50px';
			node.style.cssFloat='left';
			node.style.paddingLeft='10px';
			node.style.paddingTop='10px';
			
			if(i==remainder)
			{
				node.style.height='45px';
				
				//Example of adding a class to the node 's
				//classList.
				node.classList.add('selected');
			}
			colorDiv.appendChild(node);

		}	
	}
	
	function handleClick(){
		incrementCounter();
		updateUI();
	}
	
	let counter=0;
	let myButton = document.getElementById('myButton');
	myButton.addEventListener('click',function(){
		incrementCounter();
		updateUI();
	});
	
	updateUI();
})();
