
class ContactServices{
	getAllContacts(){
		return $.ajax({
			url: ContactServices.BASE_URL+'contacts',
			method: "GET",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token
			},
			success:(r)=>{
				let contacts=r.contacts.map(c=>Contact.createContactName(c));
				console.log(contacts);

				contacts=contacts.map((r,i)=>createNameElement(r,i));
				console.log(contacts);
				contacts.forEach((r)=>append(r[0]));
				console.log(contacts);
			}
		})
	}


	findContact(chosenName, chosenValue){
		return $.ajax({
			url: ContactServices.BASE_URL+'contacts',
			method: "GET",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token
			},
			success:(r)=>{
				let contacts=r.contacts.map(c=>Contact.createContactName(c));
				console.log(contacts);
				let chosenContact=contacts.find(c=>c.name==chosenName && c.value==chosenValue);
				console.log(chosenContact);
				chosenContact=createChosenContactElement(chosenContact);
				console.log(chosenContact);
				append2(chosenContact);

			}
		})
	}
			

	addContact(contact){
		return $.ajax({
			url: ContactServices.BASE_URL+'contacts/add',
			method: 'POST',
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token
			},
			data: JSON.stringify({
				value: contact.value,
				name: contact.name,
				type: contact.type
			
			}),
			dataType: "json"

		})
			
	}
}

ContactServices.BASE_URL='https://mag-contacts-api.herokuapp.com/';
