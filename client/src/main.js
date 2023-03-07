import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import BaseCard from './components/utilities/BaseCard.vue'
const app = createApp(App)

app.component('base-card', BaseCard)
app.component('font-awesome-icon',FontAwesomeIcon)

app.use(router)

app.mount('#app');
