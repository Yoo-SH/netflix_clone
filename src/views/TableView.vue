<template>
  <div class="grid-view">
    <div class="grid-container">
      <div v-for="item in paginatedItems" :key="item.id" class="grid-item">
        <div class="item-id">ID: {{ item.id }}</div>
        <div class="item-title">{{ item.name }}</div>
        <div class="poster-image-wrapper">
          <img :src="item.image" :alt="item.name" class="poster-image" v-if="item.image" />
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
      console.log(startPage);
      console.log(endPage);

      
      for (let i = startPage; i <= endPage; i++) { // 시작 페이지부터 끝 페이지까지 반복
        pages.push(i); // 페이지 번호 목록에 추가
      }

      if (endPage > total) {// 끝 페이지 번호가 전체 페이지 개수를 초과하는 경우
        endPage = total; // 끝 페이지 번호를 전체 페이지 개수로 설정
        startPage = Math.max(1, endPage - maxVisiblePages + 1); // 시작 페이지 번호를 다시 계산
      }


      return pages;
    });
    
    const fetchPopularMovies = async () => {
      if (isFetching.value) return;
      isFetching.value = true;

      const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
      const BASE_URL = 'https://api.themoviedb.org/3';
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

    onMounted(() => {
      fetchPopularMovies();
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
    };
  },
});
</script>

<style scoped>
.grid-view {
  margin: 20px;
  overflow: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.item-id {
  font-weight: bold;
  margin-bottom: 10px;
}

.item-title {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.poster-image-wrapper {
  background-color: #e50914;
  padding: 10px;
  border-radius: 8px;
}

.poster-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.page-number {
  padding: 10px;
  cursor: pointer;
  user-select: none;
}

.page-number.active {
  font-weight: bold;
  text-decoration: underline;
}

button {
  padding: 10px;
  background-color: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #555555;
  cursor: not-allowed;
}
</style>
