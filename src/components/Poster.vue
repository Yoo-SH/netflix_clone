<template>
    <div>
      <div
        class="poster-container"
        @click="toggleMovieDetails"
      >
        <img :src="movie.image" alt="movie poster" class="poster-image" />
        <p class="poster-title">{{ movie.name }}</p>
      </div>
  
      <!-- 영화 상세 정보 모달 -->
      <div v-if="showDetails" class="movie-details-modal" @click.self="closeMovieDetails">
        <div class="movie-details-content">
          <h2>{{ movie.name }}</h2>
          <img :src="movie.image" alt="movie poster" class="details-poster-image" />
          <p><strong>Description:</strong> {{ movie.description }}</p>
          <p><strong>Rating:</strong> {{ movie.rating }}</p>
          <p><strong>Genres:</strong> {{ movie.genre }}</p>
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
      movie: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const showDetails = ref(false);
  
      const toggleMovieDetails = () => {
        showDetails.value = !showDetails.value;
      };
  
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
  .poster-container {
    position: relative;
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  .poster-container:hover {
    transform: scale(1.1);
  }
  
  .poster-image {
    width: 60%;
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
  
  .movie-details-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  }
  
  .movie-details-content {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    max-width: 500px;
    width: 90%;
    text-align: center;
  }
  
  .details-poster-image {
    width: 50%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .close-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #e50914;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #f40612;
  }
  </style>
  