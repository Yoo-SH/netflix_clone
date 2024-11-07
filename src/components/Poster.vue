<template>
    <div>
      <!-- 포스터를 클릭할 수 있는 컨테이너. 클릭 시 toggleMovieDetails 메소드가 호출됨 -->
      <div
        class="poster-container"
        @click="toggleMovieDetails"
      >
        <!-- 영화 포스터 이미지. movie 객체의 image 속성을 바인딩하여 이미지 표시 -->
        <img :src="movie.image" alt="movie poster" class="poster-image" />
        <!-- 영화 제목. movie 객체의 name 속성을 바인딩하여 제목 표시 -->
        <p class="poster-title">{{ movie.name }}</p>
      </div>
  
      <!-- 영화 상세 정보 모달. showDetails가 true일 때만 표시되며, 모달 바깥을 클릭 시 closeMovieDetails 메소드가 호출됨 -->
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
          <!-- 모달 닫기 버튼, 클릭 시 closeMovieDetails 메소드가 호출됨 -->
          <button @click="closeMovieDetails" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
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
  
      // toggleMovieDetails 함수는 showDetails 값을 반전시켜 모달을 열거나 닫음
      const toggleMovieDetails = () => {
        showDetails.value = !showDetails.value;
      };
  
      // closeMovieDetails 함수는 showDetails를 false로 설정해 모달을 닫음
      const closeMovieDetails = () => {
        showDetails.value = false;
      };
  
      return {
        showDetails,
        toggleMovieDetails,
        closeMovieDetails,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 포스터 컨테이너 스타일 */
  .poster-container {
    position: relative;
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  /* 포스터 컨테이너에 마우스 올릴 때 확대 효과 */
  .poster-container:hover {
    transform: scale(1.1);
  }
  
  /* 포스터 이미지 스타일 */
  .poster-image {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
    border: 2px solid transparent;
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
    position: fixed;  /* 화면에 고정되어 스크롤해도 위치 유지 */
    top: 0;           /* 상단을 기준으로 시작 */
    left: 0;          /* 좌측을 기준으로 시작 */
    width: 100%;      /* 화면의 너비 전체를 덮음 */
    height: 100%;     /* 화면의 높이 전체를 덮음 */
    background-color: rgba(0, 0, 0, 0.8); /* 배경을 어둡게 하여 모달이 강조되도록 함 */
    display: flex;    /* 모달 내용을 가운데 정렬하기 위한 flexbox 사용 */
    align-items: center;  /* 수직 방향으로 가운데 정렬 */
    justify-content: center; /* 수평 방향으로 가운데 정렬 */
    z-index: 2000;    /* 다른 요소보다 위에 표시되도록 높은 z-index 설정 */
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
  
