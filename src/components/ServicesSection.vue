<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('services.items'))
</script>

<template>
  <section id="services" class="relative z-10 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">
          {{ t('nav.services') }}
        </span>
        <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          {{ t('services.title') }}
        </h2>
        <p v-reveal class="mt-4 text-base leading-relaxed text-white/70">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, i) in items"
          :key="i"
          v-reveal
          :style="{ transitionDelay: (i % 3) * 90 + 'ms' }"
          class="group glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40"
        >
          <span class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-gold-400 shadow-lg shadow-brand-900/40">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M12 3v18M9 8h6M9 12h6M9 16h6" />
            </svg>
          </span>
          <h3 class="mt-5 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/70">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
