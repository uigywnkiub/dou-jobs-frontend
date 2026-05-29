module.exports = {
  cacheDirectory: `${process.env.USERPROFILE || process.env.HOME}/.cache/puppeteer`,
  downloadHost: 'https://download.chromedriver.io',
  skipChromeDownload: false,
}
