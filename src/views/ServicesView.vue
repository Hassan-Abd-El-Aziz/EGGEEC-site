<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CtaSection from '@/components/CtaSection.vue'

const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('services.items'))
const details = computed(() => tm('servicesPage.features'))
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('nav.services') }}</span>
        <h1 v-reveal class="mt-3 text-4xl font-black text-white sm:text-5xl">{{ t('services.title') }}</h1>
        <p v-reveal class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{{ t('servicesPage.intro') }}</p>
      </div>
    </section>

    <section class="relative z-10 py-10">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, i) in items"
          :key="i"
          v-reveal
          :style="{ transitionDelay: (i % 3) * 90 + 'ms' }"
          class="glass rounded-3xl p-7"
        >
          <span class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-gold-400 shadow-lg shadow-brand-900/40">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 3v18M9 8h6M9 12h6M9 16h6"/></svg>
          </span>
          <h3 class="mt-5 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/70">{{ item.desc }}</p>
          <ul v-if="details[i]" class="mt-4 space-y-2 border-t border-white/10 pt-4">
            <li v-for="(f, j) in details[i]" :key="j" class="flex items-start gap-2 text-sm text-white/70 rtl:flex-row-reverse">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>{{ f }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
