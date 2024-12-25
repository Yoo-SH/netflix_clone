<template>
  <NavbarComponent /> <!-- 네비게이션 바 컴포넌트 추가 -->
  <div id="table-view">
    <!-- 인기 보기로 전환하는 버튼 -->
    <button @click="goToPopularView" class="toggle-view-button">Switch to Popular View</button> <!-- 버튼 클릭 시 goToPopularView 함수 호출 -->
    <div class="grid-view">
      <div class="grid-container">
        <!-- 페이지네이션을 적용한 각 영화 아이템 출력 -->
        <div v-for="item in paginatedItems" :key="item.id" class="grid-item" @click="toggleLocalStorage(item)"> <!-- 각 영화 아이템에 고유 키 설정 및 클릭 시 로컬 스토리지 토글 함수 호출 -->
          <div class="poster-image-wrapper">
            <!-- 영화 포스터 이미지 출력, 이미지가 있을 때만 렌더링 -->
            <img :src="item.image" :alt="item.name" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(item)}" v-if="item.image" />
            <!-- 영화 제목 출력 -->
            <div class="poster-title">{{ item.name }}</div> <!-- 영화 제목 텍스트 출력 -->
          </div>
        </div>
      </div>
      <div class="pagination">
        <!-- 이전 페이지 버튼, 첫 번째 페이지에서는 비활성화 -->
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <!-- 페이지 번호 목록 반복 출력 -->
        <span v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="['page-number', { active: page === currentPage }]">
          {{ page }} <!-- 페이지 번호 출력 -->
        </span>
        <!-- 다음 페이지 버튼, 마지막 페이지에서는 비활성화 -->
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
  <FooterComponent /> <!-- 푸터 컴포넌트 추가 --> 
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, onMounted } from 'vue'; // Vue와 필요한 함수들 import
import { useRouter } from 'vue-router'; // Vue Router import
import NavbarComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';
interface Item {
  id: number; // 영화 ID
  name: string; // 영화 제목
  image: string; // 영화 포스터 이미지 URL
}

