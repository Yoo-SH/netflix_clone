<template>
  <div id="popular">
    <div>
      <button @click="goToTableView" class="toggle-view-button">
        Switch to Table View
      </button>
    </div>
    <div v-if="isFetching && !isTableView" class="loading">Loading...</div>
    <button v-if="showTopButton && !isTableView" @click="scrollToTop" class="top-button">TOP</button>
    <!-- 포스터 리스트 추가 -->
    <div class="poster-list">
      <div
        v-for="item in popularItems"
        :key="item.id"
        class="poster-container"
        @click="toggleLocalStorage(item)"
      >
        <img :src="item.image" alt="movie poster" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(item)}" />
        <p class="poster-title">{{ item.name }}</p>
      </div>
    </div>
    <!-- 무한 스크롤을 위한 감시 요소 -->
    <div ref="infiniteScrollTarget" class="infinite-scroll-target"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';

// TMDb API 기본 URL 설정
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL

export default defineComponent({
  name: 'App',
  setup() {
    const popularItems = ref<any[]>([]);
    const currentPage = ref(1);
    const isFetching = ref(false);
    const showTopButton = ref(false);
    const router = useRouter();
    const infiniteScrollTarget = ref<HTMLElement | null>(null);

    // API 키 가져오는 함수
    const getApiKeyFromLocalStorage = () => {
      const authUser = JSON.parse(localStorage.getItem('authUser') || '{}');
      return authUser.password || '';
    };

    const API_KEY = getApiKeyFromLocalStorage();

    const fetchPopularMovies = async (page = 1) => {
      if (isFetching.value) return;
      isFetching.value = true;

      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
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

    // 무한 스크롤 감시 함수
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isFetching.value) {
        fetchPopularMovies(currentPage.value);
      }
    };

    // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Table View로 이동하는 함수
    const goToTableView = () => {
      router.push('/popular/table');
    };

    // 로컬 스토리지에 포스터 데이터를 저장하거나 삭제하는 함수
    const toggleLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      const itemIndex = storedItems.findIndex((storedItem: any) => storedItem.id === item.id);

      if (itemIndex === -1) {
        // 아이템이 로컬 스토리지에 없으면 추가
        storedItems.push(item);
      } else {
        // 아이템이 이미 로컬 스토리지에 있으면 제거
        storedItems.splice(itemIndex, 1);
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedItems));
      console.log('Updated localStorage:', storedItems);
      // 배열을 다시 할당하여 반응성 트리거
      popularItems.value = [...popularItems.value];
    };

    // 로컬 스토리지에 아이템이 있는지 확인하는 함수
    const isItemInLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      return storedItems.some((storedItem: any) => storedItem.id === item.id);
    };

    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
      showTopButton.value = window.scrollY > 200;
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      // 초기 인기 영화 데이터를 가져옴
      fetchPopularMovies();

      // 무한 스크롤 감시자 설정
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      });

      if (infiniteScrollTarget.value) {
        observer.observe(infiniteScrollTarget.value);
      }

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
      toggleLocalStorage,
      isItemInLocalStorage,
      infiniteScrollTarget,
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
    background-color: rgba(255, 255, 255, 0.8);
    color: #000000;
    padding: 50px;
    border-radius: 5px;
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
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
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
  }

  .top-button:hover {
    background-color: #f40612;
  }

  .toggle-view-button {
    margin: 20px;
    padding: 10px;
    background-color: #f40612;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .toggle-view-button:hover {
    background-color: #333333;
  }

  /* 포스터 이미지와 제목을 포함한 컨테이너 */
  .poster-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }

  .poster-container {
    position: relative;
    transition: transform 0.3s;
    cursor: pointer;
  }

  .poster-container:hover {
    transform: scale(1.1);
  }

  .poster-image {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
    border: 2px solid transparent;
  }

  .selected-poster {
    border-color: #e50914; /* 로컬 스토리지에 있는 경우 얇은 빨간 테두리 추가 */
  }

  .poster-title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    transition: color 0.3s;
  }

  .poster-container:hover .poster-title {
    color: #ffffff; /* 글자 색상 변경 */
  }

  .infinite-scroll-target {
    height: 1px;
    background-color: transparent;
  }
</style>
