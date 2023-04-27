import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHouse, faPlus, faGear, faPen, faTrash, faXmark, faPeopleGroup, faFire, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import './assets/main.css'

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


createApp(App)
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
