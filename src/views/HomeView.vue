<template>
  <NavbarComponent />
  <div id="home">
    <!-- 데이터 로딩 중일 때 로딩 표시 -->
    <div v-if="isFetching" class="loading">Loading...</div> <!-- 로딩 중일 때 표시되는 텍스트 -->
    <!-- 각 API에서 가져온 영화 섹션 반복 출력 -->
    <div class="movie-section" v-for="(movies, index) in movieSections" :key="index"> <!-- 각 영화 섹션에 고유 키 설정 -->
      <h2 class="section-title">{{ movies.title }}</h2> <!-- 영화 섹션의 제목 출력 -->
      <div class="poster-list">
        <!-- PosterComponent 컴포넌트를 사용하여 각 영화 포스터 출력 -->
        <PosterComponent
          v-for="item in movies.data"
          :key="item.id" 
          :movie="item" 
          @toggle-movie-details="toggleMovieDetails" 
        />
      </div>
    </div>
    <FooterComponent />
  </div>

  <!-- 선택된 영화가 있을 경우 영화 상세 정보 표시 -->
  <PosterComponent
    v-if="selectedMovie" 
    :movie="selectedMovie"
    @close-movie-details="closeMovieDetails"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'; // Vue 컴포넌트와 필요한 함수들 import
import { useRouter } from 'vue-router'; // Vue Router import
import PosterComponent from '../components/Poster.vue'; // PosterComponent 컴포넌트 import
import NavbarComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';


// TMDb API 키 및 기본 URL 설정
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL

