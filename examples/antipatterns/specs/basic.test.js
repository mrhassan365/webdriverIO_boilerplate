const assert = require('assert');

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    // console.log(browser.sessionId);
    // console.log(browser.capabilities);
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});