import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import BaseCard from './components/utilities/BaseCard.vue'
const app = createApp(App)

app.component('base-card', BaseCard)

app.use(router)

app.mount('#app');
