function interrogate() {

var firstName = prompt('what is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);

function ageQuestion(message) {



	var age = prompt(message);
	age = parseInt(age);

	if(isNaN(age)) {
		ageQuestion('How old are you? Use numbers please.');
		return false;
	} 


	if (age >= 18) {
		console.log('User is an adult');
	}else if (age >= 13) {
		console.log('User is a teenager');
	}else{
		console.log('User is a child');


	}

}
ageQuestion('How old are you?');

/*
If the user's first name is 'General' and thier last name 
is NOT 'Assembly', then greet the general!
(Hint: use console.log)
*/


if (firstName == 'General' && lastName != 'Assembly') {
	console.log('Greetings General');
} 

var faveColour = prompt('What is your favourite colour?');
faveColour = faveColour.toLowerCase().trim();

if (faveColour === 'red' ||
	faveColour === 'green' ||
	faveColour === 'blue' ||
	faveColour === 'yellow') {
	$('h1').css('color', faveColour);
	}
}
//When the page loads
$(function() {

	$('img').on('click',interrogate);

	//When the user clicks a h3
	$('h3').on('click', function() {

		//Toggle the next element
		$(this).next().slideToggle(800);
	});

	


});
