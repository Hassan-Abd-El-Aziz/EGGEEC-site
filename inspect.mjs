import puppeteer from 'puppeteer-core'
const EXEC = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const browser = await puppeteer.launch({ executablePath: EXEC, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 }).catch(() => {})
await new Promise((r) => setTimeout(r, 1500))
const info = await page.evaluate(() => {
  const g = window.__i18n.global
  const tmStats = g.tm('stats.items')
  return {
    tmStatsIsArray: Array.isArray(tmStats),
    tmStatsLen: Array.isArray(tmStats) ? tmStats.length : 'n/a',
    tmStats0: Array.isArray(tmStats) && tmStats[0] ? JSON.stringify(tmStats[0]) : 'n/a'
  }
})
console.log(JSON.stringify(info, null, 1))
await browser.close()
