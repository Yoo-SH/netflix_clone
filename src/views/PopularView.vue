<template>
  <NavbarComponent />
  <div id="popular">
    <div>
      <!-- 테이블 뷰로 전환하는 버튼 -->
      <button @click="goToTableView" class="toggle-view-button">
        Switch to Table View
      </button>
    </div>
    <!-- 데이터 로딩 중일 때 로딩 표시 -->
    <div v-if="isFetching && !isTableView" class="loading">Loading...</div>
    <!-- 페이지 상단으로 이동 버튼 -->
    <button v-if="!isTableView" @click="scrollToTop" class="top-button">TOP</button>
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
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import NavbarComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

const BASE_URL = 'https://api.themoviedb.org/3';

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    const popularItems = ref<any[]>([]);
    const currentPage = ref(1);
    const isFetching = ref(false);
    const showTopButton = ref(true);
    const router = useRouter();
    const infiniteScrollTarget = ref<HTMLElement | null>(null);


    const API_KEY = process.env.VUE_APP_TMDB_API_KEY

    const fetchPopularMovies = async (page = 1) => {
      if (isFetching.value) return;
      isFetching.value = true;

      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`;
      console.log(API_KEY)
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

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isFetching.value) {
        fetchPopularMovies(currentPage.value);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToTableView = () => {
      router.push('/popular/table');
    };

    const toggleLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      const itemIndex = storedItems.findIndex((storedItem: any) => storedItem.id === item.id);

      if (itemIndex === -1) {
        storedItems.push(item);
      } else {
        storedItems.splice(itemIndex, 1);
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedItems));
      popularItems.value = [...popularItems.value];
    };

    const isItemInLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      return storedItems.some((storedItem: any) => storedItem.id === item.id);
    };

    onMounted(() => {
      fetchPopularMovies();

      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });

      if (infiniteScrollTarget.value) {
        observer.observe(infiniteScrollTarget.value);
      }
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
/* 모바일 크기에 맞는 반응형 디자인 */
@media (max-width: 768px) {
  .poster-list {
    display: inline;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    
  }

  .poster-title{
    font-size: 1px;
  }

  .poster-container {
    margin: 0 auto;
    width: 100%;
  }

  .poster-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .top-button {
    padding: 8px 12px;
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  .poster-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
    padding: 5px;
  }

  .poster-image {
    margin-bottom: 10px;
  }

  .top-button {
    bottom: 100px;
  }

}

.loading {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  color: #000000;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
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
  z-index: 1000;
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
  transform: scale(1.05);
}

.poster-image {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
  border: 2px solid transparent;
}

.selected-poster {
  border-color: #e50914;
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

.infinite-scroll-target {
  height: 1px;
  background-color: transparent;
}
</style>
