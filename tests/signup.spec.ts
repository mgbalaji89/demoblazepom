import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';

test('User Signup', async({ page }) => {
	//Navigating to the demoblaze url 
	await page.goto('https://www.demoblaze.com/');
	
	//creating the instance for SignupPage
	const signupPage = new SignupPage(page);
	
	//setting the username 
	const username = `user${Date.now()}`;
	
	//Calling the Signup method from the created instance
	await signupPage.signup(username,'Test@123');
	
});
