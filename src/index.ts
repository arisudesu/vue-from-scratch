import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import App from './components/App.vue';
import Root from './components/Root.vue';
import Detail from './components/Detail.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    { path: '/', component: Root },
    { path: '/c/:name', component: Detail },
    { path: '/:path(.*)*', component: NotFound },
];
const history = VueRouter.createWebHistory();
const router = VueRouter.createRouter({ routes, history });

Vue.createApp(App).use(router).mount('#app');
