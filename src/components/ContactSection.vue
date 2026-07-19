<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const form = ref({ name: '', phone: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  // No backend in this static build; acknowledge locally.
  sent.value = true
  setTimeout(() => {
    form.value = { name: '', phone: '', email: '', message: '' }
  }, 400)
  setTimeout(() => (sent.value = false), 4000)
}
</script>

<template>
  <section id="contact" class="relative z-10 pt-24 pb-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <span v-reveal class="text-sm font-bold uppercase tracking-wider text-gold-400">
            {{ t('nav.contact') }}
          </span>
          <h2 v-reveal class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            {{ t('contact.title') }}
          </h2>
          <p v-reveal class="mt-4 max-w-md text-base leading-relaxed text-white/70">
            {{ t('contact.subtitle') }}
          </p>

          <ul class="mt-8 space-y-4">
            <li v-reveal class="flex items-center gap-4 rtl:flex-row-reverse">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              </span>
              <span class="text-white/80">{{ t('contact.address') }}</span>
            </li>
            <li v-reveal class="flex items-center gap-4 rtl:flex-row-reverse">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
              </span>
              <span style="direction: ltr;" class="text-white/80 ">+20 100 903 9268</span>
            </li>
            <li v-reveal class="flex items-center gap-4 rtl:flex-row-reverse">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-400">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.58 15.35 3.4 16.8L2.12 21.88L7.31 20.62C8.75 21.37 10.36 21.81 12.04 21.81C17.5 21.81 21.95 17.36 21.95 11.9C21.95 6.44 17.5 2 12.04 2M12.04 20.14C10.56 20.14 9.11 19.73 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.26 14.94 3.81 13.43 3.81 11.91C3.81 7.36 7.52 3.67 12.04 3.67C16.56 3.67 20.27 7.36 20.27 11.9C20.27 16.44 16.56 20.14 12.04 20.14M17.46 14.47C17.21 14.47 15.94 13.84 15.7 13.75C15.46 13.66 15.3 13.62 15.15 13.86C15 14.1 14.5 14.68 14.34 14.86C14.18 15.04 14.02 15.06 13.77 14.97C13.52 14.88 12.68 14.6 11.67 13.7C10.88 12.98 10.36 12.12 10.24 11.88C10.12 11.64 10.26 11.5 10.39 11.37C10.51 11.24 10.65 11.05 10.78 10.89C10.91 10.73 10.97 10.61 11.09 10.37C11.21 10.13 11.15 9.92 11.08 9.77C11 9.62 10.5 8.35 10.29 7.85C10.08 7.35 9.86 7.42 9.7 7.41C9.54 7.41 9.38 7.41 9.22 7.41C9.06 7.41 8.81 7.49 8.59 7.73C8.37 7.97 7.85 8.45 7.85 9.52C7.85 10.59 8.6 11.61 8.72 11.77C8.84 11.93 10.29 14.21 12.53 15.13C14.39 15.83 14.78 15.68 15.24 15.63C15.7 15.58 16.74 15.03 16.95 14.4C17.16 13.77 17.16 13.24 17.09 13.12C17.02 13 16.86 12.96 16.65 12.87L16.65 12.87C16.65 12.87 17.7 14.47 17.46 14.47Z" /></svg>
              </span>
              <a href="https://wa.me/201009039268"
               target="_blank" rel="noopener noreferrer" 
               class="text-white/80 transition hover:text-white">تواصل عبر واتساب</a>
            </li>
            <li v-reveal class="flex items-center gap-4 rtl:flex-row-reverse">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              </span>
              <span class="text-white/80">info@misr-gulf-elevators.com</span>
            </li>
            <li v-reveal class="flex items-center gap-4 rtl:flex-row-reverse">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </span>
              <span class="text-white/80">{{ t('contact.hours') }}</span>
            </li>
          </ul>
        </div>

        <form v-reveal @submit.prevent="submit" class="glass rounded-3xl p-7 sm:p-8">
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-white/80">{{ t('contact.name') }}</label>
              <input v-model="form.name" required type="text" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold-400/60" />
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-medium text-white/80">{{ t('contact.phone') }}</label>
              <input v-model="form.phone" required type="tel" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold-400/60" />
            </div>
          </div>
          <div class="mt-4">
            <label class="mb-1.5 block text-sm font-medium text-white/80">{{ t('contact.email') }}</label>
            <input v-model="form.email" required type="email" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold-400/60" />
          </div>
          <div class="mt-4">
            <label class="mb-1.5 block text-sm font-medium text-white/80">{{ t('contact.message') }}</label>
            <textarea v-model="form.message" rows="4" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold-400/60"></textarea>
          </div>
          <button
            type="submit"
            class="mt-5 w-full rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-6 py-3.5 text-base font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
          >
            {{ t('contact.send') }}
          </button>
          <p v-if="sent" class="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm font-medium text-emerald-300">
            {{ t('contact.sent') }}
          </p>
        </form>
      </div>
    </div>

    <div v-reveal class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <div class="glass overflow-hidden rounded-3xl p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14704317.79846123!2d43.49339131028555!3d25.872066268507776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815160f976983%3A0x720c1d2c36e17514!2sEGGEEC!5e0!3m2!1sar!2seg!4v1784163276460!5m2!1sar!2seg"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-2xl"
        ></iframe>
      </div>
      <a href="https://maps.app.goo.gl/QQouArVM7oTceCGCA" target="_blank" rel="noopener noreferrer" class="mt-6 block w-full rounded-full bg-gradient-to-l from-brand-500 to-brand-700 py-4 text-center text-base font-bold text-white shadow-lg shadow-brand-900/30 transition hover:brightness-110">الحصول على الاتجاهات</a>
    </div>
  </section>
</template>
