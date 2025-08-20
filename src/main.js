import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Vue3Toastify from 'vue3-toastify';
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'vue3-toastify/dist/index.css';
import router from './router.js'

const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000,
});

app.use(LoadingPlugin);
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')