import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopularView from '../views/PopularView.vue';
import TableView from '../views/TableView.vue';
import WishlistView from '../views/WishlistView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularView,
  },
  {
    path: '/popular/table',
    name: 'table',
    component: TableView,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishlistView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
