<template>
  <div id="home">
    <!-- 네비게이션 바 -->
    <div>
      <button @click="goToWishlistView" class="toggle-view-button">
        Go to Wishlist View
      </button>
    </div>
    <div v-if="isFetching" class="loading">Loading...</div>
    <button v-if="showTopButton" @click="scrollToTop" class="top-button">TOP</button>

    <!-- 각 API에서 가져온 영화 섹션 -->
    <div class="movie-section" v-for="(movies, index) in movieSections" :key="index">
      <h2 class="section-title">{{ movies.title }}</h2>
      <div class="poster-list">
        <div
          v-for="item in movies.data"
          :key="item.id"
          class="poster-container"
          @click="showMovieDetails(item)"
        >
          <img :src="item.image" alt="movie poster" class="poster-image" />
          <p class="poster-title">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

// TMDb API 키 및 기본 URL 설정
const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL

export default defineComponent({
  name: 'HomeViewComponent',
  setup() {
    const movieSections = ref<any[]>([]);
    const isFetching = ref(false);
    const showTopButton = ref(false);
    const router = useRouter();

    const fetchMoviesFromAPI = async (endpoint: string, title: string) => {
      const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=ko-KR&page=1`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results.slice(0, 10).map((item: any) => ({
          id: item.id,
          name: item.title,
          image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          description: item.overview,
          rating: item.vote_average,
          genre: item.genre_ids.join(', '),
        }));
        movieSections.value.push({ title, data: movies });
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    const fetchAllMovies = async () => {
      if (isFetching.value) return;
      isFetching.value = true;
      try {
        await Promise.all([
          fetchMoviesFromAPI('movie/popular', 'Popular Movies'),
          fetchMoviesFromAPI('movie/top_rated', 'Top Rated Movies'),
          fetchMoviesFromAPI('movie/upcoming', 'Upcoming Movies'),
          fetchMoviesFromAPI('trending/movie/week', 'Trending This Week'),
        ]);
      } catch (error) {
        console.error('Failed to fetch all movie sections:', error);
      } finally {
        isFetching.value = false;
      }
    };

    // 스크롤 이벤트를 처리하는 함수
    const handleScroll = () => {
      // 스크롤 위치에 따라 TOP 버튼 표시 여부 설정
      showTopButton.value = window.scrollY > 200;
    };

    // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Wishlist View로 이동하는 함수
    const goToWishlistView = () => {
      router.push('/wishlist');
    };

    // 영화 포스터 클릭 시 상세 정보 표시하는 함수
    const showMovieDetails = (item: any) => {
      alert(`Title: ${item.name}\nDescription: ${item.description}\nRating: ${item.rating}\nGenres: ${item.genre}`);
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      fetchAllMovies();
      window.addEventListener('scroll', handleScroll);
    });

    // 컴포넌트가 언마운트될 때 호출되는 함수
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      movieSections,
      isFetching,
      showTopButton,
      scrollToTop,
      goToWishlistView,
      showMovieDetails,
    };
  },
});
</script>

<style scoped>
/******** 기본 스타일 유지 ********/
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

/******** 영화 포스터 스타일 ********/
.movie-section {
  margin-bottom: 50px;
}

.section-title {
  color: #ffffff;
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 1.5em;
}

.poster-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
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

.poster-title {
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
  font-size: 1em;
}
</style>
