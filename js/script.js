let token=null;
let chosenContactInformation=$('.chosen-contact__information');
let userService=new UserServices();

let loginForm = new LoginForm('.login_form', userService);
loginForm.onregister=()=>{
	showPeople();
}
let registerForm = new RegisterForm('.register-form', userService);
let contactService=new ContactServices();
let addContactForm=new AddContactForm('.chosen-contact__add-form', contactService);
addContactForm.onregister=()=>{
	showPeople();
}
function showPeople(){
		let nameList=$('.name-list');
		nameList.html('');
		nameElements = contactService.getAllContacts();
		nameList.on('click', '.name-list__name-element', (e)=>{
			chosenContactInformation.html('');
			let index =e.target.dataset.index;
			let chosenName=e.target.dataset.name;
			let chosenValue=e.target.dataset.value;
			console.log(chosenName, chosenValue);
			contactService.findContact(chosenName, chosenValue)		
		})

	}

let nameElements;
let names=[];


function createNameElement(c,i){
		let $nameElement=$('<div>');
		$nameElement.addClass('name-list__name-element');
		$nameElement.attr('data-index', i);
		$nameElement.attr('data-name', c.name);
		$nameElement.attr('data-value', c.value);
		$nameElement.append(c.name);
		return $nameElement;
	}


	function append(arg){
		let nameList=$('.name-list');
		nameList.append(arg);
	}

	function append2(arg){
		chosenContactInformation=$('.chosen-contact__information');
		chosenContactInformation.append(arg);
	}







function createChosenContactElement(contact, i){
	
	let $chosenContactInformationElements=$('<div>');
	console.log($chosenContactInformationElements);
	$chosenContactInformationElements.addClass('chosen-contact__information-elements');
	$chosenContactInformationElements.html('Name: '+contact.name +'<br> Type: ' +contact.type+ '<br> Value: '+ contact.value);
	console.log($chosenContactInformationElements);
	console.log($chosenContactInformationElements);
	$chosenContactInformationElements.css('display', 'flex');
	return $chosenContactInformationElements;



}




/*
function createChosenContactElement(contact){
	let chosenContactInformation=$('.chosen-contact__information');
	let $chosenContactInformationElements=$('div');
	chosenContactInformation.html('');
	$chosenContactInformationElements.addClass('chosen-contact__information-elements');
	$chosenContactInformationName.append('Name: '+contact.name);
	$chosenContactInformationType.append('Type: '+contact.type);
	$chosenContactInformationValue.append('Value: '+contact.value);
	$chosenContactInformationElements.append($chosenContactInformationName);
	$chosenContactInformationElements.append($chosenContactInformationType);
	$chosenContactInformationElements.append($chosenContactInformationValue);
	chosenContactInformation.prepend($chosenContactInformationElements);
	$chosenContactInformationElements.css('display', 'flex');
	return $chosenContactInformationElements;



}
*/





