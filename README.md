# Lab8_Starter

## Author(s):
 - Long Tang
 - Rong Zheng

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
    - I will pick 1.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - I would not use a unit test. The feature of "message" will interact with others on an application level since it will write and 
send a message to another user. A unit test does not fit since it cannot test how these individual components interact with each other.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
    - Yes, I would use a unit test since the length belongs to a component that will not interact with others on an application level.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    - If the "headless" is set to true, the browser won't pop out, so it will run the tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
    - We can go to the settings page by clicking the setting button, so the code could look like:
```
    beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    await page.click('header > img');
    });
```
