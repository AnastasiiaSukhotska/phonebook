



class LoginForm{
	constructor(selector, userService){
		this.selector=selector;
		this.userService=userService;
		this.onregister=()=>{};
		$(document).ready(()=>{
			this.init();
			this.binds();
		});

	}
	init(){
		this.container=$(this.selector);
		this.loginInput=$('#login_user_login');
		this.passwordInput=$('#login_user_password');
		this.button=$('.btn_login');

	}
	binds(){
		$(this.button).on('click', ()=>this.login());
	}
	login(){
		
	
		let user=new User(
			this.loginInput.val(),
			null,
			this.passwordInput.val()
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
		let unauthorizedScreen= $('.unauthorized-screen');
		unauthorizedScreen.css('display', 'none');
		let authorizedScreen=$('.autorized-screen');
		authorizedScreen.css('display', 'flex');
	
	}
	
}



