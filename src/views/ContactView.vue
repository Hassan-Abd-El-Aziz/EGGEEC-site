<script setup>
import { useI18n } from 'vue-i18n'
import ContactSection from '@/components/ContactSection.vue'

const { t } = useI18n()
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 py-10">
      <div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('nav.contact') }}</span>
        <h1 v-reveal class="mt-3 text-4xl font-black text-white sm:text-5xl">{{ t('contact.title') }}</h1>
        <p v-reveal class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <ContactSection />
  </div>
</template>
