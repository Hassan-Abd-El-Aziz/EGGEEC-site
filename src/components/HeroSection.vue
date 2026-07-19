<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

function scrollTo(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative z-10 flex min-h-screen items-center">
    <div class="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 text-center sm:px-6">
      <div v-reveal class="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 rtl:flex-row-reverse">
        <span class="h-2 w-2 animate-pulse rounded-full bg-gold-400"></span>
        {{ t('hero.badge') }}
      </div>

      <h1 v-reveal class="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black 
       text-white sm:text-5xl md:text-6xl md:leading-snug">
        {{ t('hero.title') }}
      </h1>

      <p v-reveal class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
        {{ t('hero.subtitle') }}
      </p>

      <div v-reveal class="mt-9 flex flex-wrap items-center justify-center gap-4 rtl:flex-row-reverse">
        <button
          type="button"
          @click="scrollTo('#services')"
          class="rounded-full bg-gradient-to-l from-brand-500 to-brand-700 px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-brand-900/40 transition hover:brightness-110"
        >
          {{ t('hero.ctaPrimary') }}
        </button>
        <RouterLink
          to="/portfolio"
          class="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
        >
          {{ t('hero.ctaSecondary') }}
        </RouterLink>
      </div>

      <button
        type="button"
        @click="scrollTo('#about')"
        class="mt-16 inline-flex flex-col items-center gap-2 text-xs font-medium text-white/50 transition hover:text-white"
        :aria-label="t('hero.scroll')"
      >
        <span>{{ t('hero.scroll') }}</span>
        <span class="grid h-10 w-6 place-items-start rounded-full border border-white/25 p-1">
          <span class="h-2 w-1 animate-bounce rounded-full bg-gold-400"></span>
        </span>
      </button>
    </div>
  </section>
</template>
