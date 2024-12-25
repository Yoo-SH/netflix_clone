<template>
  <NavbarComponent /> <!-- 네비게이션 바 컴포넌트 -->
  <div class="search-filter-container">
    <!-- 검색창과 버튼 섹션 -->
    <div class="search-container">
      <!-- 사용자가 영화 제목을 검색할 수 있는 입력 필드 -->
      <input type="text" v-model="searchQuery" placeholder="Search movies..." class="search-input" /> <!-- 검색어 입력 필드 -->
      <!-- 검색 버튼 -->
      <button @click="searchMovies" class="search-button">Search</button> <!-- 검색 버튼 클릭 시 영화 검색 -->
    </div>

    <!-- 필터 섹션 -->
    <div class="filter-section">
      <!-- 장르 필터 -->
      <label>
        Genre:
        <select v-model="selectedGenre"> <!-- 장르 선택 드롭다운 -->
          <option value="">All</option> <!-- 모든 장르 옵션 -->
          <!-- 사용 가능한 장르 목록을 동적으로 생성 -->
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.name }} <!-- 각 장르 이름 표시 -->
          </option>
        </select>
      </label>

      <!-- 평점 필터 -->
      <label>
        Rating:
        <select v-model="selectedRatingRange"> <!-- 평점 범위 선택 드롭다운 -->
          <option value="">All</option> <!-- 모든 평점 옵션 -->
          <!-- 평점 범위 필터 옵션 -->
          <option value="0-4">4 and below</option> <!-- 평점 4 이하 -->
          <option value="4-5">4 - 5</option> <!-- 평점 4에서 5 사이 -->
          <option value="5-6">5 - 6</option> <!-- 평점 5에서 6 사이 -->
          <option value="6-7">6 - 7</option> <!-- 평점 6에서 7 사이 -->
          <option value="7-8">7 - 8</option> <!-- 평점 7에서 8 사이 -->
          <option value="8-9">8 - 9</option> <!-- 평점 8에서 9 사이 -->
          <option value="9-10">9 - 10</option> <!-- 평점 9에서 10 사이 -->
        </select>
      </label>

      <!-- 정렬 옵션 필터 -->
      <label>
        Sort By:
        <select v-model="sortBy"> <!-- 정렬 기준 선택 드롭다운 -->
          <option value="popularity.asc">Popularity (Ascending)</option> <!-- 인기도 오름차순 -->
          <option value="popularity.desc">Popularity (Descending)</option> <!-- 인기도 내림차순 -->
        </select>
      </label>

      <!-- 필터 초기화 버튼 -->
      <button @click="resetFilters" class="reset-button">Reset Filters</button> <!-- 모든 필터 초기화 버튼 -->
    </div>
  </div>

  <!-- 로딩 표시 (영화 데이터가 로딩 중일 때 표시됨) -->
  <div v-if="isFetching" class="loading">Loading...</div> <!-- 데이터 로딩 중일 때 로딩 표시 -->

  <!-- 영화 목록 그리드 뷰 -->
  <div class="grid-view">
    <div class="grid-container">
      <!-- 각 영화 포스터 및 제목을 표시 -->
      <div v-for="movie in movies" :key="movie.id" class="grid-item poster-container" @click="toggleLocalStorage(movie)"> <!-- 영화 아이템 클릭 시 로컬 스토리지 추가/제거 -->
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(movie)}" /> <!-- 영화 포스터 이미지 -->
        <p class="poster-title">{{ movie.title }}</p> <!-- 영화 제목 표시 -->
      </div>
    </div>
    <!-- 무한 스크롤을 위한 감시 요소 -->
    <div ref="infiniteScrollTarget" class="infinite-scroll-target"></div> <!-- 무한 스크롤을 위한 타겟 요소 -->
  </div>

  <!-- 페이지 상단으로 이동 버튼 -->
  <button v-if="showTopButton" @click="scrollToTop" class="top-button">TOP</button> <!-- 페이지 상단으로 이동 버튼 -->
  <FooterComponent /> <!-- 푸터 컴포넌트 -->
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import NavbarComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

const BASE_URL = 'https://api.themoviedb.org/3';

