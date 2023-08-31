const parallelConfig = {
  user: 'shivamsingh_5WHsDt',
  key: 'QW5MbjdhQCRQnndzo1Mx',
  hostname: 'hub.browserstack.com',
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11',
        browserVersion: '103.0'
      }
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        browserVersion: '102.0'
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
        browserVersion: '14.1'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack-build-1'
    }
  },
  maxInstances: 10
};
const { config: baseConfig } = require('./base.conf.js');
exports.config = { ...baseConfig, ...parallelConfig };
// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});
