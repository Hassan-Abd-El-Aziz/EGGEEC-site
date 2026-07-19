<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('stats.items'))
const root = ref(null)
const counts = ref(items.value.map(() => 0))
let observer = null
let started = false

function animate() {
  if (started) return
  started = true
  const duration = 1600
  const start = performance.now()
  function tick(now) {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    counts.value = items.value.map((it) => Math.round(it.value * eased))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) animate()
      })
    },
    { threshold: 0.4 }
  )
  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section id="stats" class="relative z-10 py-20">
    <div ref="root" class="mx-auto max-w-7xl px-4 sm:px-6">
      <h2 v-reveal class="sr-only">{{ t('stats.title') }}</h2>
      <div class="glass grid grid-cols-2 gap-6 rounded-3xl p-8 sm:p-10 lg:grid-cols-4">
        <div v-for="(item, i) in items" :key="i" class="text-center" v-reveal :style="{ transitionDelay: i * 90 + 'ms' }">
          <div class="text-4xl font-black text-white sm:text-5xl">
            <span class="text-gradient">{{ counts[i] }}</span><span class="text-gold-400">{{ item.suffix }}</span>
          </div>
          <div class="mt-2 text-sm font-medium text-white/70">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
