var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h6');


if(!(localStorage.getItem('name'))){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "User: " + storedName;
}

myButton.onclick = function(){
	setUserName();
}

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/google.png'){
		myImage.setAttribute('src','images/google2.png');
	}else{
		myImage.setAttribute('src','images/google.png');
	}
}

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'User: ' + myName;

}

