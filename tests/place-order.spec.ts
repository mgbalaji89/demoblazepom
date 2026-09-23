import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { PlaceOrderModal } from '../pages/PlaceOrderModal';

test('Place an Order', async ({ page }) => {

    const home = new HomePage(page);

    await home.navigate();

    await home.selectProduct('Samsung galaxy s6');

    const product = new ProductPage(page);

    await product.addToCart();

    await product.acceptAlert();

    const cart = new CartPage(page);

    await cart.goToCart();

    await expect(
        page.locator('#tbodyid')
    ).toContainText('Samsung galaxy s6');

    await cart.placeOrderClick();

    const modal = new PlaceOrderModal(page);

    await modal.enterOrderDetails(
        'Balaji',
        'India',
        'Bangalore',
        '123456789',
        '12',
        '2017'
    );

    await modal.purchase();

    const message = await modal.getSuccessMessage();

    expect(message).toContain(
        'Thank you for your purchase!'
    );
});
