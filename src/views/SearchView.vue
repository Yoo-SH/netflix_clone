<template>
  <button @click="goToHomeView" class="toggle-view-button">Go to Home View</button>
  <div class="filter-section">
    <!-- 필터 섹션은 변경 없음 -->
    <label>
      Genre:
      <select v-model="selectedGenre">
        <option value="">All</option>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </label>

    <label>
      Rating:
      <select v-model="selectedRatingRange">
        <option value="">All</option>
        <option value="0-4">4 and below</option>
        <option value="4-5">4 - 5</option>
        <option value="5-6">5 - 6</option>
        <option value="6-7">6 - 7</option>
        <option value="7-8">7 - 8</option>
        <option value="8-9">8 - 9</option>
        <option value="9-10">9 - 10</option>
      </select>
    </label>

    <label>
      Sort By:
      <select v-model="sortBy">
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>
    </label>

    <button @click="resetFilters" class="reset-button">Reset Filters</button>
  </div>

  <!-- 그리드 뷰 -->
  <div class="grid-view">
    <div class="grid-container">
      <div v-for="movie in movies" :key="movie.id" class="grid-item">
        <div class="poster-image-wrapper">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" class="poster-image" />
          <div class="poster-title-overlay">
            <div class="poster-title">{{ movie.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 무한 스크롤을 위한 감시 요소 -->
    <div ref="infiniteScrollTarget" class="infinite-scroll-target"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';

const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
const BASE_URL = 'https://api.themoviedb.org/3';

export default defineComponent({
  name: 'SearchViewComponent',
  setup() {
    const movies = ref<any[]>([]);
    const genres = ref<any[]>([]);
    const selectedGenre = ref<string>('');
    const selectedRatingRange = ref<string>('');
    const sortBy = ref<string>('popularity');
    const isFetching = ref(false);
    const currentPage = ref(1);
    const router = useRouter();
    const infiniteScrollTarget = ref<HTMLElement | null>(null);

    const fetchMovies = async (page = 1) => {
      if (isFetching.value) return;
      isFetching.value = true;

      let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&page=${page}`;

      if (selectedGenre.value) {
        url += `&with_genres=${selectedGenre.value}`;
      }

      if (selectedRatingRange.value) {
        const [minRating, maxRating] = selectedRatingRange.value.split('-');
        url += `&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`;
      }

      url += `&sort_by=${sortBy.value}.desc`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        movies.value = [...movies.value, ...data.results];
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      } finally {
        isFetching.value = false;
      }
    };

    const fetchGenres = async () => {
      const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        genres.value = data.genres;
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    watch([selectedGenre, selectedRatingRange, sortBy], () => {
      movies.value = []; // 기존 데이터를 초기화
      currentPage.value = 1;
      fetchMovies(currentPage.value);
    });

    const resetFilters = () => {
      selectedGenre.value = '';
      selectedRatingRange.value = '';
      sortBy.value = 'popularity';
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isFetching.value) {
        currentPage.value++;
        fetchMovies(currentPage.value);
      }
    };

    onMounted(() => {
      fetchMovies();
      fetchGenres();

      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      });

      if (infiniteScrollTarget.value) {
        observer.observe(infiniteScrollTarget.value);
      }
    });

    return {
      movies,
      genres,
      selectedGenre,
      selectedRatingRange,
      sortBy,
      isFetching,
      resetFilters,
      infiniteScrollTarget,
    };
  },
});
</script>

<style scoped>
.filter-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
  margin-bottom: 20px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}

select, input {
  margin-top: 5px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

select:focus, input:focus {
  border-color: #007bff;
}

.reset-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #5a6268;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* 한 줄에 8개 */
  gap: 10px;
  margin: 20px 0;
}

.grid-item {
  position: relative;
  overflow: hidden;
}

.poster-image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.poster-image {
  width: 100%;
  display: block;
  border-radius: 5px;
}

.poster-title-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  font-size: 0.9em;
  border-radius: 0 0 5px 5px;
}

.infinite-scroll-target {
  height: 1px;
  background-color: transparent;
}
</style>
