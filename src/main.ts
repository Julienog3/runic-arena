import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createI18n } from 'vue-i18n'

// import * as dotenv from 'dotenv'
// dotenv.config()

import { faHouse, faPlus, faGear, faPen, faTrash, faXmark, faPeopleGroup, faFire, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import fr from './assets/locales/fr.json'

// Font awesome adding icons
library.add(faHouse)
library.add(faPlus)
library.add(faGear)
library.add(faPen)
library.add(faTrash)
library.add(faXmark)
library.add(faPeopleGroup)
library.add(faFire)
library.add(faDragon)

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: { fr },
})

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
