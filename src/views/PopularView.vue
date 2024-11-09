<template>
  <div id="popular">
    <div>
      <!-- 테이블 뷰로 전환하는 버튼 -->
      <button @click="goToTableView" class="toggle-view-button"> <!-- 테이블 뷰로 전환 버튼 클릭 시 함수 호출 -->
        Switch to Table View <!-- 버튼 텍스트 -->
      </button>
    </div>
    <!-- 데이터 로딩 중일 때 로딩 표시 -->
    <div v-if="isFetching && !isTableView" class="loading">Loading...</div> <!-- 데이터 로딩 중일 때 표시되는 텍스트 -->
    <!-- 페이지 상단으로 이동 버튼 -->
    <button v-if="!isTableView" @click="scrollToTop" class="top-button">TOP</button> <!-- 상단 이동 버튼 -->
    <!-- 포스터 리스트 추가 -->
    <div class="poster-list">
      <!-- 인기 영화 목록 반복 출력 -->
      <div
        v-for="item in popularItems" 
        :key="item.id"  
        class="poster-container" 
        @click="toggleLocalStorage(item)"
      >
        <!-- 영화 포스터 이미지 -->
        <img :src="item.image" alt="movie poster" class="poster-image" :class="{'selected-poster': isItemInLocalStorage(item)}" /> <!-- 영화 포스터 이미지, 로컬 스토리지에 있는 경우 클래스 추가 -->
        <!-- 영화 제목 표시 -->
        <p class="poster-title">{{ item.name }}</p> <!-- 영화 제목 텍스트 출력 -->
      </div>
    </div>
    <!-- 무한 스크롤을 위한 감시 요소 -->
    <div ref="infiniteScrollTarget" class="infinite-scroll-target"></div> <!-- 무한 스크롤을 위한 감시 요소 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'; // Vue 컴포넌트와 필요한 함수들 import
import { useRouter } from 'vue-router'; // Vue Router import

// TMDb API 기본 URL 설정
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDb API 기본 URL

