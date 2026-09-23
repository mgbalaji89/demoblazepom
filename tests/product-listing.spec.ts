import { test,expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

test('Verify Product Listing',async({ page }) => { 
	const home = new HomePage(page);
	
	await home.navigate();
	
	const products = await home.getAllProducts();
	
	expect(products.length).toBeGreaterThan(0);

});
