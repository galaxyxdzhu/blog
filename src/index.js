import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

import 'normalize.css/normalize.css';
import './assets/styles/index.scss';
import routes from './router';

import './icons';

const router = new VueRouter(routes)

Vue.use(VueRouter);


new Vue({
    router,
    render: h => h(App),
}).$mount('#root');