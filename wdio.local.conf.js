const { config: common } = require('./wdio.conf')

exports.config = Object.assign(common, {
  specs: [
    './tests/resource.test.js',
    './tests/performance.test.js'
  ],

  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
    // to run chrome headless the following flags are required
    // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
    args: ['--headless', '--disable-gpu', '--incognito', '--disable-dev-shm-usage'],
    }
  }],

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['devtools'],
  maxInstances: 2,

  // logs
  chromeDriverLogs: common.outputDir
})
