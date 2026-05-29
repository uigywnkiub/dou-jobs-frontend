import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import { db } from './db.js'
import { sendTgMsg } from './bot.js'
import { getRandomTone } from './textTones.js'
dotenv.config()

const PARSE_URL = process.env.PARSE_URL

let browser

;(async () => {
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--incognito'],
      userDataDir: './userDataCache',
      executablePath: process.env.CHROME_PATH || undefined,
    })
    const page = await browser.newPage()
    await page.goto(PARSE_URL, { timeout: 0 })
    const element = await page.$('h1')
    const title = await element.evaluate((el) => el.textContent)
    const counter = parseInt(title.match(/\d+/)[0]) + 1

    const { counter: prevCounter } = await db.collection.findOneAndUpdate(
      { _id: db.objectId },
      { $setOnInsert: { counter } },
      {
        projection: { _id: 0, counter: 1 },
        upsert: true,
        returnOriginal: false,
        returnDocument: 'after',
      },
    )

    if (prevCounter === counter) {
      await browser.close()
      await db.client.close()
      return
    }

    const diffCounter = Math.abs(prevCounter - counter)
    const diffAspect = prevCounter < counter ? 'increased' : 'decreased'
    const isDiffPositive = prevCounter < counter

    let diffMsg = ''

    // const diffMsg = `<code>${
    //   isDiffPositive ? `${getRandomTone("good")}` : `${getRandomTone("bad")}`
    // }</code>\nJob openings have <b>${diffAspect}</b> by <b>${diffCounter}</b>\nThe total is <b>${counter}</b>\n\n${
    //   isDiffPositive
    //     ? `<i><a href="https://jobs.dou.ua/vacancies/?category=Front%20End&exp=1-3">Apply Now</a></i>`
    //     : ""
    // }`;

    if (isDiffPositive) {
      diffMsg = `${getRandomTone(
        'good',
      )}\nJob openings have <b>${diffAspect}</b> by <b>${diffCounter}</b>\nThe total is <b>${counter}</b>\n\n<i><a href="${PARSE_URL}">Apply Now</a></i>`
      sendTgMsg(diffMsg)
    }

    await db.collection.updateOne({ _id: db.objectId }, { $set: { counter } })
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    if (!browser || !db.client) process.exit(1)
    await browser.close()
    await db.client.close()
  }
})()
