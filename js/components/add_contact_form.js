
class AddContactForm{
	constructor(selector, contactService){
		this.selector=selector;
		this.contactService=contactService;
		this.onregister=()=>{};
		$(document).ready(()=>{
			this.init();
			this.binds();
		});

	}
	init(){
		this.container=$(this.selector);
		this.nameInput=$('.chosen-contact__add-form_name');
		this.typeInput=$('#type');
		this.valueInput=$('.chosen-contact__add-form_value');
		this.button=$('.btn_add_contact');

	}
	binds(){
		this.button.on('click', ()=>{this.addContact();
			
		})
	}
	addContact(){
		let contact=new Contact(
			this.typeInput.val(),
			this.nameInput.val(),
			this.valueInput.val()
			);
		if(contact.name.trim()===''||contact.value.trim()===''){
			alert('Fill form');
			return;
		}
		this.contactService.addContact(contact).then(r=>{
			if(r.status=='error') this.addContactError(r.error);
			else this.successAddContact();
		})
		
	}

	addContactError(text){
		alert(text);
	}
	successAddContact(){
		this.clearForm();
		alert('Contact added!');
		this.onregister();

	}
	clearForm(){
		this.nameInput.val("");
		this.typeInput.val("");
		this.valueInput.val("");
	}
	
	
}
