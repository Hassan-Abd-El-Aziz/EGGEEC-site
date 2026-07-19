<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="relative z-10 py-20">
    <div class="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
      <div v-reveal class="glass rounded-3xl p-8 shadow-2xl shadow-black/40 sm:p-10">
        <div class="text-right">
          <span class="text-sm font-bold uppercase tracking-wider text-gold-400">
            {{ t('about.title') }}
          </span>
          <h2 class="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            {{ t('about.lead') }}
          </h2>
          <p class="mt-5 text-sm leading-relaxed text-white/75">
            {{ t('about.p1') }}
          </p>
        </div>
      </div>
      <div v-reveal class="glass h-full min-h-[250px] overflow-hidden rounded-3xl p-0 shadow-2xl shadow-black/40">
        <img src="../assets/img/eggeec.jpg" alt="صورة مصعد حديث" 
        class="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
    </div>
  </section>
</template>
