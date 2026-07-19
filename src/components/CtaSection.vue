<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
function go() {
  router.push('/contact')
}
</script>

<template>
  <section class="relative z-10 py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div v-reveal class="relative overflow-hidden rounded-3xl bg-gradient-to-l from-brand-700 to-brand-900 p-10 text-center shadow-2xl shadow-brand-950/50 sm:p-14">
        <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/20 blur-3xl"></div>
        <div class="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl"></div>
        <h2 class="relative text-3xl font-extrabold text-white sm:text-4xl">{{ t('cta.title') }}</h2>
        <p class="relative mx-auto mt-4 max-w-xl text-white/80">{{ t('cta.desc') }}</p>
        <button
          type="button"
          @click="go"
          class="relative mt-7 rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-9 py-3.5 font-bold text-brand-950 shadow-lg shadow-gold-500/30 transition hover:brightness-110"
        >
          {{ t('cta.button') }}
        </button>
      </div>
    </div>
  </section>
</template>
