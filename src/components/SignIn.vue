<!-- SignIn.vue -->
<template>
  <div class="signin-form">
    <div class="signin-container">
      <h2 class="signin-title">Login</h2> <!-- 로그인 폼 제목 출력 -->
      <!-- 이메일이 유효하지 않을 경우 오류 메시지 출력 -->
      <span v-if="!validEmail" class="error">Invalid email address</span>
      <input type="email" v-model="email" class="signin-input" placeholder="Enter your email" /> <!-- 이메일 입력 필드 -->
      <input type="password" v-model="password" class="signin-input" placeholder="Enter your password" /> <!-- 비밀번호 입력 필드 -->
      <div class="signin-remember">
        <!-- 로그인 시 아이디와 비밀번호를 기억할지 여부 선택 -->
        <input type="checkbox" v-model="rememberMe" /> <span>Remember me</span> <!-- rememberMe 체크박스 및 텍스트 -->
      </div>
      <button @click="handleLogin" class="signin-button">Login</button> <!-- 로그인 버튼 클릭 시 handleLogin 함수 호출 -->
      <!-- 회원가입 폼으로 전환하는 버튼 -->
      <button @click="$emit('switch-form')" class="signup-button">Go to Sign Up</button> <!-- 회원가입 폼으로 전환하는 버튼 -->
      <!-- 로그인 실패 시 오류 메시지 출력 -->
      <span v-if="errorMessage" class="error">{{ errorMessage }}</span> <!-- 오류 메시지 출력 -->
      <button class="kakao-login-btn" href="javascript:loginWithKakao()">
      <img src="../assets/kakao_login_medium_wide.png" alt="카카오 로그인 버튼" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'; // Vue 컴포넌트 정의를 위해 import
import { useAuthStore } from '../store/auth'; // 인증 관련 상태 관리 스토어 import
import { useToast } from 'vue-toastification'; // 토스트 알림 사용을 위해 import

export default defineComponent({
  name: 'SignInComponent', // 컴포넌트 이름 설정
  setup() {
    const toast = useToast(); // 토스트 알림 사용 설정

    // 토스트 메시지 출력 함수
    const showToast = () => {
      toast.success('Login Success'); // 로그인 성공 시 토스트 메시지 출력
    };

    return {
      toast, // 토스트 알림 객체 반환
      showToast, // 토스트 메시지 출력 함수 반환
    };
  },
  data() {
    return {
      email: '', // 이메일 입력 값
      password: '', // 비밀번호 입력 값
      rememberMe: false, // 아이디와 비밀번호 기억 여부
      errorMessage: '' // 오류 메시지
    };
  },
  created() {
    // rememberMe가 체크되어 있는 경우, 이메일과 비밀번호를 input에 미리 넣어줌
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser')); // 로컬 스토리지에서 rememberedUser 정보 가져오기
    if (rememberedUser) {
      this.email = rememberedUser.email; // 이메일 설정
      this.password = rememberedUser.password; // 비밀번호 설정
      this.rememberMe = true; // rememberMe 체크 상태 설정
    }
  },
  computed: {
    // 이메일이 유효한지 검사하는 계산 속성
    validEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규 표현식
      return emailRegex.test(this.email); // 이메일 유효성 검사 결과 반환
    },
  },
  methods: {
    // 로그인 처리 메서드
    handleLogin() {
      if (!this.validEmail) { // 이메일이 유효하지 않은 경우
        this.errorMessage = 'Please enter a valid email.'; // 오류 메시지 설정
        return; // 함수 종료
      }
      if (this.password.length < 6) { // 비밀번호 길이가 6자 미만인 경우
        this.errorMessage = 'Password must be at least 6 characters.'; // 오류 메시지 설정
        return; // 함수 종료
      }

      // 로컬스토리지에 저장된 이메일과 비밀번호 배열 중 입력 이메일과 비밀번호와 일치하는지 확인
      let users = JSON.parse(localStorage.getItem('userCredentials')); // 로컬 스토리지에서 사용자 자격 증명 목록 가져오기
      if (!Array.isArray(users)) { // 가져온 데이터가 배열이 아닌 경우
        users = []; // 빈 배열로 초기화
      }

      const userExists = users.some(user => user.email === this.email && user.password === this.password); // 사용자가 존재하는지 확인

      if (userExists) { // 사용자가 존재하는 경우
        const authStore = useAuthStore(); // 전역변수로 사용할 authStore 객체 가져오기
        authStore.login({ email: this.email, password: this.password }); // 인증 상태 설정
        if (this.rememberMe) { // rememberMe가 체크된 경우
          localStorage.setItem('rememberedUser', JSON.stringify({ email: this.email, password: this.password })); // 이메일과 비밀번호를 로컬 스토리지에 저장
        } else { // rememberMe가 체크되지 않은 경우
          localStorage.removeItem('rememberedUser'); // 로컬 스토리지에서 저장된 사용자 정보 제거
        }
        this.showToast(); // 토스트 메시지 출력
        this.$emit('login-success'); // 부모 컴포넌트에 로그인 성공 이벤트 발생
      } else { // 사용자가 존재하지 않는 경우
        this.errorMessage = 'Invalid email or password.'; // 오류 메시지 설정
      }
    },
  },
});
</script>

