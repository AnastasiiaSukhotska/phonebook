
class UserServices{


	getAll(){
		return $.get(UserServices.BASE_URL+'users', (r)=>{
			let users=r.users.map(us=>User.create(us));
			console.log(users);
			
			})
		}




		register(user){
			return $.ajax({
				url: UserServices.BASE_URL+"register",
				method: "POST",
			headers:{
				'Content-Type':'application/json'
			},
			data: JSON.stringify({
				login: user.login,
				password: user.password, 
				date_born: user.bornDate
			}),
			dataType:"json",
			})
		}


		



	login(user){
		return $.ajax({
			url: UserServices.BASE_URL+'login',
			method: "POST",
			headers:{
				'Content-Type':'application/json'
			},
			data: JSON.stringify({
				login: user.login,
				password: user.password
			}),
			dataType:"json",
			success:(r)=>{
				console.log(r);
			}
			});
			
		}
}
	

UserServices.BASE_URL='https://mag-contacts-api.herokuapp.com/';
