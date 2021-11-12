const assert = require('assert');

describe('APFM page', () => {
  before(() => {
    browser.emulateDevice('Nexus 5');
    browser.enablePerformanceAudits({
      networkThrottling: 'Good 3G',
      cpuThrottling: 4,
      cacheEnabled: false,
      formFactor: 'mobile',
    });
  });

  it('Website should load', () => {
    browser.url('https://www.qa.aplaceformom.com/');

    // $('[data-au-id="leadform-location-search-input"]').click();
    const metrics = browser.getMetrics();

    console.log(metrics);
  });

  after(() => {
    browser.disablePerformanceAudits();
  });
});