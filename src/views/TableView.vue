<template>
  <button @click="goToPopularView" class="toggle-view-button">Switch to Popular View</button>
  <div class="grid-view">
    <div class="grid-container">
      <div v-for="item in paginatedItems" :key="item.id" class="grid-item" @click="toggleLocalStorage(item)">
        <div class="poster-image-wrapper">
          <img :src="item.image" :alt="item.name" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(item)}" v-if="item.image" />
          <div class="poster-title">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="['page-number', { active: page === currentPage }]">
        {{ page }}
      </span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

interface Item {
  id: number;
  name: string;
  image: string;
}

export default defineComponent({
  name: 'TableViewComponent',
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
  },
  setup(props) {
    const popularItems = ref<Item[]>([]);
    const currentPage = ref(1);
    const itemsPerPage = 16;
    const isFetching = ref(false);
    const router = useRouter();

    const totalPages = computed(() => Math.ceil(popularItems.value.length / itemsPerPage));

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return popularItems.value.slice(start, end);
    });

    // 페이지네이션에 표시될 페이지 번호 계산
    const visiblePages = computed(() => {
      const pages = []; // 페이지 번호 목록
      const maxVisiblePages = 8; // 최대 표시할 페이지 번호 개수
      const total = totalPages.value; // 전체 페이지 개수

      let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2)); // 시작 페이지 번호
      let endPage = startPage + maxVisiblePages - 1; // 끝 페이지 번호

      if (endPage > total) { // 끝 페이지 번호가 전체 페이지 개수를 초과하는 경우
        endPage = total; // 끝 페이지 번호를 전체 페이지 개수로 설정
        startPage = Math.max(1, endPage - maxVisiblePages + 1); // 시작 페이지 번호를 다시 계산
      }
      
      for (let i = startPage; i <= endPage; i++) { // 시작 페이지부터 끝 페이지까지 반복
        pages.push(i); // 페이지 번호 목록에 추가
      }

      return pages;
    });
    
    const fetchPopularMovies = async (initialLoad = false) => {
      if (isFetching.value) return;
      isFetching.value = true;

      const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
      const BASE_URL = 'https://api.themoviedb.org/3';
      try {
        if (initialLoad) {
          // 초기 8페이지까지의 데이터를 한 번에 가져옴
          for (let page = 1; page <= 8; page++) {
            const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`;
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
          }
        } else {
          // 추가 페이지 데이터를 가져옴
          const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${currentPage.value}`;
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
        }
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      } finally {
        isFetching.value = false;
      }
    };

    const goToPage = (page: number) => {
      if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
        fetchPopularMovies();
      }
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
        fetchPopularMovies();
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
        fetchPopularMovies();
      }
    };

    const goToPopularView = () => {
      router.push('/popular');
    };

    // 로컬 스토리지에 포스터 데이터를 저장하거나 삭제하는 함수
    const toggleLocalStorage = (item: Item) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      const itemIndex = storedItems.findIndex((storedItem: Item) => storedItem.id === item.id);

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
    const isItemInLocalStorage = (item: Item) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      return storedItems.some((storedItem: Item) => storedItem.id === item.id);
    };

    onMounted(() => {
      fetchPopularMovies(true); // 초기 로드 시 8페이지 데이터 가져오기
    });

    return {
      paginatedItems,
      currentPage,
      totalPages,
      visiblePages,
      goToPage,
      previousPage,
      nextPage,
      popularItems,
      goToPopularView,
      toggleLocalStorage,
      isItemInLocalStorage,
    };
  },
});
</script>

<style scoped>
.grid-view {
  margin-top: 50px;
  padding: 0;
  overflow: auto;
  background-color: #141414; /* 넷플릭스와 유사한 어두운 배경색으로 변경 */
}

.grid-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  padding: 0 50px;
}

.grid-item {
  transition: transform 0.3s;
}

.grid-item:hover {
  transform: scale(1.05);
}

.poster-image-wrapper {
  position: relative;
}

.poster-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
  font-size: 1em;
}

.poster-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border: 2px solid transparent;
}

.selected-poster {
  border-color: #e50914; /* 로컬 스토리지에 있는 경우 얇은 빨간 테두리 추가 */
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.page-number {
  padding: 10px;
  cursor: pointer;
  user-select: none;
  color: #ffffff; /* 페이지 번호 색상을 흰색으로 변경 */
  transition: background-color 0.3s;
}

.page-number:hover {
  background-color: #333333;
  border-radius: 5px;
}

.page-number.active {
  font-weight: bold;
  text-decoration: underline;
}

button {
  margin: 20px;
  padding: 10px;
  background-color: #f40612;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>