<template>
    <div id="popular">
      <div>
        <button @click="goToTableView" class="toggle-view-button">
          Switch to Table View
        </button>
        <component :is="currentView" :items="popularItems" />
      </div>
      <!-- 로딩 표시와 TOP 버튼 (무한 스크롤 모드일 때만 표시) -->
      <div v-if="isFetching && !isTableView" class="loading">Loading...</div>
      <button v-if="showTopButton && !isTableView" @click="scrollToTop" class="top-button">TOP</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import CategoryListComponent from '../components/CategoryList.vue';
  import { useRouter } from 'vue-router';
  
  // TMDb API 키 및 기본 URL 설정
  const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
  const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL
  
  export default defineComponent({
    name: 'App',
    components: {
      CategoryListComponent,
    },
    setup() {
      const popularItems = ref([]);
      const currentPage = ref(1);
      const isFetching = ref(false);
      const showTopButton = ref(false);
      const router = useRouter();
  
      const currentView = ref('CategoryListComponent');
  
      // 인기 영화를 가져오는 함수
      const fetchPopularMovies = async () => {
        if (isFetching.value) return;
        isFetching.value = true;
  
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${currentPage.value}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
  
          popularItems.value = [
            ...popularItems.value,
            ...data.results.map((item: any) => ({
              id: item.id,
              name: item.title,
              image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            })),
          ];
          currentPage.value += 1;
        } catch (error) {
          console.error('Failed to fetch popular movies:', error);
        } finally {
          isFetching.value = false;
        }
      };
  
      // 스크롤 이벤트를 처리하는 함수
      const handleScroll = () => {
        // 화면의 맨 아래에 도달했는지 확인
        const bottomOfWindow =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
        if (bottomOfWindow) {
          fetchPopularMovies();
        }
  
        // 스크롤 위치에 따라 TOP 버튼 표시 여부 설정
        showTopButton.value = window.scrollY > 200;
      };
  
      // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      // Table View로 이동하는 함수
      const goToTableView = () => {
        router.push('/popular/table');
      };
  
      // 컴포넌트가 마운트될 때 호출되는 함수
      onMounted(() => {
        // 초기 인기 영화 데이터를 가져옴
        fetchPopularMovies();
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
      });
  
      // 컴포넌트가 언마운트될 때 호출되는 함수
      onBeforeUnmount(() => {
        // 스크롤 이벤트 리스너 제거
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        popularItems,
        isFetching,
        showTopButton,
        scrollToTop,
        goToTableView,
        currentView,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 기존 스타일 유지 */
  .loading {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
  }
  
  .top-button {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: #e50914;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .top-button:hover {
    background-color: #f40612;
  }
  
  .toggle-view-button {
    margin: 20px;
    padding: 10px;
    background-color: #141414;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .toggle-view-button:hover {
    background-color: #333333;
  }
  </style>
  