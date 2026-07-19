import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'
import { i18n, applyDocumentDirection } from './i18n'
import { reveal } from './directives/reveal'
import './assets/style.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.directive('reveal', reveal)

applyDocumentDirection(i18n.global.locale.value)

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: false,
  mirror: true,
  offset: 80,
  anchorPlacement: 'top-bottom'
})

app.mount('#app')

if (typeof window !== 'undefined') window.__i18n = i18n
