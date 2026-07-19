<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('whyUs.items'))
const icons = [
  'M3 17l6-6 4 4 8-8M21 7v6h-6',
  'M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14l-6-4.6h7.6z',
  'M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  'M3 7h18M3 12h18M3 17h18M7 3v18',
  'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z'
]
</script>

<template>
  <section class="relative z-10 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('whyUs.title') }}</span>
        <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{{ t('whyUs.subtitle') }}</h2>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, i) in items"
          :key="i"
          v-reveal
          :style="{ transitionDelay: (i % 3) * 90 + 'ms' }"
          class="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40"
        >
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gold-400/15 text-gold-400">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path :d="icons[i % icons.length]" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="mt-5 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/70">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
