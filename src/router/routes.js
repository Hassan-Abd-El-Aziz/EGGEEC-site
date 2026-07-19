import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { titleKey: 'meta.homeTitle', descKey: 'meta.homeDesc' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { titleKey: 'meta.aboutTitle', descKey: 'meta.aboutDesc' }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { titleKey: 'meta.servicesTitle', descKey: 'meta.servicesDesc' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { titleKey: 'meta.portfolioTitle', descKey: 'meta.portfolioDesc' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { titleKey: 'meta.contactTitle', descKey: 'meta.contactDesc' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]
