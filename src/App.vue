<template>
  <!-- App 컴포넌트의 루트 요소 -->
  <div id="app" @scroll="handleScroll">
    <!-- 네비게이션 바 컴포넌트 -->
    <nav>
      <NavbarComponent />
    </nav>
    <div>
      <!-- 카테고리 리스트 컴포넌트에 제목과 인기 항목 데이터를 전달 -->
      <CategoryListComponent
        title="Popular Now"
        :items="popularItems"
      />
    </div>
    <!-- 푸터 컴포넌트 -->
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';
import CategoryListComponent from './components/CategoryList.vue';

// TMDb API 키 및 기본 URL 설정
const API_KEY = '281dc9b971acbdf5c2a5787ded23f9b9';
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    CategoryListComponent,
  },
  setup() {
    // 인기 항목을 저장할 반응형 배열
    const popularItems = ref([]);
    // 현재 페이지 번호를 저장할 반응형 변수
    const currentPage = ref(1);
    // 데이터가 로딩 중인지 여부를 저장할 반응형 변수
    const isFetching = ref(false);

    // 인기 영화를 가져오는 함수
    const fetchPopularMovies = async () => {
      // 이미 데이터를 가져오는 중이라면 함수를 종료
      if (isFetching.value) return;
      isFetching.value = true; // 데이터를 가져오는 중으로 설정

      // API 요청 URL 구성
      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${currentPage.value}`;
      try {
        // API로부터 데이터를 가져오는 내부 함수 정의
        const fetchMovies = async (url: string) => {
          const response = await fetch(url);
          // 응답 데이터를 JSON 형태로 반환
          return await response.json();
        };

        // API로부터 데이터를 가져옴
        const data = await fetchMovies(url);

        // 가져온 데이터를 기존의 popularItems 배열에 추가
        popularItems.value = [
          ...popularItems.value,
          ...data.results.map((item: any) => ({
            id: item.id, // 영화 ID
            name: item.title, // 영화 제목
            image: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // 포스터 이미지 URL
          })),
        ];
        // 다음 페이지 번호로 증가
        currentPage.value += 1;
      } catch (error) {
        // 오류가 발생한 경우 콘솔에 오류 메시지 출력
        console.error('Failed to fetch popular movies:', error);
      } finally {
        // 데이터 로딩 상태를 false로 설정하여 로딩이 끝났음을 표시
        isFetching.value = false;
      }
    };

    // 스크롤 이벤트를 처리하는 함수
    const handleScroll = () => {
      // 화면의 맨 아래에 도달했는지 확인
      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (bottomOfWindow) {
        // 맨 아래에 도달하면 인기 영화를 추가로 가져옴
        fetchPopularMovies();
      }
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      // 초기 인기 영화 데이터를 가져옴
      fetchPopularMovies();
      // 스크롤 이벤트 리스너 추가
      window.addEventListener('scroll', handleScroll);
    });

    // 템플릿에 반환할 변수들
    return {
      popularItems,
    };
  },
});
</script>

<style scoped>
/* 기존 스타일 유지 */
</style>
