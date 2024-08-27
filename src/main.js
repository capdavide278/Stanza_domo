import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//add SVG Core
import { library } from '@fortawesome/fontawesome-svg-core'

//free icons Styles
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas,far,fab)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).component("fa",FontAwesomeIcon).mount('#app')
