<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('testimonials.items'))
</script>

<template>
  <section class="relative z-10 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('testimonials.title') }}</span>
        <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{{ t('testimonials.subtitle') }}</h2>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <figure
          v-for="(item, i) in items"
          :key="i"
          v-reveal
          :style="{ transitionDelay: i * 90 + 'ms' }"
          class="glass flex flex-col rounded-3xl p-7"
        >
          <div class="mb-4 text-gold-400">
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7H4v6h3l-2 4h3l2-4V7zm10 0h-3v6h3l-2 4h3l2-4V7z"/></svg>
          </div>
          <blockquote class="flex-1 text-sm leading-relaxed text-white/80">{{ item.text }}</blockquote>
          <figcaption class="mt-5 border-t border-white/10 pt-4">
            <div class="font-bold text-white">{{ item.name }}</div>
            <div class="text-xs text-gold-400">{{ item.role }}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
