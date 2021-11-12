const assert = require('assert')

describe('APFM page', () => {

    before(() => {
        browser.emulateDevice('Nexus 5');
        browser.enablePerformanceAudits({
            networkThrottling: 'Good 3G',
            cpuThrottling: 4,
            cacheEnabled: false,
            formFactor: 'mobile'
        })
    })
    
    it('Website should load', () => {
        /**
         * this page load will take a bit longer as the DevTools service will
         * capture all metrics in the background
         */
        // browser.url('https://www.qa.aplaceformom.com/');
        // browser.url('https://www.qa.aplaceformom.com/')
        // $('[data-au-id="leadform-location-search-input"]').click();
        browser.url('https://www.qa.aplaceformom.com/')
        let metrics = browser.getMetrics();
        console.log(metrics);
        // expect(metrics.cumulativeLayoutShift).toBeAbove(0.0015)
        // assert.ok(metrics.cumulativeLayoutShift = 0.001);
        // assert.ok(metrics.largestContentfulPaint < 0.1866);
        // assert.ok(metrics.speedIndex < 2500) // check that speedIndex is below 1.5ms

        // let score = browser.getPerformanceScore() // get Lighthouse Performance score
        // console.log(score);
        // assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher

        // $('=Esperanto').click()

        // metrics = browser.getMetrics()
        // assert.ok(metrics.speedIndex < 1500)
        // score = browser.getPerformanceScore()
        // assert.ok(score >= .99)
    })

    after(() => {
        browser.disablePerformanceAudits()
    })

})