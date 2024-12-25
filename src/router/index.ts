import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopularView from '../views/PopularView.vue';
import TableView from '../views/TableView.vue';
import WishlistView from '../views/WishlistView.vue';
import SearchView from '../views/SearchView.vue';
import SignView from '../views/SignView.vue';
import SignCongratulationsViewComponent from '../views/SingCongraturation.vue';

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
  {
    path: '/sign/congratulation',
    name: 'SignCongratulationsViewComponent',
    component: SignCongratulationsViewComponent
  }
];

const router = createRouter({
  history: createWebHistory(), // History 모드로 변경
  routes,
});

export default router;
