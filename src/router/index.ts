import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const Dashboard = () => import('../views/Dashboard.vue');
const AllProfile = () => import('../views/HomePage.vue');
const HomePage = () => import('../views/HomePage.vue');
const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/home',
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
