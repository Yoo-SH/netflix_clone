<template>
    <NavbarComponent />
    <div v-if="isFetching" class="loading">Loading...</div>
    <div id="wishlist">
      <button v-if="showTopButton" @click="scrollToTop" class="top-button">TOP</button>
      <!-- 포스터 리스트 추가 -->
      <div class="poster-list">
        <div
          v-for="item in popularItems"
          :key="item.id"
          class="poster-container"
          @click="toggleLocalStorage(item)"
          :class="{'selected-poster': isItemInLocalStorage(item)}"
        >
          <img :src="item.image" alt="movie poster" class="poster-image" />
          <p class="poster-title">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <FooterComponent />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  import NavbarComponent from '../components/Navbar.vue';
  import FooterComponent from '../components/Footer.vue';
  
  export default defineComponent({
    name: 'WishlistViewComponent',
    components: {
      NavbarComponent,
      FooterComponent,
    },
    setup() {
      const popularItems = ref<any[]>([]);
      const currentPage = ref(1);
      const isFetching = ref(false);
      const showTopButton = ref(false);
      const router = useRouter();
  
      const fetchPopularMovies = async () => {
        if (isFetching.value) return;
        isFetching.value = true;
  
        try {
          // LocalStorage에서 아이템 불러오기
          const storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
          popularItems.value = [...storedItems];
        } catch (error) {
          console.error('Failed to fetch popular movies:', error);
        } finally {
          isFetching.value = false;
        }
      };
  
      // 스크롤 이벤트를 처리하는 함수
      const handleScroll = () => {
        // 화면의 맨 아래에 도달했는지 확인
        const bottomOfWindow =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
        if (bottomOfWindow) {
          fetchPopularMovies();
        }
  
        // 스크롤 위치에 따라 TOP 버튼 표시 여부 설정
        showTopButton.value = window.scrollY > 200;
      };
  
      // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      // Table View로 이동하는 함수
      const goToPopularView = () => {
        router.push('/popular');
      };
  
      // 로컬 스토리지에 포스터 데이터를 저장하거나 삭제하는 함수
      const toggleLocalStorage = (item: any) => {
        let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
        const itemIndex = storedItems.findIndex((storedItem: any) => storedItem.id === item.id);
  
        if (itemIndex === -1) {
          // 아이템이 로컬 스토리지에 없으면 추가
          storedItems.push(item);
        } else {
          // 아이템이 이미 로컬 스토리지에 있으면 제거
          storedItems.splice(itemIndex, 1);
        }
  
        localStorage.setItem('selectedMovies', JSON.stringify(storedItems));
        popularItems.value = [...storedItems];
      };
  
      // 로컬 스토리지에 아이템이 있는지 확인하는 함수
      const isItemInLocalStorage = (item: any) => {
        let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]');
        return storedItems.some((storedItem: any) => storedItem.id === item.id);
      };
  
      // 컴포넌트가 마운트될 때 호출되는 함수
      onMounted(() => {
        // 초기 로드 시 로컬 스토리지 데이터 가져오기
        fetchPopularMovies();
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
      });
  
      // 컴포넌트가 언마운트될 때 호출되는 함수
      onBeforeUnmount(() => {
        // 스크롤 이벤트 리스너 제거
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        popularItems,
        isFetching,
        showTopButton,
        scrollToTop,
        goToPopularView,
        toggleLocalStorage,
        isItemInLocalStorage,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 기존 스타일 유지 */
  .loading {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
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
  
  /* 포스터 이미지와 제목을 포함한 컨테이너 */
  .poster-list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
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
    border-color: #e50914; /* 로컬 스토리지에 있는 경우 얇은 빨간 테두리 추가 */
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
   /* 모바일 크기에 맞는 반응형 디자인 */
   @media (max-width: 768px) {
    .poster-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 10px;
      width: 100%;
    }

    .poster-title {
      font-size: 12px;
    }

    .poster-container {
      margin: 0 auto;
      width: 100%;
    }

    .poster-image {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .top-button {
      padding: 8px 12px;
      font-size: 0.8em;
    }
  }

  @media (max-width: 480px) {
    .poster-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 5px;
      padding: 5px;
    }

    .poster-image {
      margin-bottom: 10px;
    }

    .poster-title {
      font-size: 10px;
    }

    .top-button {
      bottom: 60px;
      right: 10px;
      font-size: 0.7em;
    }
  }
  </style>
  