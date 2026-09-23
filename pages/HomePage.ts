import { Page, expect} from '@playwright/test';

export class HomePage {
	constructor(private page: Page) {}
	
	async navigate() {
		await this.page.goto('https://www.demoblaze.com/');
		await expect(this.page.locator('.card-title').first()).toBeVisible();
	}
	async getAllProducts(): Promise<string[]> {
		//const count = await this.page.locator('.card-title').count();
		//console.log('Product Count = ', count);
		
		return await this.page.locator('.card-title').allTextContents();
	}
	async selectProduct(productName: string) {
		await this.page.locator(`a:has-text("${productName}")`).click();
	}
}
