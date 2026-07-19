<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })
const items = computed(() => tm('faq.items'))
const open = ref(0)

function toggle(i) {
  open.value = open.value === i ? -1 : i
}
</script>

<template>
  <section class="relative z-10 py-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <div class="text-center">
        <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">{{ t('faq.title') }}</span>
        <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{{ t('faq.subtitle') }}</h2>
      </div>

      <div class="mt-10 space-y-4">
        <div
          v-for="(item, i) in items"
          :key="i"
          v-reveal
          class="glass overflow-hidden rounded-2xl"
        >
          <button
            type="button"
            @click="toggle(i)"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-start rtl:flex-row-reverse"
            :aria-expanded="open === i"
          >
            <span class="text-base font-bold text-white">{{ item.q }}</span>
            <svg
              class="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300"
              :class="open === i ? 'rotate-180' : ''"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            >
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div
            class="grid transition-all duration-300 ease-out"
            :class="open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 text-sm leading-relaxed text-white/70">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
