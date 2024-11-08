import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopularView from '../views/PopularView.vue';
import TableView from '../views/TableView.vue';
import WishlistView from '../views/WishlistView.vue';
import SearchView from '../views/SearchView.vue';
import SignView from '../views/SignView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
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
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
