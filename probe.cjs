const http = require('http')
function g(p, host) {
  return new Promise((r) => {
    const req = http.get({ host: host || '127.0.0.1', port: 5173, path: p }, (res) => {
      let d = ''
      res.on('data', (c) => (d += c))
      res.on('end', () => r({ p, host: host || '127.0.0.1', code: res.statusCode, len: d.length, head: d.slice(0, 140) }))
    })
    req.on('error', (e) => r({ p, host: host || '127.0.0.1', err: String(e) }))
  })
}
;(async () => {
  const a = await Promise.all([
    g('/', '127.0.0.1'),
    g('/', 'localhost'),
    g('/src/main.js', '127.0.0.1'),
    g('/@vite/client', '127.0.0.1')
  ])
  console.log(JSON.stringify(a, null, 1))
})()
