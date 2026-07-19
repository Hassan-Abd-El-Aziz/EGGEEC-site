// Reveal-on-scroll directive: elements appear when scrolling DOWN and
// disappear when scrolling UP, following the direction of the page scroll.
const elements = new Set()
let lastY = 0
let ticking = false
let initialized = false

function evaluate() {
  const vh = window.innerHeight
  const y = window.scrollY
  const direction = y > lastY ? 'down' : 'up'
  lastY = y

  elements.forEach((el) => {
    if (!el.isConnected) {
      elements.delete(el)
      return
    }
    const rect = el.getBoundingClientRect()
    const inView = rect.top < vh * 0.92 && rect.bottom > 0

    if (direction === 'down') {
      if (inView) {
        el.classList.add('is-visible')
        el.classList.remove('is-hidden')
      } else {
        el.classList.add('is-hidden')
        el.classList.remove('is-visible')
      }
    } else {
      // scrolling up: hide elements that have moved above the viewport,
      // keep showing those still comfortably in view (incl. on first load)
      if (rect.bottom < vh * 0.4) {
        el.classList.remove('is-visible')
        el.classList.add('is-hidden')
      } else if (inView) {
        el.classList.add('is-visible')
        el.classList.remove('is-hidden')
      }
    }
  })
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      evaluate()
    })
  }
}

function ensureListeners() {
  if (initialized) return
  initialized = true
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  onScroll()
}

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    elements.add(el)
    ensureListeners()
    // initial state
    requestAnimationFrame(() => evaluate())
  },
  unmounted(el) {
    elements.delete(el)
  }
}
