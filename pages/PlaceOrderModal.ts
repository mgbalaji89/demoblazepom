import { Page, expect } from '@playwright/test';

export class PlaceOrderModal {

    constructor(private page: Page) {}

    async enterOrderDetails(
        name: string,
        country: string,
        city: string,
        card: string,
        month: string,
        year: string
    ) {

        await expect(
            this.page.locator('#orderModal')
        ).toBeVisible();

        await this.page.locator('#name').fill(name);

        await this.page.locator('#country').fill(country);

        await this.page.locator('#city').fill(city);

        await this.page.locator('#card').fill(card);

        await this.page.locator('#month').fill(month);

        await this.page.locator('#year').fill(year);
    }

    async purchase() {
        await this.page
            .locator('button[onclick="purchaseOrder()"]')
            .click();
    }

    async getSuccessMessage() {

        const messageHeader = this.page.locator(
            '.sweet-alert h2'
        );

        await expect(messageHeader).toBeVisible();

        return await messageHeader.textContent();
    }
}
