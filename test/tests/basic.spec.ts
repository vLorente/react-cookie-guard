import { expect, test } from '@playwright/test';

test.describe("Basic functionality", () => {
    test("banner is rendered", async ({page}) => {
        expect(page.getByTestId('cookie-banner')).toBeDefined()
    })
    
})