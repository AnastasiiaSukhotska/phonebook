

class RegisterForm{
	constructor(selector, userService){
		this.selector=selector;
		this.userService=userService;
		this.onregister=()=>{};
		let doc=$(document);
		doc.ready(()=>{
			this.init();
			this.binds();
		})

	}
	init(){
		this.container=$(this.selector);
		this.loginInput=$('#register_user_login');
		this.bornInput=$('#register_user_born');
		this.passwordInput=$('#register_user_password');
		this.button=$('.btn_register');

	}
	binds(){
		this.button.on('click', ()=>this.register())
	}
	register(){
		let user=new User(
			this.loginInput.val(),
			this.bornInput.val(),
			this.passwordInput.val()
			);
		this.userService.register(user).then(r=>{
			if(r.status=='error') this.registerError(r.error);
			else this.successRegister();
		})
		
	}

	registerError(text){
		alert(text);
	}
	successRegister(){
		this.clearForm();
		alert('You are registered!');
		this.onregister();
	}
	clearForm(){
		this.passwordInput.val('');
		this.loginInput.val('');
		this.bornInput.val('');
	}
	
}