export default defineComponent({
  name: 'App', // 컴포넌트 이름 설정
  setup() {
    const popularItems = ref<any[]>([]); // 인기 영화 데이터 목록
    const currentPage = ref(1); // 현재 페이지 번호
    const isFetching = ref(false); // 데이터 로딩 상태 여부
    const showTopButton = ref(true); // 상단 이동 버튼 표시 여부
    const router = useRouter(); // Vue Router 사용
    const infiniteScrollTarget = ref<HTMLElement | null>(null); // 무한 스크롤 타겟 요소

    // API 키 가져오는 함수
    const getApiKeyFromLocalStorage = () => {
      const authUser = JSON.parse(localStorage.getItem('authUser') || '{}'); // 로컬 스토리지에서 사용자 정보 가져오기
      return authUser.password || ''; // 사용자 비밀번호를 API 키로 사용
    };

    const API_KEY = getApiKeyFromLocalStorage(); // API 키 설정

    // 인기 영화를 가져오는 함수
    const fetchPopularMovies = async (page = 1) => {
      if (isFetching.value) return; // 이미 데이터를 로딩 중이면 함수 종료
      isFetching.value = true; // 데이터 로딩 상태 설정

      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`; // API 요청 URL 생성
      try {
        const response = await fetch(url); // API 호출
        if (!response.ok) throw new Error('Network response was not ok'); // 응답이 실패하면 오류 발생
        const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환

        popularItems.value = [
          ...popularItems.value, // 기존 데이터 유지
          ...data.results.map((item: any) => ({ // 새로운 영화 데이터 추가
            id: item.id, // 영화 ID
            name: item.title, // 영화 제목
            image: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // 포스터 이미지 URL
          })),
        ];
        currentPage.value += 1; // 페이지 번호 증가
      } catch (error) {
        console.error('Failed to fetch popular movies:', error); // 오류 발생 시 콘솔에 메시지 출력
      } finally {
        isFetching.value = false; // 데이터 로딩 상태 해제
      }
    };

    // 무한 스크롤 감시 함수
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries; // 첫 번째 감시 항목 가져오기
      if (entry.isIntersecting && !isFetching.value) { // 감시 항목이 화면에 나타나고 데이터를 로딩 중이 아닌 경우
        fetchPopularMovies(currentPage.value); // 다음 페이지의 인기 영화 데이터 가져오기
      }
    };

    // TOP 버튼 클릭 시 화면 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
      console.log('Scroll to top button clicked'); // 버튼 클릭 로그 출력
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 화면 맨 위로 부드럽게 스크롤
    };

    // Table View로 이동하는 함수
    const goToTableView = () => {
      router.push('/popular/table'); // 테이블 뷰로 라우팅
    };

    // 로컬 스토리지에 포스터 데이터를 저장하거나 삭제하는 함수
    const toggleLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 기존 저장된 영화 목록 가져오기
      const itemIndex = storedItems.findIndex((storedItem: any) => storedItem.id === item.id); // 영화가 이미 저장되어 있는지 확인

      if (itemIndex === -1) {
        // 아이템이 로컬 스토리지에 없으면 추가
        storedItems.push(item); // 영화 정보를 저장 목록에 추가
      } else {
        // 아이템이 이미 로컬 스토리지에 있으면 제거
        storedItems.splice(itemIndex, 1); // 영화 정보를 저장 목록에서 제거
      }

      localStorage.setItem('selectedMovies', JSON.stringify(storedItems)); // 업데이트된 영화 목록을 로컬 스토리지에 저장
      console.log('Updated localStorage:', storedItems); // 업데이트된 로컬 스토리지 로그 출력
      // 배열을 다시 할당하여 반응성 트리거
      popularItems.value = [...popularItems.value];
    };

    // 로컬 스토리지에 아이템이 있는지 확인하는 함수
    const isItemInLocalStorage = (item: any) => {
      let storedItems = JSON.parse(localStorage.getItem('selectedMovies') || '[]'); // 로컬 스토리지에서 저장된 영화 목록 가져오기
      return storedItems.some((storedItem: any) => storedItem.id === item.id); // 해당 영화가 저장되어 있는지 확인
    };

    // 컴포넌트가 마운트될 때 호출되는 함수
    onMounted(() => {
      // 초기 인기 영화 데이터를 가져옴
      fetchPopularMovies();

      // 무한 스크롤 감시자 설정
      const observer = new IntersectionObserver(handleIntersect, {
        root: null, // 루트 요소는 뷰포트
        rootMargin: '0px', // 루트 여백 없음
        threshold: 1.0, // 감시 요소가 100% 보일 때 트리거
      });

      if (infiniteScrollTarget.value) {
        observer.observe(infiniteScrollTarget.value); // 무한 스크롤 타겟 요소 감시 시작
      }
    });

    // 컴포넌트가 언마운트될 때 호출되는 함수
    onBeforeUnmount(() => {
      // 스크롤 이벤트 리스너 제거
      // 현재는 사용되지 않음
    });

    return {
      popularItems, // 인기 영화 목록 반환
      isFetching, // 데이터 로딩 상태 반환
      showTopButton, // 상단 이동 버튼 표시 여부 반환
      scrollToTop, // 상단 이동 함수 반환
      goToTableView, // 테이블 뷰 이동 함수 반환
      toggleLocalStorage, // 로컬 스토리지 토글 함수 반환
      isItemInLocalStorage, // 로컬 스토리지에 영화가 있는지 확인하는 함수 반환
      infiniteScrollTarget, // 무한 스크롤 타겟 요소 반환
    };
  },
});
</script>

<style scoped>
  /* 로딩 표시 스타일 */
  .loading {
    position: fixed; /* 고정 위치 설정 */
    bottom: 20px; /* 하단에서 20px 위치 */
    left: 50%; /* 왼쪽에서 50% 위치 (가운데 정렬) */
    transform: translateX(-50%); /* X축 방향으로 -50% 이동 (가운데 정렬 보정) */
    background-color: rgba(255, 255, 255, 0.8); /* 배경색을 흰색으로 하고 투명도 적용 */
    color: #000000; /* 텍스트 색상 설정 */
    padding: 50px; /* 내부 여백 설정 */
    border-radius: 5px; /* 모서리 둥글게 설정 */
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
  }

  /* 상단 이동 버튼 스타일 */
  .top-button {
    position: fixed; /* 고정 위치 설정 */
    bottom: 80px; /* 하단에서 80px 위치 */
    right: 20px; /* 오른쪽에서 20px 위치 */
    background-color: #e50914; /* 배경색 빨강 설정 */
    color: #ffffff; /* 텍스트 색상 흰색 설정 */
    border: none; /* 테두리 제거 */
    padding: 10px 15px; /* 내부 여백 설정 */
    border-radius: 5px; /* 모서리 둥글게 설정 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
  }

  /* 상단 이동 버튼 호버 스타일 */
  .top-button:hover {
    background-color: #f40612; /* 호버 시 배경색 변경 */
  }

  /* 테이블 뷰 전환 버튼 스타일 */
  .toggle-view-button {
    margin: 20px; /* 바깥 여백 설정 */
    padding: 10px; /* 내부 여백 설정 */
    background-color: #f40612; /* 배경색 설정 */
    color: #ffffff; /* 텍스트 색상 설정 */
    border: none; /* 테두리 제거 */
    border-radius: 5px; /* 모서리 둥글게 설정 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }

  /* 테이블 뷰 전환 버튼 호버 스타일 */
  .toggle-view-button:hover {
    background-color: #333333; /* 호버 시 배경색 변경 */
  }

  /* 포스터 리스트 스타일 */
  .poster-list {
    display: grid; /* 그리드 레이아웃 사용 */
    grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개 아이템 */
    gap: 20px; /* 각 아이템 사이의 간격 설정 */
  }

  /* 포스터 컨테이너 스타일 */
  .poster-container {
    position: relative; /* 상대 위치 설정 */
    transition: transform 0.3s; /* 크기 변화 시 부드러운 트랜지션 설정 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }

  /* 포스터 컨테이너 호버 시 스타일 */
  .poster-container:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
  }

  /* 포스터 이미지 스타일 */
  .poster-image {
    width: 100%; /* 너비 100% 설정 */
    border-radius: 10px; /* 모서리 둥글게 설정 */
    transition: transform 0.3s; /* 크기 변화 시 부드러운 트랜지션 설정 */
    border: 2px solid transparent; /* 기본 테두리는 투명 설정 */
  }

  /* 선택된 포스터 스타일 */
  .selected-poster {
    border-color: #e50914; /* 로컬 스토리지에 저장된 경우 테두리 빨강 설정 */
  }

  /* 포스터 제목 스타일 */
  .poster-title {
    position: absolute; /* 절대 위치 설정 */
    bottom: 10px; /* 하단에서 10px 위치 */
    left: 10px; /* 왼쪽에서 10px 위치 */
    color: #ffffff; /* 텍스트 색상 흰색 설정 */
    background: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 설정 */
    padding: 5px 10px; /* 내부 여백 설정 */
    border-radius: 5px; /* 모서리 둥글게 설정 */
    transition: color 0.3s; /* 색상 변화 시 부드러운 트랜지션 설정 */
  }

  /* 포스터 제목 호버 시 스타일 */
  .poster-container:hover .poster-title {
    color: #ffffff; /* 호버 시 텍스트 색상 유지 */
  }

  /* 무한 스크롤 타겟 요소 스타일 */
  .infinite-scroll-target {
    height: 1px; /* 높이 1px 설정 */
    background-color: transparent; /* 투명한 배경 설정 */
  }
</style>
