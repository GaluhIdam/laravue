import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
    require('bootstrap');
} catch (e) {}

import Vue from 'vue'
import router from './router'

Vue.component('navigasi', require('./components/Navigasi.vue').default);

const app = new Vue({
    el: '#app',
    router,
});
