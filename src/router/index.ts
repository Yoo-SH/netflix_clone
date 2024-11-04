import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopularView from '../views/PopularView.vue';
import SearchView from '../views/SearchView.vue';
import WishlistView from '../views/WishlistView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishlistView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