export default defineComponent({
  name: 'SearchViewComponent',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    // 상태 변수들 정의
    const movies = ref<any[]>([]); // 영화 목록 데이터
    const genres = ref<any[]>([]); // 장르 목록 데이터
    const selectedGenre = ref<string>(''); // 선택된 장르
    const selectedRatingRange = ref<string>(''); // 선택된 평점 범위
    const sortBy = ref<string>('popularity'); // 정렬 기준
    const isFetching = ref(false); // 데이터를 로딩 중인지 여부
    const currentPage = ref(1); // 현재 페이지 번호
    const showTopButton = ref(false); // 상단 이동 버튼 표시 여부
    const searchQuery = ref<string>(''); // 검색어
    const infiniteScrollTarget = ref<HTMLElement | null>(null); // 무한 스크롤 감시 요소


    // 영화 목록을 가져오는 함수
    const fetchMovies = async (page = 1) => {
      if (isFetching.value) return; // 이미 데이터를 로딩 중인 경우 함수 종료
      isFetching.value = true; // 로딩 상태 설정

      const API_KEY = process.env.VUE_APP_TMDB_API_KEY;

      let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&page=${page}`; // 영화 데이터 요청 URL 생성

      // 선택된 필터 적용
      if (selectedGenre.value) {
        url += `&with_genres=${selectedGenre.value}`; // 선택된 장르 필터 추가
      }

      if (selectedRatingRange.value) {
        const [minRating, maxRating] = selectedRatingRange.value.split('-'); // 평점 범위 분할
        url += `&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`; // 평점 범위 필터 추가
      }

      url += `&sort_by=${sortBy.value}`; // 정렬 기준 추가

      // 검색어가 있는 경우 검색 API 사용
      if (searchQuery.value) {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${searchQuery.value}&page=${page}`; // 검색어 기반 영화 검색 URL 생성
      }

      try {
        // API 호출 및 데이터 처리
        const response = await fetch(url); // 영화 데이터를 가져오기 위해 API 호출
        const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환
        movies.value = [...movies.value, ...data.results]; // 기존 영화 목록에 새 데이터 추가
      } catch (error) {
        console.error('Failed to fetch movies:', error); // 오류 발생 시 콘솔에 오류 메시지 출력
      } finally {
        isFetching.value = false; // 로딩 상태 해제
      }
    };

    // 장르 목록을 가져오는 함수
    const fetchGenres = async () => {
      const API_KEY = process.env.VUE_APP_TMDB_API_KEY
      const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`; // 장르 목록 요청 URL 생성
      try {
        const response = await fetch(url); // 장르 데이터를 가져오기 위해 API 호출
        const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환
        genres.value = data.genres; // 장르 목록 설정
      } catch (error) {
        console.error('Failed to fetch genres:', error); // 오류 발생 시 콘솔에 오류 메시지 출력
      }
    };

    // 필터 값이 변경될 때마다 영화 목록 초기화 후 다시 가져오기
    watch([selectedGenre, selectedRatingRange, sortBy], () => {
      movies.value = []; // 기존 데이터를 초기화
      currentPage.value = 1; // 페이지 번호를 초기화
      fetchMovies(currentPage.value); // 첫 페이지의 영화 목록 다시 가져오기
    });

    // 검색 버튼 클릭 시 동작
    const searchMovies = () => {
      // 검색어와 검색 횟수를 로컬 스토리지에 저장
      let storedSearches = JSON.parse(localStorage.getItem('searchQueries') || '{}'); // 로컬 스토리지에서 기존 검색 기록 가져오기
      if (searchQuery.value) {
        if (storedSearches[searchQuery.value]) {
          storedSearches[searchQuery.value]++; // 기존 검색어의 검색 횟수 증가
        } else {
          storedSearches[searchQuery.value] = 1; // 새로운 검색어의 검색 횟수 설정
        }
        localStorage.setItem('searchQueries', JSON.stringify(storedSearches)); // 업데이트된 검색 기록을 로컬 스토리지에 저장
      }

      movies.value = []; // 기존 영화 목록 초기화
      currentPage.value = 1; // 페이지 번호 초기화
      fetchMovies(currentPage.value); // 첫 페이지의 영화 목록 다시 가져오기
    };

    // 필터 초기화 함수
    const resetFilters = () => {
      selectedGenre.value = ''; // 선택된 장르 초기화
      selectedRatingRange.value = ''; // 선택된 평점 범위 초기화
      sortBy.value = 'popularity'; // 정렬 기준 초기화
      searchQuery.value = ''; // 검색어 초기화
    };

    // 무한 스크롤을 처리하는 함수
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries; // 첫 번째 감시 항목 가져오기
      if (entry.isIntersecting && !isFetching.value) { // 감시 항목이 화면에 나타나고 데이터를 로딩 중이 아닌 경우
        currentPage.value++; // 페이지 번호 증가
        fetchMovies(currentPage.value); // 다음 페이지의 영화 목록 가져오기
      }
    };

    // 영화 포스터 클릭 시 로컬 스토리지에 영화 정보 추가 또는 제거
    const toggleLocalStorage = (movie: any) => {
      let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 선택된 영화 목록 가져오기
      const movieIndex = storedMovies.findIndex((storedMovie: any) => storedMovie.id === movie.id); // 영화가 이미 저장되어 있는지 확인

      if (movieIndex === -1) {
        // 아이템이 로컬 스토리지에 없으면 추가
        storedMovies.push({ id: movie.id, name: movie.title, image: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }); // 영화 정보를 저장 목록에 추가
      } else {
        // 아이템이 이미 로컬 스토리지에 있으면 제거
        storedMovies.splice(movieIndex, 1); // 영화 정보를 저장 목록에서 제거
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedMovies)); // 업데이트된 영화 목록을 로컬 스토리지에 저장
      movies.value = [...movies.value]; // 반응성 트리거
    };

    // 로컬 스토리지에 영화가 있는지 확인하는 함수
    const isItemInLocalStorage = (movie: any) => {
      let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 선택된 영화 목록 가져오기
      return storedMovies.some((storedMovie: any) => storedMovie.id === movie.id); // 해당 영화가 저장되어 있는지 확인
    };

    // 페이지 상단으로 스크롤하는 함수
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 페이지 상단으로 부드럽게 스크롤
    };

    // 스크롤 이벤트 핸들러 (상단 이동 버튼 표시 여부 설정)
    const handleScroll = () => {
      showTopButton.value = window.scrollY > 200; // 스크롤 위치가 200px 이상일 때 상단 이동 버튼 표시
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      fetchMovies(); // 영화 목록 가져오기
      fetchGenres(); // 장르 목록 가져오기

      // 무한 스크롤을 위한 IntersectionObserver 생성 및 설정
      const observer = new IntersectionObserver(handleIntersect, {
        root: null, // 루트 요소는 뷰포트
        rootMargin: '0px', // 루트 여백 없음
        threshold: 1.0, // 감시 요소가 100% 보일 때 트리거
      });

      if (infiniteScrollTarget.value) {
        observer.observe(infiniteScrollTarget.value); // 무한 스크롤 타겟 요소 감시 시작
      }

      // 스크롤 이벤트 리스너 추가
      window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가
    });

    // 컴포넌트가 언마운트될 때 호출되는 함수 (스크롤 이벤트 리스너 제거)
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 제거
    });

    return {
      movies, // 영화 목록 상태 반환
      genres, // 장르 목록 상태 반환
      selectedGenre, // 선택된 장르 상태 반환
      selectedRatingRange, // 선택된 평점 범위 상태 반환
      sortBy, // 정렬 기준 상태 반환
      isFetching, // 로딩 상태 반환
      searchQuery, // 검색어 상태 반환
      resetFilters, // 필터 초기화 함수 반환
      searchMovies, // 영화 검색 함수 반환
      infiniteScrollTarget, // 무한 스크롤 타겟 요소 반환
      toggleLocalStorage, // 로컬 스토리지 토글 함수 반환
      isItemInLocalStorage, // 로컬 스토리지에 영화가 있는지 확인하는 함수 반환
      scrollToTop, // 상단 이동 함수 반환
      showTopButton, // 상단 이동 버튼 표시 여부 상태 반환
    };
  },
});
</script>

<style scoped>
.search-filter-container {
  display: flex;
  justify-content: space-between; /* 검색창과 필터 섹션을 양 끝에 배치 */
  align-items: center; /* 검색창과 필터 섹션의 수직 가운데 정렬 */
  margin-top: 51px; /* 상단 여백 */
  margin-bottom: 20px; /* 하단 여백 */
}

.filter-section {
  display: flex;
  flex-direction: row; /* 가로 방향으로 배치 */
  gap: 15px; /* 각 필터 사이의 간격 */
}

.search-container {
  display: flex;
  gap: 5px; /* 검색창과 버튼 사이의 간격 */
  align-items: center; /* 검색창과 버튼의 수직 가운데 정렬 */
}

/* 검색 입력 필드 스타일 */
.search-input {
  padding: 8px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  border: 1px solid #e74c3c; /* 테두리 색상 설정 */
  background-color: #f8d7da; /* 배경 색상 설정 */
  transition: border-color 0.3s ease; /* 테두리 색상이 부드럽게 변경되도록 설정 */
}

/* 검색 입력 필드 포커스 스타일 */
.search-input:focus {
  border-color: #c0392b; /* 포커스 시 테두리 색상 변경 */
  background-color: #fadbd8; /* 포커스 시 배경 색상 변경 */
}

/* 검색 버튼 스타일 */
.search-button {
  padding: 8px 15px; /* 내부 여백 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  background-color: #e74c3c; /* 배경 색상 설정 */
  color: white; /* 텍스트 색상 설정 */
  transition: background-color 0.3s ease; /* 배경 색상이 부드럽게 변경되도록 설정 */
}

/* 검색 버튼 호버 스타일 */
.search-button:hover {
  background-color: #c0392b; /* 호버 시 배경 색상 변경 */
}

/* 필터 섹션의 레이블 및 셀렉트 스타일 */
label {
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  font-weight: bold; /* 텍스트 굵게 설정 */
  color: #c0392b; /* 텍스트 색상 설정 */
}

select, input {
  margin-top: 5px; /* 상단 여백 */
  padding: 8px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  border: 1px solid #e74c3c; /* 테두리 색상 설정 */
  background-color: #f8d7da; /* 배경 색상 설정 */
  transition: border-color 0.3s ease; /* 테두리 색상이 부드럽게 변경되도록 설정 */
}

/* 셀렉트 요소 스타일 */
select {
  appearance: none; /* 기본 드롭다운 화살표 제거 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

select:focus, input:focus {
  border-color: #c0392b; /* 포커스 시 테두리 색상 변경 */
  background-color: #fadbd8; /* 포커스 시 배경 색상 변경 */
}

select option {
  padding: 10px; /* 내부 여백 */
  background-color: rgb(0, 0, 0); /* 배경 색상 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  font-size: 16px; /* 글꼴 크기 설정 */
  color: #c0392b; /* 텍스트 색상 설정 */
}

/* 필터 초기화 버튼 스타일 */
.reset-button {
  padding: 10px 20px; /* 내부 여백 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  background-color: #e74c3c; /* 배경 색상 설정 */
  color: white; /* 텍스트 색상 설정 */
  transition: background-color 0.3s ease; /* 배경 색상이 부드럽게 변경되도록 설정 */
}

/* 로딩 표시 스타일 */
.loading {
  position: fixed; /* 고정 위치 설정 */
  bottom: 20px; /* 하단 위치 설정 */
  left: 50%; /* 왼쪽에서 50% 이동 */
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 흰색 배경 */
  color: #000000; /* 텍스트 색상 설정 */
  padding: 50px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
}

/* 그리드 컨테이너 스타일 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개 아이템 */
  gap: 20px; /* 각 아이템 사이의 간격 */
  margin: 20px 0; /* 상하 여백 */
}

.poster-container {
  position: relative; /* 포스터 위치 설정 */
  transition: transform 0.3s; /* 크기 변경 시 부드럽게 적용 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

/* 영화 포스터 이미지 스타일 */
.poster-image {
  width: 100%; /* 포스터 이미지 너비 설정 */
  border-radius: 10px; /* 모서리 둥글게 */
  transition: transform 0.3s; /* 이미지 확대/축소 시 부드럽게 적용 */
  border: 2px solid transparent; /* 기본 테두리는 투명하게 설정 */
}

/* 로컬 스토리지에 저장된 포스터 테두리 스타일 */
.selected-poster {
  border-color: #e50914; /* 로컬 스토리지에 저장된 포스터의 테두리 색상 설정 */
}

/* 영화 제목 스타일 */
.poster-title {
  position: absolute; /* 절대 위치 설정 */
  bottom: 10px; /* 하단에서 10px 위치 */
  left: 10px; /* 왼쪽에서 10px 위치 */
  color: #ffffff; /* 텍스트 색상 설정 */
  background: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
  padding: 5px 10px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  transition: color 0.3s; /* 색상 변경 시 부드럽게 적용 */
}

/* TOP 버튼 스타일 */
.top-button {
  position: fixed; /* 고정 위치 설정 */
  bottom: 80px; /* 하단에서 80px 위치 */
  right: 20px; /* 오른쪽에서 20px 위치 */
  background-color: #e50914; /* 배경 색상 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  padding: 10px 15px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  z-index: 2000; /* 다른 요소 위에 표시되도록 설정 */
}

/* 반응형 스타일 (768px 이하 화면 크기) */
@media (max-width: 768px) {
  .search-filter-container {
    flex-direction: column; /* 세로 방향으로 배치 */
    align-items: flex-start; /* 시작점에 맞춰 정렬 */
    gap: 5px; /* 각 필터 사이의 간격 */
  }

  .filter-section {
    flex-direction: row; /* 세로 방향으로 배치 */
    align-items: flex-start; /* 시작점에 맞춰 정렬 */
    gap: 10px; /* 각 필터 사이의 간격 */
  }

  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개 아이템 */
    gap: 10px; /* 각 아이템 사이의 간격 */
  }

  .search-input, select, .search-button, .reset-button {
    width: 100%; /* 너비 100% 설정 */
    max-width: none; /* 최대 너비 제한 없음 */
  }

  .poster-container {
    transition: transform 0.2s; /* 크기 변경 시 부드럽게 적용 */
  }
}

/* 반응형 스타일 (480px 이하 화면 크기) */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* 한 줄에 1개 아이템 */
  }

  .poster-title {
    font-size: 0.8rem; /* 글꼴 크기 축소 */
    padding: 3px 7px; /* 내부 여백 축소 */
  }

  .top-button {
    bottom: 100px; /* 하단에서 100px 위치로 수정 */
  }
}
</style>
