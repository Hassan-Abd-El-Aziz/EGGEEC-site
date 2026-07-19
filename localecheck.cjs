const ar = require('./src/locales/ar.js').default
const en = require('./src/locales/en.js').default
console.log('ar.stats.items isArray:', Array.isArray(ar.stats.items), 'len:', ar.stats.items && ar.stats.items.length)
console.log('en.stats present:', !!en.stats, '| en.stats.items isArray:', Array.isArray(en.stats && en.stats.items), 'len:', en.stats && en.stats.items ? en.stats.items.length : 'MISSING')
console.log('en keys sample:', Object.keys(en).slice(0, 5))
