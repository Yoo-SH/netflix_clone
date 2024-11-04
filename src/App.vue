<template>
  <div id="app">
    <!-- 공통 네비게이션 바 -->
    <nav>
      <NavbarComponent />
    </nav>
    <!-- 라우트에 따라 다른 컴포넌트가 렌더링되는 부분 -->
    <router-view />
    <!-- 공통 푸터 -->
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
/* 기존 스타일 유지 */
</style>
