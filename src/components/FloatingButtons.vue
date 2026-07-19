<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Transition } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="fixed bottom-5 end-5 z-50 flex flex-col items-center gap-3">
    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/201009039268"
      target="_blank"
      rel="noopener noreferrer"
      class="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600"
      aria-label="تواصل معنا عبر واتساب"
    >
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.58 15.35 3.4 16.8L2.12 21.88L7.31 20.62C8.75 21.37 10.36 21.81 12.04 21.81C17.5 21.81 21.95 17.36 21.95 11.9C21.95 6.44 17.5 2 12.04 2M12.04 20.14C10.56 20.14 9.11 19.73 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.26 14.94 3.81 13.43 3.81 11.91C3.81 7.36 7.52 3.67 12.04 3.67C16.56 3.67 20.27 7.36 20.27 11.9C20.27 16.44 16.56 20.14 12.04 20.14M17.46 14.47C17.21 14.47 15.94 13.84 15.7 13.75C15.46 13.66 15.3 13.62 15.15 13.86C15 14.1 14.5 14.68 14.34 14.86C14.18 15.04 14.02 15.06 13.77 14.97C13.52 14.88 12.68 14.6 11.67 13.7C10.88 12.98 10.36 12.12 10.24 11.88C10.12 11.64 10.26 11.5 10.39 11.37C10.51 11.24 10.65 11.05 10.78 10.89C10.91 10.73 10.97 10.61 11.09 10.37C11.21 10.13 11.15 9.92 11.08 9.77C11 9.62 10.5 8.35 10.29 7.85C10.08 7.35 9.86 7.42 9.7 7.41C9.54 7.41 9.38 7.41 9.22 7.41C9.06 7.41 8.81 7.49 8.59 7.73C8.37 7.97 7.85 8.45 7.85 9.52C7.85 10.59 8.6 11.61 8.72 11.77C8.84 11.93 10.29 14.21 12.53 15.13C14.39 15.83 14.78 15.68 15.24 15.63C15.7 15.58 16.74 15.03 16.95 14.4C17.16 13.77 17.16 13.24 17.09 13.12C17.02 13 16.86 12.96 16.65 12.87L16.65 12.87C16.65 12.87 17.7 14.47 17.46 14.47Z" /></svg>
    </a>
    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="scrolled"
        @click="scrollToTop"
        class="grid h-12 w-12 place-items-center rounded-full bg-gold-400/90 text-brand-950 shadow-lg backdrop-blur-sm transition hover:bg-gold-400"
        aria-label="العودة إلى الأعلى"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>