export default defineComponent({
  name: 'TableViewComponent', // 컴포넌트 이름 설정
  components: { // 사용할 컴포넌트 설정
    NavbarComponent, // 네비게이션 바 컴포넌트
    FooterComponent, // 푸터 컴포넌트
  },

  props: {
    items: {
      type: Array as PropType<Item[]>, // props로 영화 데이터 목록 받음
      required: true, // 필수 props 설정
    },
  },
  setup(props) {
    const popularItems = ref<Item[]>([]); // 인기 영화 목록 상태 변수
    const currentPage = ref(1); // 현재 페이지 번호 상태 변수
    const itemsPerPage = 20; // 페이지당 표시할 아이템 개수
    const isFetching = ref(false); // 데이터 로딩 상태 여부
    const router = useRouter(); // Vue Router 사용

    const totalPages = computed(() => Math.ceil(popularItems.value.length / itemsPerPage)); // 총 페이지 수 계산

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage; // 현재 페이지에 해당하는 시작 인덱스 계산
      const end = start + itemsPerPage; // 현재 페이지에 해당하는 끝 인덱스 계산
      return popularItems.value.slice(start, end); // 현재 페이지에 해당하는 영화 데이터 반환
    });

    // 페이지네이션에 표시될 페이지 번호 계산
    const visiblePages = computed(() => {
      const pages = []; // 페이지 번호 목록
      const maxVisiblePages = 8; // 최대 표시할 페이지 번호 개수
      const total = totalPages.value; // 전체 페이지 개수

      let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2)); // 시작 페이지 번호
      let endPage = startPage + maxVisiblePages - 1; // 끝 페이지 번호

      if (endPage > total) { // 끝 페이지 번호가 전체 페이지 개수를 초과하는 경우
        endPage = total; // 끝 페이지 번호를 전체 페이지 개수로 설정
        startPage = Math.max(1, endPage - maxVisiblePages + 1); // 시작 페이지 번호를 다시 계산
      }
      
      for (let i = startPage; i <= endPage; i++) { // 시작 페이지부터 끝 페이지까지 반복
        pages.push(i); // 페이지 번호 목록에 추가
      }

      return pages;
    });


    const API_KEY = process.env.VUE_APP_TMDB_API_KEY;

    // 인기 영화를 가져오는 함수
    const fetchPopularMovies = async (initialLoad = false) => {
      if (isFetching.value) return; // 이미 데이터를 로딩 중이면 함수 종료
      isFetching.value = true; // 데이터 로딩 상태 설정

      const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL 설정
      try {
        if (initialLoad) {
          // 초기 8페이지까지의 데이터를 한 번에 가져옴
          for (let page = 1; page <= 8; page++) {
            const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`; // API 요청 URL 생성
            const response = await fetch(url); // API 호출
            const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환

            popularItems.value = [
              ...popularItems.value, // 기존 데이터 유지
              ...data.results.map((item: any) => ({ // 새로운 영화 데이터 추가
                id: item.id, // 영화 ID
                name: item.title, // 영화 제목
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // 포스터 이미지 URL
              })),
            ];
          }
        } else {
          // 추가 페이지 데이터를 가져옴
          const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${currentPage.value}`; // API 요청 URL 생성
          const response = await fetch(url); // API 호출
          const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환

          popularItems.value = [
            ...popularItems.value, // 기존 데이터 유지
            ...data.results.map((item: any) => ({ // 새로운 영화 데이터 추가
              id: item.id, // 영화 ID
              name: item.title, // 영화 제목
              image: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // 포스터 이미지 URL
            })),
          ];
        }
      } catch (error) {
        console.error('Failed to fetch popular movies:', error); // 오류 발생 시 콘솔에 메시지 출력
      } finally {
        isFetching.value = false; // 데이터 로딩 상태 해제
      }
    };

    // 특정 페이지로 이동하는 함수
    const goToPage = (page: number) => {
      if (page > 0 && page <= totalPages.value) { // 유효한 페이지 범위인지 확인
        currentPage.value = page; // 현재 페이지 설정
        fetchPopularMovies(); // 해당 페이지의 인기 영화 데이터 가져오기
      }
    };

    // 이전 페이지로 이동하는 함수
    const previousPage = () => {
      if (currentPage.value > 1) { // 첫 페이지가 아닌 경우
        currentPage.value -= 1; // 현재 페이지 감소
        fetchPopularMovies(); // 이전 페이지의 인기 영화 데이터 가져오기
      }
    };

    // 다음 페이지로 이동하는 함수
    const nextPage = () => {
      if (currentPage.value < totalPages.value) { // 마지막 페이지가 아닌 경우
        currentPage.value += 1; // 현재 페이지 증가
        fetchPopularMovies(); // 다음 페이지의 인기 영화 데이터 가져오기
      }
    };

    // 인기 보기로 이동하는 함수
    const goToPopularView = () => {
      router.push('/popular'); // 인기 보기 뷰로 라우팅
    };

    // 로컬 스토리지에 포스터 데이터를 저장하거나 삭제하는 함수
    const toggleLocalStorage = (item: Item) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 기존 저장된 영화 목록 가져오기
      const itemIndex = storedItems.findIndex((storedItem: Item) => storedItem.id === item.id); // 영화가 이미 저장되어 있는지 확인

      if (itemIndex === -1) {
        // 아이템이 로컬 스토리지에 없으면 추가
        storedItems.push(item); // 영화 정보를 저장 목록에 추가
      } else {
        // 아이템이 이미 로컬 스토리지에 있으면 제거
        storedItems.splice(itemIndex, 1); // 영화 정보를 저장 목록에서 제거
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedItems)); // 업데이트된 영화 목록을 로컬 스토리지에 저장
      console.log('Updated localStorage:', storedItems); // 업데이트된 로컬 스토리지 로그 출력
      popularItems.value = [...popularItems.value]; // 배열을 다시 할당하여 반응성 트리거
    };

    // 로컬 스토리지에 아이템이 있는지 확인하는 함수
    const isItemInLocalStorage = (item: Item) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 저장된 영화 목록 가져오기
      return storedItems.some((storedItem: Item) => storedItem.id === item.id); // 해당 영화가 저장되어 있는지 확인
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      fetchPopularMovies(true); // 초기 로드 시 8페이지 데이터 가져오기
    });

    return {
      paginatedItems, // 페이지네이션된 영화 데이터 반환
      currentPage, // 현재 페이지 반환
      totalPages, // 총 페이지 수 반환
      visiblePages, // 표시할 페이지 번호 목록 반환
      goToPage, // 특정 페이지로 이동 함수 반환
      previousPage, // 이전 페이지로 이동 함수 반환
      nextPage, // 다음 페이지로 이동 함수 반환
      popularItems, // 인기 영화 목록 반환
      goToPopularView, // 인기 보기 뷰 이동 함수 반환
      toggleLocalStorage, // 로컬 스토리지 토글 함수 반환
      isItemInLocalStorage, // 로컬 스토리지에 영화가 있는지 확인하는 함수 반환
    };
  },
});
</script>

