<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
function back() {
  router.push('/')
}
</script>

<template>
  <section class="relative z-10 flex min-h-screen items-center">
    <div class="mx-auto max-w-xl px-4 text-center">
      <h1 class="text-6xl font-black text-gradient">404</h1>
      <h2 class="mt-4 text-2xl font-extrabold text-white">{{ t('notFound.title') }}</h2>
      <p class="mt-3 text-white/70">{{ t('notFound.desc') }}</p>
      <button
        type="button"
        @click="back"
        class="mt-7 rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-8 py-3 font-bold text-brand-950 transition hover:brightness-110"
      >
        {{ t('notFound.back') }}
      </button>
    </div>
  </section>
</template>
