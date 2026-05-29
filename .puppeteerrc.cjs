const path = require('path');

module.exports = {
  cacheDirectory: path.join(process.env.USERPROFILE || process.env.HOME, '.cache', 'puppeteer'),
  downloadHost: 'https://download.chromedriver.io',
  skipChromeDownload: false,
};
