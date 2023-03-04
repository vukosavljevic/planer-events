import { createRouter, createWebHistory } from "vue-router";

import LandingPage from './components/pages/LandingPage.vue';
import NewEvent from './components/pages/NewEvent';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: LandingPage},
        { path: '/newevent', component: NewEvent}
    ]
})


export default router;