<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const TOTAL_FRAMES = 300
const frameShell = ref(null)
const img = ref(null)
const currentIndex = ref(0)
let preloadCache = new Map()
let ticking = false
let rafId = null

const imageBase = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `src/assets/imgs/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
 
)

function preloadFrame(index) {
  if (preloadCache.has(index)) return preloadCache.get(index)
  const image = new Image()
  image.src = imageBase[index]
  preloadCache.set(index, image)
  return image
}

function updateFrame() {
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - window.innerHeight
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
  const targetIndex = Math.min(
    TOTAL_FRAMES - 1,
    Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
  )
  if (targetIndex !== currentIndex.value) {
    currentIndex.value = targetIndex
    const cached = preloadFrame(targetIndex)
    if (img.value) img.value.src = cached.src
  }
}

function onScroll() {
  if (!ticking) {
    rafId = window.requestAnimationFrame(() => {
      ticking = false
      updateFrame()
    })
    ticking = true
  }
}

onMounted(() => {
  preloadFrame(0)
  if (img.value) img.value.src = imageBase[0]
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateFrame)
  updateFrame()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateFrame)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div ref="frameShell" class="site-bg" aria-hidden="true">
    <img ref="img" class="site-bg__img object-cover" alt="" />
    <div class="site-bg__overlay"></div>
  </div>
</template>

<style scoped>
.site-bg {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  overflow: hidden;
  z-index: 0;
  background: #05080f;
  isolation: isolate;
}

.site-bg__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  opacity: 0.6;
  filter: saturate(1) contrast(1.05);
  user-select: none;
  pointer-events: none;
  position: relative;
  z-index: 1;
}

.site-bg__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    radial-gradient(120% 80% at 50% 0%, rgba(20, 38, 74, 0.25), transparent 60%),
    linear-gradient(180deg, rgba(5, 8, 15, 0.55) 0%, rgba(5, 8, 15, 0.4) 45%, rgba(5, 8, 15, 0.72) 100%);
}
</style>
