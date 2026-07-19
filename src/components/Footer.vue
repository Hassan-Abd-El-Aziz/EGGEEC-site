<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const links = computed(() => [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.about'), path: '/about' },
  { label: t('nav.services'), path: '/services' },
  { label: t('nav.portfolio'), path: '/portfolio' },
  { label: t('nav.contact'), path: '/contact' }
])

const services = computed(() => [
  { label: t('services.items.0.title'), path: '/services' },
  { label: t('services.items.1.title'), path: '/services' },
  { label: t('services.items.2.title'), path: '/services' },
  { label: t('services.items.3.title'), path: '/services' }
])

function go(path) {
  router.push(path)
}
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-white/10 bg-brand-950/80 backdrop-blur">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
      <div>
        <div class="mb-4 flex items-center gap-3 rtl:flex-row-reverse">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800">
            <svg class="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M12 3v18M9 8h6M9 12h6M9 16h6" />
            </svg>
          </span>
          <span class="text-start leading-tight">
            <span class="block text-sm font-extrabold text-white">مصر الخليج</span>
            <span class="block text-[11px] text-gold-400">للمصاعد والسلالم الكهربائية</span>
          </span>
        </div>
        <p class="max-w-xs text-sm leading-relaxed text-white/70">{{ t('footer.about') }}</p>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">
          {{ t('footer.quickLinks') }}
        </h3>
        <ul class="space-y-2 text-sm text-white/75">
          <li v-for="(l, i) in links" :key="i">
            <button type="button" class="transition hover:text-white" @click="go(l.path)">{{ l.label }}</button>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">
          {{ t('footer.servicesTitle') }}
        </h3>
        <ul class="space-y-2 text-sm text-white/75">
          <li v-for="(s, i) in services" :key="i">
            <button type="button" class="transition hover:text-white" @click="go(s.path)">{{ s.label }}</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 py-5 text-center text-xs text-white/55">
      © {{ year }} {{ t('meta.homeTitle') }} — {{ t('footer.rights') }}.
    </div>
  </footer>
</template>
