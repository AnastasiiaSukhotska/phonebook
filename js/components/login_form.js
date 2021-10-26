class LoginForm{
	constructor(selector, userService){
		this.selector=selector;
		this.userService=userService;
		this.onregister=()=>{};
		document.addEventListener('DOMContentLoaded', ()=>{
			this.init();
			this.binds();
		});

	}
	init(){
		this.container=document.querySelector(this.selector);
		this.loginInput=this.container.querySelector('#login_user_login');
		this.passwordInput=this.container.querySelector('#login_user_password');
		this.button=this.container.querySelector('button');

	}
	binds(){
		this.button.addEventListener('click', ()=>this.login())
	}
	login(){
		let user=new User(
			this.loginInput.value,
			null,
			this.passwordInput.value
			);
		if(user.password.trim()===''||user.login.trim===''){
			alert('Fill form');
			return;
		}
		this.userService.login(user).then(r=>{
			if(r.status=='error') this.loginError(r.error);
			else if(r.token!==null){
				token=r.token;

				this.successLogin();
		}})
		
	}

	loginError(text){
		alert(text);
	}
	successLogin(){
		this.clearForm();
		this.hide();
		this.onregister();
		

	}
	clearForm(){
		this.passwordInput.value='';
		this.loginInput.value='';
	}
	hide(){
		let unauthorizedScreen= document.querySelector('.unauthorized-screen');
		unauthorizedScreen.style.display='none';
		let authorizedScreen=document.querySelector('.autorized-screen');
		authorizedScreen.style.display='flex';
	
	}
	
}



