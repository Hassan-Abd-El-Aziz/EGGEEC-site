import puppeteer from 'puppeteer-core'

const EXEC = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const URLS = ['http://localhost:5173/', 'http://localhost:5173/about']

const browser = await puppeteer.launch({
  executablePath: EXEC,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
})

for (const url of URLS) {
  const page = await browser.newPage()
  const errors = []
  const consoleErrs = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrs.push(m.text())
  })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 }).catch((e) => errors.push('GOTO: ' + e))
  await new Promise((r) => setTimeout(r, 1500))
  const info = await page.evaluate(() => {
    const app = document.querySelector('#app')
    const bgImg = document.querySelector('.site-bg__img')
    return {
      appLen: app ? app.innerHTML.length : -1,
      appText: app ? app.innerText.slice(0, 200) : '',
      bgImgSrc: bgImg ? bgImg.getAttribute('src') : null,
      bgImgComplete: bgImg ? bgImg.complete : null,
      bgImgNaturalW: bgImg ? bgImg.naturalWidth : null,
      hasHero: !!document.querySelector('#home')
    }
  })
  console.log('URL:', url)
  console.log('  appLen:', info.appLen, '| hasHero:', info.hasHero)
  console.log('  bgImgSrc:', info.bgImgSrc, '| complete:', info.bgImgComplete, '| naturalW:', info.bgImgNaturalW)
  console.log('  appText:', JSON.stringify(info.appText))
  console.log('  pageerrors:', errors.length ? errors : 'none')
  console.log('  consoleErrors:', consoleErrs.length ? consoleErrs.slice(0, 5) : 'none')
  await page.close()
}

await browser.close()
