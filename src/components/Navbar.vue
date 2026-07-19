<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const menuOpen = ref(false)
const scrolled = ref(false)

const links = computed(() => [
  { key: 'home', label: t('nav.home'), path: '/' },
  { key: 'about', label: t('nav.about'), path: '/about' },
  { key: 'services', label: t('nav.services'), path: '/services' },
  { key: 'portfolio', label: t('nav.portfolio'), path: '/portfolio' },
  { key: 'contact', label: t('nav.contact'), path: '/contact' }
])

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function navigate(path) {
  router.push(path)
  if (route.path === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-3 rtl:flex-row-reverse">
         <span class="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-lg shadow-brand-900/40">
          <svg class="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="M12 3v18M9 8h6M9 12h6M9 16h6"></path></svg>
        </span>
        <span class="hidden text-center leading-tight sm:block">
          <span class="block text-sm font-extrabold text-white">مصر الخليج</span>
          <span class="block text-[11px] font-medium text-gold-400">للمصاعد والسلالم الكهربائية</span>
        </span>
      </RouterLink>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.key">
          <RouterLink
            :to="link.path"
            @click="navigate(link.path)"
            class="rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            :class="route.path === link.path ? 'text-gold-400' : 'text-white/80 hover:text-white'"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="flex items-center gap-3 rtl:flex-row-reverse">
        <LanguageSwitcher />
        <RouterLink
          to="/contact"
          class="hidden rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-5 py-2 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110 sm:inline-block"
        >
          {{ t('nav.cta') }}
        </RouterLink>

        <button
          type="button"
          @click="menuOpen = !menuOpen"
          class="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          :aria-expanded="menuOpen"
          aria-label="Menu"
        >
          <svg v-if="menuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
          <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="menu">
      <div v-if="menuOpen" class="glass mx-3 overflow-hidden rounded-2xl border border-white/10 lg:hidden">
        <ul class="flex flex-col gap-1 p-3">
          <li v-for="link in links" :key="link.key">
            <RouterLink
              :to="link.path"
              @click="navigate(link.path)"
              class="block w-full rounded-xl px-4 py-3 text-start text-base font-semibold transition hover:bg-white/10"
              :class="route.path === link.path ? 'text-gold-400' : 'text-white/90'"
            >
              {{ link.label }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="navigate('/contact')"
              class="mt-1 block w-full rounded-xl bg-gradient-to-l from-gold-400 to-gold-500 px-4 py-3 text-center text-base font-bold text-brand-950"
            >
              {{ t('nav.cta') }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
