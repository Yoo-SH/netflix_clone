<template>
    <div>
      <!-- 포스터를 클릭할 수 있는 컨테이너. 클릭 시 toggleMovieDetails 및 toggleLocalStorage 메소드가 호출됨 -->
      <div
        class="poster-container"
        @click="handlePosterClick"
      >
        <!-- 영화 포스터 이미지 -->
        <img :src="movie.image" alt="movie poster" :class="['poster-image', { 'selected': isItemInLocalStorage(movie) }]" />
        <!-- 영화 제목 -->
        <p class="poster-title">{{ movie.name }}</p>
      </div>
  
      <!-- 영화 상세 정보 모달 -->
      <div v-if="showDetails" class="movie-details-modal" @click.self="closeMovieDetails">
        <div class="movie-details-content">
          <!-- 영화 제목 -->
          <h2>{{ movie.name }}</h2>
          <!-- 영화 포스터 이미지 (상세 모달 내) -->
          <img :src="movie.image" alt="movie poster" class="details-poster-image" />
          <!-- 영화 설명 -->
          <p><strong>Description:</strong> {{ movie.description }}</p>
          <!-- 영화 평점 -->
          <p><strong>Rating:</strong> {{ movie.rating }}</p>
          <!-- 영화 장르 -->
          <p><strong>Genres:</strong> {{ movie.genre }}</p>
          <!-- 모달 닫기 버튼 -->
          <button @click="closeMovieDetails" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'PosterComponent',
    props: {
      // 부모 컴포넌트로부터 전달받는 movie 데이터, Object 타입이며 필수 속성
      movie: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      // showDetails는 모달의 표시 여부를 나타내는 상태값 (false일 때 모달 숨김)
      const showDetails = ref(false);
  
      /**
       * 포스터 클릭 시 호출되는 함수
       * - 모달을 토글
       * - 로컬 스토리지에 영화 정보 저장 또는 제거
       */
      const handlePosterClick = () => {
        toggleMovieDetails();
        toggleLocalStorage(props.movie);
      };
  
      // 모달을 열거나 닫는 함수
      const toggleMovieDetails = () => {
        showDetails.value = !showDetails.value;
      };
  
      // 모달을 닫는 함수
      const closeMovieDetails = () => {
        showDetails.value = false;
      };
  
      /**
       * 로컬 스토리지에서 선택된 영화 목록을 토글하는 함수
       * @param movie 선택된 영화 객체
       */
      const toggleLocalStorage = (movie: any) => {
        let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
        const movieIndex = storedMovies.findIndex((storedMovie: any) => storedMovie.id === movie.id);
  
        if (movieIndex === -1) {
          // 아이템이 로컬 스토리지에 없으면 추가
          storedMovies.push({
            id: movie.id,
            name: movie.name,
            image: movie.image,
          });
        } else {
          // 아이템이 이미 로컬 스토리지에 있으면 제거
          storedMovies.splice(movieIndex, 1);
        }
  
        localStorage.setItem('selectedMovies', JSON.stringify(storedMovies));
        // 반응성 트리거를 위해 업데이트 (필요 시 사용)
      };
  
      /**
       * 해당 영화가 로컬 스토리지에 저장되어 있는지 확인하는 함수
       * @param movie 확인할 영화 객체
       * @returns 저장 여부
       */
      const isItemInLocalStorage = (movie: any) => {
        let storedMovies = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
        return storedMovies.some((storedMovie: any) => storedMovie.id === movie.id);
      };
  
      return {
        showDetails,
        toggleMovieDetails,
        closeMovieDetails,
        toggleLocalStorage,
        isItemInLocalStorage,
        handlePosterClick,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 포스터 컨테이너 스타일 */
  .poster-container {
    position: relative;
    transition: transform 0.3s, border 0.3s;
    cursor: pointer;
    border: 2px solid transparent; /* 기본 테두리 */
  }
  
  /* 포스터 컨테이너에 마우스 올릴 때 확대 효과 */
  .poster-container:hover {
    transform: scale(1.1);
  }
  
  /* 선택된 포스터 이미지 스타일 */
  .poster-image.selected {
    border: 2px solid red; /* 선택된 경우 빨간 테두리 */
  }
  
  /* 포스터 이미지 스타일 */
  .poster-image {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  /* 포스터 제목 스타일 */
  .poster-title {
    color: #ffffff;
    margin-top: 10px;
    text-align: center;
    font-size: 1em;
  }
  
  /* 모달 배경 스타일 - 화면 전체를 덮는 핵심 스타일 */
  .movie-details-modal {
    position: fixed; /* 화면에 고정되어 스크롤해도 위치 유지 */
    top: 0; /* 상단을 기준으로 시작 */
    left: 0; /* 좌측을 기준으로 시작 */
    width: 100%; /* 화면의 너비 전체를 덮음 */
    height: 100%; /* 화면의 높이 전체를 덮음 */
    background-color: rgba(0, 0, 0, 0.8); /* 배경을 어둡게 하여 모달이 강조되도록 함 */
    display: flex; /* 모달 내용을 가운데 정렬하기 위한 flexbox 사용 */
    align-items: center; /* 수직 방향으로 가운데 정렬 */
    justify-content: center; /* 수평 방향으로 가운데 정렬 */
    z-index: 2000; /* 다른 요소보다 위에 표시되도록 높은 z-index 설정 */
    margin-bottom: 200px;
  }
  
  /* 모달 내용 스타일 */
  .movie-details-content {
    background-color: #333;
    border-radius: 10px;
    color: #fff;
    max-width: 400px; /* 모달의 최대 너비를 줄임 */
    width: 80%; /* 모달의 너비를 줄임 */
    text-align: center;
    padding: 20px;
  }
  
  /* 상세 포스터 이미지 스타일 */
  .details-poster-image {
    width: 40%; /* 상세 포스터 이미지 크기를 줄임 */
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  /* 모달 닫기 버튼 스타일 */
  .close-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #e50914;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* 닫기 버튼에 마우스 올릴 때 색상 변경 */
  .close-button:hover {
    background-color: #f40612;
  }
  </style>