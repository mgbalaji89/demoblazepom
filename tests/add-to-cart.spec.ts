import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Add Product to Cart', async({ page }) => {
	const home = new HomePage(page);
	
	await home.navigate();
	
	await home.selectProduct('Samsung galaxy s6');
	
	const product = new ProductPage(page);
	
	await product.acceptAlert();
	
	await product.addToCart();
}); 