<style scoped>

.grid-view {
  padding: 0; /* 내부 여백 없음 */
  overflow: hidden; /* 스크롤 제거 */
  background-color: #141414; /* 배경색 설정 */
}

.grid-container {
  margin-top: 10px; /* 상단 여백 설정 */
  display: grid; /* 그리드 레이아웃 사용 */
  grid-template-columns: repeat(10, 1fr); /* 한 줄에 10개 아이템 */
  gap: 10px; /* 각 아이템 사이의 간격 설정 */
  padding: 0 30px; /* 좌우 여백 설정 */
  overflow: hidden; /* 스크롤 제거 */
}

.grid-item {
  transition: transform 0.2s; /* 크기 변화 시 부드러운 트랜지션 설정 */
}

.grid-item:hover {
  transform: scale(1.03); /* 호버 시 크기 확대 */
}

.poster-title {
  position: absolute; /* 절대 위치 설정 */
  bottom: 5px; /* 하단 여백 설정 */
  left: 5px; /* 왼쪽 여백 설정 */
  font-size: 0.8em; /* 글꼴 크기 설정 */
  padding: 3px; /* 내부 여백 설정 */
  border-radius: 3px; /* 모서리 둥글게 설정 */
}

.poster-image {
  width: 100%; /* 너비 100% 설정 */
  height: auto; /* 높이는 자동 설정 */
  border-radius: 3px; /* 모서리 둥글게 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); /* 그림자 설정 */
  border: 1px solid transparent; /* 기본 테두리는 투명 설정 */
}

.selected-poster {
  border-color: #e50914; /* 로컬 스토리지에 저장된 경우 테두리 빨강 설정 */
}

.pagination {
  display: flex; /* 플렉스 레이아웃 사용 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 5px; /* 각 아이템 사이의 간격 설정 */
  margin-top: 20px; /* 상단 여백 설정 */
}

.page-number {
  padding: 5px; /* 내부 여백 설정 */
  font-size: 0.9em; /* 글꼴 크기 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  transition: background-color 0.2s; /* 배경색 변화 시 부드러운 트랜지션 설정 */
}

.page-number:hover {
  background-color: #333333; /* 호버 시 배경색 변경 */
  border-radius: 3px; /* 모서리 둥글게 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.page-number.active {
  font-weight: bold; /* 굵은 글꼴 설정 */
  text-decoration: underline; /* 밑줄 설정 */
}

button {
  margin: 10px; /* 바깥 여백 설정 */
  padding: 8px; /* 내부 여백 설정 */
  font-size: 0.9em; /* 글꼴 크기 설정 */
  background-color: #f40612; /* 배경색 설정 */
  color: #ffffff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 3px; /* 모서리 둥글게 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

#table-view {
  overflow-y: hidden !important; /* 세로 스크롤 제거 */
}
</style>
