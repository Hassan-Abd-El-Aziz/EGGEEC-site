<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })
const steps = computed(() => tm('process.steps'))
</script>

<template>
  <section class="relative z-10 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('process.title') }}</span>
        <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{{ t('process.subtitle') }}</h2>
      </div>

      <div class="relative mt-14">
        <div class="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block"></div>
        <ol class="grid gap-8 md:grid-cols-5">
          <li
            v-for="(step, i) in steps"
            :key="i"
            v-reveal
            :style="{ transitionDelay: i * 90 + 'ms' }"
            class="relative text-center md:px-3"
          >
            <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-lg font-black text-gold-400 shadow-lg shadow-brand-900/40">
              {{ i + 1 }}
            </span>
            <h3 class="mt-4 text-lg font-bold text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
