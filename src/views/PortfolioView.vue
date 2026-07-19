<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, tm } = useI18n({ useScope: 'global' })
const router = useRouter()

const items = computed(() => tm('portfolio.items'))
const categories = ['all', 'residential', 'commercial', 'industrial']
const active = ref('all')

const filtered = computed(() =>
  active.value === 'all' ? items.value : items.value.filter((i) => i.cat === active.value)
)

function goContact() {
  router.push('/contact')
}
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 py-16">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">
          {{ t('nav.portfolio') }}
        </span>
        <h1 v-reveal class="mx-auto mt-3 max-w-3xl text-4xl font-black text-white sm:text-5xl">
          {{ t('portfolio.title') }}
        </h1>
        <p v-reveal class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>
    </section>

    <section class="relative z-10 pb-10">
      <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 rtl:flex-row-reverse">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          @click="active = cat"
          class="rounded-full border px-5 py-2 text-sm font-semibold transition"
          :class="
            active === cat
              ? 'border-gold-400 bg-gold-400 text-brand-950'
              : 'border-white/15 bg-white/5 text-white/75 hover:bg-white/10'
          "
        >
          {{ t('portfolio.categories.' + cat) }}
        </button>
      </div>
    </section>

    <section class="relative z-10 pb-20">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <article
          v-for="(item, i) in filtered"
          :key="item.title"
          data-aos="fade-up"
          :data-aos-delay="(i % 3) * 100"
          class="group glass overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-brand-400/40"
        >
          <div class="relative h-52 overflow-hidden bg-gradient-to-br from-brand-800 to-brand-950">
            <img :src="item.img" :alt="item.title" class="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            <span class="absolute end-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur">
              {{ t('portfolio.categories.' + item.cat) }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="relative z-10 pb-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <div v-reveal class="glass rounded-3xl p-10 text-center">
          <h2 class="text-2xl font-extrabold text-white sm:text-3xl">{{ t('portfolio.ctaTitle') }}</h2>
          <p class="mx-auto mt-3 max-w-xl text-white/70">{{ t('portfolio.ctaDesc') }}</p>
          <button
            type="button"
            @click="goContact"
            class="mt-6 rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-8 py-3 font-bold text-brand-950 transition hover:brightness-110"
          >
            {{ t('portfolio.ctaButton') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
