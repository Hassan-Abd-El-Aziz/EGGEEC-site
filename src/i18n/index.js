import { createI18n } from 'vue-i18n'
import ar from '../locales/ar'
import en from '../locales/en'

const STORAGE_KEY = 'mg-lang'

function getInitialLocale() {
  if (typeof window === 'undefined') return 'ar'
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('lang')
  if (fromQuery === 'ar' || fromQuery === 'en') return fromQuery
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ar' || stored === 'en') return stored
  const nav = window.navigator.language || 'ar'
  return nav.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'ar',
  messages: { ar, en }
})

export function persistLocale(locale) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }ئ
}

export function applyDocumentDirection(locale) {
  if (typeof document === 'undefined') return
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('lang', locale)
  document.documentElement.setAttribute('dir', dir)
}
