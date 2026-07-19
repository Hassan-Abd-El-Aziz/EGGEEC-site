<script setup>
import { useI18n } from 'vue-i18n'
import { persistLocale, applyDocumentDirection } from '@/i18n'

const { locale, t } = useI18n()

function toggle() {
  const next = locale.value === 'ar' ? 'en' : 'ar'
  locale.value = next
  persistLocale(next)
  applyDocumentDirection(next)
}
</script>

<template>
  <button
    type="button"
    @click="toggle"
    class="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-gold-400/60 hover:bg-white/10"
    :aria-label="t('langName')"
  >
    <svg class="h-4 w-4 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
    <span>{{ t('langName') }}</span>
  </button>
</template>
