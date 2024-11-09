<!-- SignIn.vue -->
<template>
  <div class="signin-form">
    <div class="signin-container">
      <h2 class="signin-title">Login</h2>
      <!-- 이메일이 유효하지 않을 경우 오류 메시지 출력 -->
      <span v-if="!validEmail" class="error">Invalid email address</span>
      <input type="email" v-model="email" class="signin-input" placeholder="Enter your email" />
      <input type="password" v-model="password" class="signin-input" placeholder="Enter your password" />
      <div class="signin-remember">
        <!-- 로그인 시 아이디와 비밀번호를 기억할지 여부 선택 -->
        <input type="checkbox" v-model="rememberMe" /> <span>Remember me</span>
      </div>
      <button @click="handleLogin" class="signin-button">Login</button>
      <!-- 회원가입 폼으로 전환하는 버튼 -->
      <button @click="$emit('switch-form')" class="signup-button">Go to Sign Up</button>
      <!-- 로그인 실패 시 오류 메시지 출력 -->
      <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../store/auth';
import { useToast } from 'vue-toastification';

export default defineComponent({
  name: 'SignInComponent',
  setup() {
    const toast = useToast();

    // 토스트 메시지 출력 함수
    const showToast = () => {
      toast.success('Login Success');
    };

    return {
      toast,
      showToast,
    };
  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      errorMessage: ''
    };
  },
  created() {
    // rememberMe가 체크되어 있는 경우, 이메일과 비밀번호를 input에 미리 넣어줌
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (rememberedUser) {
      this.email = rememberedUser.email;
      this.password = rememberedUser.password;
      this.rememberMe = true;
    }
  },
  computed: {
    // 이메일이 유효한지 검사하는 계산 속성
    validEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
  },
  methods: {
    // 로그인 처리 메서드
    handleLogin() {
      if (!this.validEmail) {
        this.errorMessage = 'Please enter a valid email.';
        return;
      }
      if (this.password.length < 6) {
        this.errorMessage = 'Password must be at least 6 characters.';
        return;
      }

      // 로컬스토리지에 저장된 이메일과 비밀번호 배열 중 입력 이메일과 비밀번호와 일치하는지 확인
      let users = JSON.parse(localStorage.getItem('userCredentials'));
      if (!Array.isArray(users)) {
        users = [];
      }

      const userExists = users.some(user => user.email === this.email && user.password === this.password);

      if (userExists) {
        // 전역변수로 사용할 authStore 객체 가져와서 넣기. 로컬스토리지에도 저장됨.
        const authStore = useAuthStore();
        authStore.login({ email: this.email, password: this.password });
        if (this.rememberMe) {
          // rememberMe가 체크된 경우, 이메일과 비밀번호를 localStorage에 저장
          localStorage.setItem('rememberedUser', JSON.stringify({ email: this.email, password: this.password }));
        } else {
          localStorage.removeItem('rememberedUser');
        }
        this.showToast(); // 토스트 메시지 출력
        this.$emit('login-success');
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    },
  },
});
</script>

<style scoped>
/* 전체 폼 스타일 */
.signin-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #141414;
}

/* 로그인 폼 컨테이너 스타일 */
.signin-container {
  width: 300px;
  padding: 40px;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #fff;
}

/* 제목 스타일 */
.signin-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* 입력 필드 스타일 */
.signin-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}

/* Remember me 스타일 */
.signin-remember {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}

/* 로그인 버튼 스타일 */
.signin-button {
  width: 100%;
  padding: 10px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.signin-button:hover {
  background-color: #f6121d;
}

/* 회원가입 버튼 스타일 */
.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #444;
}

/* 오류 메시지 스타일 */
.error {
  color: #e50914;
  font-size: 14px;
  margin-top: 10px;
  display: block;
}
</style>