export default defineComponent({
  name: 'HomeViewComponent', // 컴포넌트 이름 설정
  components: {
    PosterComponent, // 사용할 컴포넌트 등록
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    const movieSections = ref<any[]>([]); // 영화 섹션 데이터 목록
    const isFetching = ref(false); // 데이터 로딩 상태 여부
    const showTopButton = ref(false); // 상단 이동 버튼 표시 여부
    const selectedMovie = ref<any | null>(null); // 선택된 영화 데이터
    const router = useRouter(); // Vue Router 사용

    // API 키 가져오는 함수
    const API_KEY = process.env.VUE_APP_TMDB_API_KEY || '';
    
    if (!API_KEY) {
      console.error('API key is missing!');
    }

    // 특정 엔드포인트에서 영화 데이터를 가져오는 함수
    const fetchMoviesFromAPI = async (endpoint: string, title: string) => {
      const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=ko-KR&page=1`; // API 요청 URL 생성
      try {
        const response = await fetch(url); // API 호출
        const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환
        const movies = data.results.slice(0, 5).map((item: any) => ({ // 영화 데이터를 필요한 형식으로 가공
          id: item.id, // 영화 ID
          name: item.title, // 영화 제목
          image: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // 포스터 이미지 URL
          description: item.overview, // 영화 설명
          rating: item.vote_average, // 영화 평점
          genre: item.genre_ids.join(', '), // 영화 장르 ID 목록을 문자열로 변환
        }));
        movieSections.value.push({ title, data: movies }); // 영화 섹션에 추가
      } catch (error) {
        console.error('Failed to fetch movies:', error); // 오류 발생 시 콘솔에 메시지 출력
  
      }
    };

    // 모든 영화 섹션 데이터를 가져오는 함수
    const fetchAllMovies = async () => {
      if (isFetching.value) return; // 이미 데이터를 로딩 중이면 함수 종료
      isFetching.value = true; // 데이터 로딩 상태 설정
      try {
        await Promise.all([
          fetchMoviesFromAPI('movie/popular', 'Popular Movies'), // 인기 영화 데이터 가져오기
          fetchMoviesFromAPI('movie/top_rated', 'Top Rated Movies'), // 높은 평점 영화 데이터 가져오기
          fetchMoviesFromAPI('movie/upcoming', 'Upcoming Movies'), // 개봉 예정 영화 데이터 가져오기
          fetchMoviesFromAPI('trending/movie/week', 'Trending This Week'), // 이번 주 인기 영화 데이터 가져오기
        ]);
      } catch (error) {
        console.error('Failed to fetch all movie sections:', error); // 오류 발생 시 콘솔에 메시지 출력
      } finally {
        isFetching.value = false; // 데이터 로딩 상태 해제
      }
    };

    // 스크롤 이벤트를 처리하는 함수
    const handleScroll = () => {
      showTopButton.value = window.scrollY > 200; // 스크롤 위치에 따라 TOP 버튼 표시 여부 설정
    };

    // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 화면 맨 위로 부드럽게 스크롤
    };

    // Wishlist View로 이동하는 함수
    const goToWishlistView = () => {
      router.push('/wishlist'); // 위시리스트 뷰로 라우팅
    };

    // 영화 포스터 클릭 시 상세 정보 표시 또는 숨기는 함수
    const toggleMovieDetails = (item: any) => {
      if (selectedMovie.value && selectedMovie.value.id === item.id) {
        selectedMovie.value = null; // 이미 선택된 영화인 경우 상세 정보 숨기기
      } else {
        selectedMovie.value = item; // 새로운 영화 선택 시 상세 정보 표시
      }
    };

    // 영화 상세 정보 모달 닫기 함수
    const closeMovieDetails = () => {
      selectedMovie.value = null; // 선택된 영화 정보 숨기기
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      fetchAllMovies(); // 모든 영화 섹션 데이터 가져오기
      window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가
    });

    // 컴포넌트가 언마운트될 때 호출되는 함수
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 제거
    });

    return {
      movieSections, // 영화 섹션 데이터 반환
      isFetching, // 데이터 로딩 상태 반환
      showTopButton, // 상단 이동 버튼 표시 여부 반환
      selectedMovie, // 선택된 영화 데이터 반환
      scrollToTop, // 상단 이동 함수 반환
      goToWishlistView, // 위시리스트 뷰 이동 함수 반환
      toggleMovieDetails, // 영화 상세 정보 토글 함수 반환
      closeMovieDetails, // 영화 상세 정보 닫기 함수 반환
    };
  },
});
</script>

<style scoped>

@media (max-width: 768px) {
  .poster-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개 아이템 */
    gap: 10px; /* 각 아이템 간격 */
    padding: 10px; /* 좌우 패딩 추가 */
  }

  .poster-container {
    margin: 0 auto; /* 가운데 정렬 */
    width: 100%; /* 컨테이너 너비 100% */
  }

  .poster-image {
    width: 100%; /* 이미지 너비 100% */
    height: auto; /* 높이는 비율에 맞게 자동 설정 */
    border-radius: 10px; /* 모서리 둥글게 */
  }

  .movie-details-modal {
    padding: 10px; /* 내부 여백 추가 */
  }

  .movie-details-content {
    max-width: 95%; /* 최대 너비 95% */
    font-size: 0.9em; /* 텍스트 크기 약간 줄임 */
  }

  .section-title {
    font-size: 1.2em; /* 섹션 제목 크기 줄임 */
    text-align: center; /* 텍스트 중앙 정렬 */
    padding: 10px 0; /* 위아래 패딩 추가 */
  }

  .loading {
    bottom: 10px; /* 로딩 표시 위치 조정 */
    font-size: 0.9em; /* 텍스트 크기 줄임 */
  }

  .top-button {
    padding: 8px 12px; /* 버튼 크기 줄임 */
    font-size: 0.8em; /* 텍스트 크기 줄임 */
  }
}

/* 작은 모바일 크기용 미디어 쿼리 */
@media (max-width: 480px) {
  .poster-list {
    grid-template-columns: 1fr; /* 한 줄에 1개 아이템 */
  }

  .poster-image {
    margin-bottom: 15px; /* 이미지 하단 간격 추가 */
  }

  .movie-details-content {
    font-size: 0.8em; /* 텍스트 크기 더 줄임 */
  }

  .section-title {
    font-size: 1em; /* 섹션 제목 크기 더 줄임 */
  }

  .top-button {
    bottom: 60px; /* 버튼 위치 조정 */
    right: 10px; /* 버튼 오른쪽 위치 조정 */
    font-size: 0.7em; /* 버튼 텍스트 크기 더 줄임 */
  }
}


/******** 기본 스타일 유지 ********/
.loading {
  position: fixed; /* 고정 위치 설정 */
  bottom: 20px; /* 하단에서 20px 위치 */
  left: 50%; /* 왼쪽에서 50% 위치 (가운데 정렬) */
  transform: translateX(-50%); /* X축 방향으로 -50% 이동 (가운데 정렬 보정) */
  background-color: rgba(0, 0, 0, 0.8); /* 배경색을 검정색으로 하고 투명도 적용 */
  color: #ffffff; /* 텍스트 색상 흰색 설정 */
  padding: 10px; /* 내부 여백 설정 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
}

.top-button {
  position: fixed; /* 고정 위치 설정 */
  bottom: 80px; /* 하단에서 80px 위치 */
  right: 20px; /* 오른쪽에서 20px 위치 */
  background-color: #e50914; /* 배경색 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  padding: 10px 15px; /* 내부 여백 설정 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
}

.top-button:hover {
  background-color: #f40612; /* 호버 시 배경색 변경 */
}

.toggle-view-button {
  margin: 20px; /* 바깥 여백 설정 */
  padding: 10px; /* 내부 여백 설정 */
  background-color: #f40612; /* 배경색 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.toggle-view-button:hover {
  background-color: #333333; /* 호버 시 배경색 변경 */
}

/******** 영화 포스터 스타일 ********/
.movie-section {
  margin-bottom: 50px; /* 섹션 간 하단 여백 설정 */
}

.section-title {
  color: #ffffff; /* 텍스트 색상 흰색 설정 */
  margin-bottom: 15px; /* 하단 여백 설정 */
  padding-left: 10px; /* 왼쪽 여백 설정 */
  font-size: 1.5em; /* 글꼴 크기 설정 */
}

.poster-list {
  display: grid; /* 그리드 레이아웃 사용 */
  grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개 아이템 */
  gap: 20px; /* 각 아이템 사이의 간격 설정 */
  padding-left: 10px; /* 왼쪽 여백 설정 */
  padding-right: 10px; /* 오른쪽 여백 설정 */
}

.poster-container {
  position: relative; /* 상대 위치 설정 */
  transition: transform 0.3s; /* 크기 변화 시 부드러운 트랜지션 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.poster-container:hover {
  transform: scale(1.1); /* 호버 시 크기 확대 */
}

.poster-image {
  width: 60%; /* 너비 설정 */
  border-radius: 10px; /* 모서리 둥글게 설정 */
  transition: transform 0.3s; /* 크기 변화 시 부드러운 트랜지션 설정 */
  border: 2px solid transparent; /* 기본 테두리는 투명 설정 */
}

.poster-title {
  color: #ffffff; /* 텍스트 색상 흰색 설정 */
  margin-top: 10px; /* 상단 여백 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  font-size: 1em; /* 글꼴 크기 설정 */
}

/******** 영화 상세 정보 모달 ********/
.movie-details-modal {
  position: fixed; /* 고정 위치 설정 */
  top: 0; /* 상단에서 0 위치 */
  left: 0; /* 왼쪽에서 0 위치 */
  width: 100%; /* 너비 100% 설정 */
  height: 100%; /* 높이 100% 설정 */
  background-color: rgba(0, 0, 0, 0.8); /* 배경색을 검정색으로 하고 투명도 적용 */
  display: flex; /* 플렉스 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  z-index: 2000; /* 다른 요소 위에 표시되도록 설정 */
}

.movie-details-content {
  background-color: #333; /* 배경색 설정 */
  padding: 20px; /* 내부 여백 설정 */
  border-radius: 10px; /* 모서리 둥글게 설정 */
  color: #fff; /* 텍스트 색상 흰색 설정 */
  max-width: 500px; /* 최대 너비 설정 */
  width: 90%; /* 너비 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
}

.details-poster-image {
  width: 50%; /* 너비 설정 */
  height: auto; /* 높이는 자동 설정 */
  border-radius: 10px; /* 모서리 둥글게 설정 */
  margin-bottom: 20px; /* 하단 여백 설정 */
}

.close-button {
  margin-top: 20px; /* 상단 여백 설정 */
  padding: 10px; /* 내부 여백 설정 */
  background-color: #e50914; /* 배경색 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.close-button:hover {
  background-color: #f40612; /* 호버 시 배경색 변경 */
}
</style>
