<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t, tm } = useI18n({ useScope: 'global' })
const router = useRouter()
const items = computed(() => tm('portfolio.previewItems'))
function go() {
  router.push('/portfolio')
}
</script>

<template>
  <section class="relative z-10 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="glass overflow-hidden rounded-3xl p-8 sm:p-12">
        <div class="text-center">
          <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('portfolio.previewTitle') }}</span>
          <h2 v-reveal class="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white">{{ t('portfolio.previewSubtitle') }}</h2>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(item, i) in items"
            :key="i"
            v-reveal
            :style="{ transitionDelay: i * 100 + 'ms' }"
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40"
          >
            <div class="absolute -end-10 -top-10 h-28 w-28 rounded-full bg-gold-400/15 blur-2xl"></div>
            <div class="relative">
              <span class="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold-400">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4h6v4M9 9h6M9 13h6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <h3 class="mt-5 text-xl font-bold text-white">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-white/70">{{ item.desc }}</p>
            </div>
          </article>
        </div>

        <div class="mt-10 flex justify-center">
          <button
            type="button"
            @click="go"
            class="rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-8 py-3 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
          >
            {{ t('portfolio.previewButton') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
