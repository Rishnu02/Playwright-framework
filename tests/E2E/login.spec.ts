import {test,expect} from '@playwright/test';
import {chromium} from '@playwright/test';
import type {Page,Browser} from '@playwright/test';

 test.describe('Login functionality test', async() => {
        
    let browser:Browser;
    let page:Page;
        test.beforeAll('Login test', async () => {    
        browser = await chromium.launch({headless : false});
        page = await browser.newPage();    
        await page.goto('https://saucelabs.com/');
        const pageTitle  = await page.title();
        console.log(pageTitle); 
    });
      
    test('Request a Demo fuunctionality', async() => {        
        await page.getByText('Request a demo').click();
    });

     test('Request a Demo fuunctionality Request Demo', async() => {        
        await page.getByText('Request a demo').click();
    });

    test('Book a Demo here functionality', async() =>{
        await page.getByText('Request a demo').click();
        const emailID = page.locator("#Email");
        const companyName = page.locator("#Company");

        await emailID.fill("rishnuk55@gmail.com");
        await page.locator("#FirstName").fill("Rishnu");
        await page.locator("#LastName").fill("Kaushik");
        await companyName.fill("Global Payments");
        await page.locator("#Phone").fill("9978765437");
        await page.locator("#Country").selectOption("India");
        await page.locator("#Solution_Interest__c").selectOption("Visual Testing");

        const comment  =  page.locator("#Sales_Contact_Comments__c").scrollIntoViewIfNeeded();
        await page.locator("#Sales_Contact_Comments__c").fill("Automation testing");
        await page.mouse.wheel(0, 500);
        await page.locator("#LblmktoCheckbox_47709_0").click();
    });

});

