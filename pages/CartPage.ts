import { Page } from '@playwright/test';

export class CartPage {
	
	constructor(private page: Page) {}
	
	async goToCart() {
		await this.page.click('#cartur');
	}
	async placeOrderClick() {
		await this.page.click('button[data-target="#orderModal"]');	
		await this.page.locator('#orderModal.show').waitFor({state: 'visible'});
	}
	
	async getProductsInCart() {
		
		return await this.page.locator('#tbodyid tr').allTextContents();
	}
}
