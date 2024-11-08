<template>
  <div id="app" class="full-width">
    <!-- 공통 네비게이션 바 -->
    <nav class="full-width">
      <NavbarComponent />
    </nav>
    <!-- 라우트에 따라 다른 컴포넌트가 렌더링되는 부분 -->
    <router-view />
    <!-- 공통 푸터 -->
    <footer class="full-width">
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

<style>
/* 기존 스타일 유지 */
 body {
  background-color: #141414;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* 수평 스크롤 방지 */
}


</style>
