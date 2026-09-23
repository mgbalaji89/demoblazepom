import { test,expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { testData } from '../utils/testData';

test('User Login', async({ page }) => {
	await page.goto('https://www.demoblaze.com/');
	
	const login = new LoginPage(page);
	
	await login.login(testData.username,testData.password);
	
	await expect(page.locator('#nameofuser')).toBeVisible({ timeout: 15000});
	await expect(page.locator('#nameofuser')).toContainText('Welcome');
});
