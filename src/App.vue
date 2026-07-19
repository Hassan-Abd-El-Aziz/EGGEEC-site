<script setup>
import { computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import AOS from 'aos'

import SiteBackground from '@/components/SiteBackground.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const { t, locale } = useI18n()

const pageUrl = computed(() =>
  'https://misr-gulf-elevators.com' + (route.path === '/' ? '' : route.path)
)

useHead({
  title: computed(() => t(route.meta.titleKey || 'meta.homeTitle')),
  htmlAttrs: computed(() => ({ lang: locale.value, dir: locale.value === 'ar' ? 'rtl' : 'ltr' })),
  meta: [
    {
      name: 'description',
      content: computed(() => t(route.meta.descKey || 'meta.homeDesc'))
    },
    {
      property: 'og:title',
      content: computed(() => t(route.meta.titleKey || 'meta.homeTitle'))
    },
    {
      property: 'og:description',
      content: computed(() => t(route.meta.descKey || 'meta.homeDesc'))
    },
    {
      property: 'og:url',
      content: pageUrl
    },
    {
      property: 'og:locale',
      content: computed(() => (locale.value === 'ar' ? 'ar_EG' : 'en_US'))
    },
    {
      name: 'twitter:title',
      content: computed(() => t(route.meta.titleKey || 'meta.homeTitle'))
    },
    {
      name: 'twitter:description',
      content: computed(() => t(route.meta.descKey || 'meta.homeDesc'))
    }
  ],
  link: [{ rel: 'canonical', href: pageUrl }]
})

watch(
  () => locale.value,
  () => {
    document.documentElement.setAttribute('lang', locale.value)
    document.documentElement.setAttribute('dir', locale.value === 'ar' ? 'rtl' : 'ltr')
  }
)

watch(
  () => route.fullPath,
  () => {
    nextTick(() => AOS.refreshHard())
  }
)
</script>

<template>
  <SiteBackground />
  <div class="relative z-10 flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
    <Footer />
  </div>
</template>