<style scoped>
/* 전체 폼 스타일 */
.signin-form {
  display: flex; /* 플렉스 레이아웃 사용 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
  background-color: #141414; /* 배경색 설정 */
}

/* 로그인 폼 컨테이너 스타일 */
.signin-container {
  width: 300px; /* 너비 설정 */
  padding: 40px; /* 내부 여백 설정 */
  background-color: #000; /* 배경색 설정 */
  border-radius: 8px; /* 모서리 둥글게 설정 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 그림자 설정 */
  color: #fff; /* 텍스트 색상 설정 */
}

/* 제목 스타일 */
.signin-title {
  font-size: 24px; /* 글꼴 크기 설정 */
  font-weight: bold; /* 굵은 글꼴 설정 */
  margin-bottom: 20px; /* 하단 여백 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
}

/* 입력 필드 스타일 */
.signin-input {
  width: 100%; /* 너비 100% 설정 */
  padding: 10px; /* 내부 여백 설정 */
  margin: 10px 0; /* 상하 여백 설정 */
  border: 1px solid #333; /* 테두리 설정 */
  border-radius: 4px; /* 모서리 둥글게 설정 */
  background-color: #333; /* 배경색 설정 */
  color: #fff; /* 텍스트 색상 설정 */
}

/* Remember me 스타일 */
.signin-remember {
  display: flex; /* 플렉스 레이아웃 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 20px; /* 하단 여백 설정 */
  font-size: 14px; /* 글꼴 크기 설정 */
}

/* 로그인 버튼 스타일 */
.signin-button {
  width: 100%; /* 너비 100% 설정 */
  padding: 10px; /* 내부 여백 설정 */
  background-color: #e50914; /* 배경색 설정 */
  color: #fff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 4px; /* 모서리 둥글게 설정 */
  font-size: 16px; /* 글꼴 크기 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  margin-bottom: 10px; /* 하단 여백 설정 */
}

.signin-button:hover {
  background-color: #f6121d; /* 호버 시 배경색 변경 */
}

/* 회원가입 버튼 스타일 */
.signup-button {
  width: 100%; /* 너비 100% 설정 */
  padding: 10px; /* 내부 여백 설정 */
  background-color: #333; /* 배경색 설정 */
  color: #fff; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 4px; /* 모서리 둥글게 설정 */
  font-size: 16px; /* 글꼴 크기 설정 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.signup-button:hover {
  background-color: #444; /* 호버 시 배경색 변경 */
}

.kakao-login-btn{
  width: 100%; /* 너비 100% 설정 */
  height: 100%; /* 높이 100% 설정 */
  display: flex; /* 플렉스 레이아웃 사용 */
  background-color: #000;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  margin-top: 10px; /* 상단 여백 설정 */
  border-radius: 4px;
  border: 1px solid #000; /* 테두리 색상 빨강 설정 */
}

/* 오류 메시지 스타일 */
.error {
  color: #e50914; /* 텍스트 색상 빨강 설정 */
  font-size: 14px; /* 글꼴 크기 설정 */
  margin-top: 10px; /* 상단 여백 설정 */
  display: block; /* 블록 요소로 설정 */
}
</style>
