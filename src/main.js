import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './index.css';

import App from './App.vue';
import Home from './pages/Home.vue';
import Level from './pages/Level.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/level/:level', name: 'Level', component: Level, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
