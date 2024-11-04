<template>
  <div id="app">
    <nav>
      <NavbarComponent />
    </nav>
    <div>
      <!-- 카테고리 리스트에 title과 items를 전달 -->
      <CategoryListComponent
        title="Popular Now"
        :items="popularItems"
      />
    </div>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';
import CategoryListComponent from './components/CategoryList.vue';

interface Item {
  id: number;
  name: string;
  image: string;
}

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    CategoryListComponent,
  },
  data() {
    return {
      popularItems: [
        { id: 1, name: 'Movie 1', image: require('@/assets/logo.png') },
        { id: 2, name: 'Movie 2', image: require('@/assets/logo.png') },
        { id: 3, name: 'Movie 3', image: require('@/assets/logo.png') },
        { id: 4, name: 'Movie 4', image: require('@/assets/logo.png') },
        { id: 5, name: 'Movie 5', image: require('@/assets/logo.png') },
        { id: 6, name: 'Movie 6', image: require('@/assets/logo.png') },
        { id: 7, name: 'Movie 7', image: require('@/assets/logo.png') },
        { id: 8, name: 'Movie 8', image: require('@/assets/logo.png') },
        { id: 9, name: 'Movie 9', image: require('@/assets/logo.png') },
        { id: 10, name: 'Movie 10', image: require('@/assets/logo.png') },
        { id: 11, name: 'Movie 11', image: require('@/assets/logo.png') },
        { id: 12, name: 'Movie 12', image: require('@/assets/logo.png') },
        { id: 13, name: 'Movie 13', image: require('@/assets/logo.png') },
        { id: 14, name: 'Movie 14', image: require('@/assets/logo.png') },
        { id: 1, name: 'Movie 1', image: require('@/assets/logo.png') },
        { id: 2, name: 'Movie 2', image: require('@/assets/logo.png') },
        { id: 3, name: 'Movie 3', image: require('@/assets/logo.png') },
        { id: 4, name: 'Movie 4', image: require('@/assets/logo.png') },
        { id: 5, name: 'Movie 5', image: require('@/assets/logo.png') },
        { id: 6, name: 'Movie 6', image: require('@/assets/logo.png') },
        { id: 7, name: 'Movie 7', image: require('@/assets/logo.png') },
        { id: 8, name: 'Movie 8', image: require('@/assets/logo.png') },
        { id: 9, name: 'Movie 9', image: require('@/assets/logo.png') },
        { id: 10, name: 'Movie 10', image: require('@/assets/logo.png') },
        { id: 11, name: 'Movie 11', image: require('@/assets/logo.png') },
        { id: 12, name: 'Movie 12', image: require('@/assets/logo.png') },
        { id: 13, name: 'Movie 13', image: require('@/assets/logo.png') },
        { id: 14, name: 'Movie 14', image: require('@/assets/logo.png') },
        { id: 1, name: 'Movie 1', image: require('@/assets/logo.png') },
        { id: 2, name: 'Movie 2', image: require('@/assets/logo.png') },
        { id: 3, name: 'Movie 3', image: require('@/assets/logo.png') },
        { id: 4, name: 'Movie 4', image: require('@/assets/logo.png') },
        { id: 5, name: 'Movie 5', image: require('@/assets/logo.png') },
        { id: 6, name: 'Movie 6', image: require('@/assets/logo.png') },
        { id: 7, name: 'Movie 7', image: require('@/assets/logo.png') },
        { id: 8, name: 'Movie 8', image: require('@/assets/logo.png') },
        { id: 9, name: 'Movie 9', image: require('@/assets/logo.png') },
        { id: 10, name: 'Movie 10', image: require('@/assets/logo.png') },
        { id: 11, name: 'Movie 11', image: require('@/assets/logo.png') },
        { id: 12, name: 'Movie 12', image: require('@/assets/logo.png') },
        { id: 13, name: 'Movie 13', image: require('@/assets/logo.png') },
        { id: 14, name: 'Movie 14', image: require('@/assets/logo.png') },
        { id: 1, name: 'Movie 1', image: require('@/assets/logo.png') },
        { id: 2, name: 'Movie 2', image: require('@/assets/logo.png') },
        { id: 3, name: 'Movie 3', image: require('@/assets/logo.png') },
        { id: 4, name: 'Movie 4', image: require('@/assets/logo.png') },
        { id: 5, name: 'Movie 5', image: require('@/assets/logo.png') },
        { id: 6, name: 'Movie 6', image: require('@/assets/logo.png') },
        { id: 7, name: 'Movie 7', image: require('@/assets/logo.png') },
        { id: 8, name: 'Movie 8', image: require('@/assets/logo.png') },
        { id: 9, name: 'Movie 9', image: require('@/assets/logo.png') },
        { id: 10, name: 'Movie 10', image: require('@/assets/logo.png') },
        { id: 11, name: 'Movie 11', image: require('@/assets/logo.png') },
        { id: 12, name: 'Movie 12', image: require('@/assets/logo.png') },
        { id: 13, name: 'Movie 13', image: require('@/assets/logo.png') },
        { id: 14, name: 'Movie 14', image: require('@/assets/logo.png') },
        
        // 더 많은 아이템 추가 가능
      ] as Item[]
    };
  },
});
</script>
