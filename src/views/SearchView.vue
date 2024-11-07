<template>
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
        <option value="popularity.asc">Popularity (Ascending)</option>
        <option value="popularity.desc">Popularity (Descending)</option>
      </select>
    </label>

    <button @click="resetFilters" class="reset-button">Reset Filters</button>
  </div>

  <!-- 로딩 표시 -->
  <div v-if="isFetching" class="loading">Loading...</div>

  <!-- 그리드 뷰 -->
  <div class="grid-view">
    <div class="grid-container">
      <div v-for="movie in movies" :key="movie.id" class="grid-item poster-container" @click="toggleLocalStorage(movie)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(movie)}" />
        <p class="poster-title">{{ movie.title }}</p>
      </div>
    </div>
    <!-- 무한 스크롤을 위한 감시 요소 -->
    <div ref="infiniteScrollTarget" class="infinite-scroll-target"></div>
  </div>

  <!-- TOP 버튼 -->
  <button v-if="showTopButton" @click="scrollToTop" class="top-button">TOP</button>
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
    const showTopButton = ref(false);
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

      url += `&sort_by=${sortBy.value}`;

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

    const toggleLocalStorage = (movie: any) => {
      let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      const movieIndex = storedMovies.findIndex((storedMovie: any) => storedMovie.id === movie.id);

      if (movieIndex === -1) {
        // 아이템이 로컬 스토리지에 없으면 추가
        storedMovies.push({ id: movie.id, name: movie.title, image: `https://image.tmdb.org/t/p/w500${movie.poster_path}` });
      } else {
        // 아이템이 이미 로컬 스토리지에 있으면 제거
        storedMovies.splice(movieIndex, 1);
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedMovies));
      movies.value = [...movies.value]; // 반응성 트리거
    };

    const isItemInLocalStorage = (movie: any) => {
      let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
      return storedMovies.some((storedMovie: any) => storedMovie.id === movie.id);
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
      showTopButton.value = window.scrollY > 200;
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

      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
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
      toggleLocalStorage,
      isItemInLocalStorage,
      scrollToTop,
      showTopButton,
    };
  },
});
</script>

<style scoped>
.filter-section {
  margin-top: 51px;
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
  color: #c0392b;
}

select, input {
  margin-top: 5px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #e74c3c;
  background-color: #f8d7da;
  transition: border-color 0.3s ease;
}

select {
  appearance: none;
  cursor: pointer;
}

select:focus, input:focus {
  border-color: #c0392b;
  background-color: #fadbd8;
}

select option {
  padding: 10px;
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 16px;
  color: #c0392b;
}

select option:hover {
  background-color: #f5b7b1;
}

select:hover {
  border-color: #c0392b;
}

.reset-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e74c3c;
  color: white;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #c0392b;
}

.loading {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개 */
  gap: 20px;
  margin: 20px 0;
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
</style>
