import { Page } from '@playwright/test';

export class ProductPage {
	constructor(private page: Page) {}
	private addToCartButton = 'a.btn.btn-success.btn-lg';
	
	async addToCart() {
		await this.page.click(this.addToCartButton);
	}
	async acceptAlert() {
		this.page.once('dialog', async dialog => {
			await dialog.accept();
		});
	}
}
