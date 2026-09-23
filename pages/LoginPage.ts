import { Page }from '@Playwright/test';

export class LoginPage {
	constructor(private page: Page) {}
	
	private loginLink = '#login2';
	private userInput = '#loginusername';
	private passwordInput = '#loginpassword';
	private loginButton = 'button[onclick="logIn()"]';
	
	async openLoginModal() {
		await this.page.click(this.loginLink);
	}
	async login(username: string, password: string){
		await this.openLoginModal();
		
		await this.page.fill(this.userInput,username);
		await this.page.fill(this.passwordInput,password);
		await this.page.click(this.loginButton);
	}
}
