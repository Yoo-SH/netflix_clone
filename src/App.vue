<template>
  <div id="app" class="full-width">
    <!-- 공통 네비게이션 바 -->
    <nav class="full-width">
    </nav>
    <!-- 라우트에 따라 다른 컴포넌트가 렌더링되는 부분 -->
    <router-view />
    <!-- 공통 푸터, 특정 라우트에서만 렌더링 안 되도록 조건 추가 -->
    <footer class="full-width" v-if="!isPopularTableRoute">
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const route = useRoute();

    // 현재 라우트가 /popular/table인지 확인하는 계산 속성
    const isPopularTableRoute = computed(() => route.path === '/popular/table');

    return {
      isPopularTableRoute,
    };
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
