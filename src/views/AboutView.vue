<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import CtaSection from '@/components/CtaSection.vue'

const { t, tm } = useI18n({ useScope: 'global' })
const router = useRouter()
function goContact() {
  router.push('/contact')
}
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('about.title') }}</span>
        <h1 v-reveal class="mt-3 text-4xl font-black text-white sm:text-5xl">{{ t('aboutPage.heroTitle') }}</h1>
        <p v-reveal class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{{ t('aboutPage.lead') }}</p>
      </div>
    </section>

    <section class="relative z-10 py-10">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <div v-reveal class="glass rounded-3xl p-8 sm:p-12">
          <p class="text-base leading-relaxed text-white/80">{{ t('aboutPage.story') }}</p>
        </div>
      </div>
    </section>

    <section class="relative z-10 py-10">
      <div class="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <div v-reveal class="glass rounded-3xl p-8">
          <h2 class="text-2xl font-extrabold text-white">{{ t('aboutPage.missionTitle') }}</h2>
          <p class="mt-4 leading-relaxed text-white/75">{{ t('aboutPage.mission') }}</p>
        </div>
        <div v-reveal class="glass rounded-3xl p-8">
          <h2 class="text-2xl font-extrabold text-white">{{ t('aboutPage.visionTitle') }}</h2>
          <p class="mt-4 leading-relaxed text-white/75">{{ t('aboutPage.vision') }}</p>
        </div>
      </div>
    </section>

    <section class="relative z-10 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 v-reveal class="mb-8 text-center text-3xl font-extrabold text-white">{{ t('aboutPage.valuesTitle') }}</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(v, i) in tm('aboutPage.values')"
            :key="i"
            v-reveal
            :style="{ transitionDelay: i * 90 + 'ms' }"
            class="glass rounded-3xl p-7"
          >
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gold-400/15 text-gold-400">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <h3 class="mt-4 text-lg font-bold text-white">{{ v.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ v.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative z-10 py-12">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 v-reveal class="mb-10 text-center text-3xl font-extrabold text-white">{{ t('aboutPage.timelineTitle') }}</h2>
        <ol class="relative border-s-2 border-white/10 ps-8 rtl:border-s-0 rtl:border-e-2 rtl:pe-8 rtl:ps-0">
          <li           v-for="(item, i) in tm('aboutPage.timeline')" :key="i" v-reveal class="relative mb-10">
            <span class="absolute -start-11 top-1 grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-[11px] font-black text-brand-950 rtl:-end-11 rtl:start-auto"></span>
            <div class="glass rounded-2xl p-6">
              <div class="text-sm font-black text-gold-400">{{ item.year }}</div>
              <p class="mt-1 text-white/80">{{ item.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
