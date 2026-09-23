import { Page } from '@playwright/test';

export class SignupPage {
	
	constructor(private page: Page) {}
	
	private signupLink = '#signin2';	
	private usernameInput = '#sign-username';
	private passwordInput = '#sign-password';
	private signupButton = 'button[onclick="register()"]';
	
	async signup(username: string, password: string){
		
		await this.page.click(this.signupLink);
		
		await this.page.fill(this.usernameInput,username);
		await this.page.fill(this.passwordInput,password);
		await this.page.click(this.signupButton);
	}
	
}
