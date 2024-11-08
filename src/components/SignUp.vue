<!-- SignUp.vue -->
<template>
    <div class="signup-form">
      <div class="signup-container">
        <h2 class="signup-title">Sign Up</h2>
        <input type="email" v-model="email" class="signup-input" placeholder="Enter your email" />
        <!-- 이메일이 유효하지 않을 경우 오류 메시지 출력 -->
        <span v-if="!validEmail" class="error">Invalid email address</span>
        <input type="password" v-model="password" class="signup-input" placeholder="Enter your password" />
        <input type="password" v-model="confirmPassword" class="signup-input" placeholder="Confirm your password" />
        <!-- 비밀번호가 일치하지 않을 경우 오류 메시지 출력 -->
        <span v-if="!passwordsMatch" class="error">Passwords do not match</span>
        <div class="signup-terms">
          <!-- 약관 동의 체크박스 -->
          <input type="checkbox" v-model="agreeToTerms" /> <span>I agree to the terms and conditions</span>
        </div>
        <button @click="handleSignup" class="signup-button">Sign Up</button>
        <!-- 로그인 폼으로 전환하는 버튼 -->
        <button @click="$emit('switch-form')" class="signin-button">Go to Sign In</button>
        <!-- 회원가입 실패 시 오류 메시지 출력 -->
        <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
      </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SignUpComponent',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        errorMessage: ''
      };
    },
    computed: {
      // 이메일이 유효한지 검사하는 계산 속성
      validEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
      },
      // 비밀번호와 확인 비밀번호가 일치하는지 검사하는 계산 속성
      passwordsMatch() {
        return this.password === this.confirmPassword;
      },
    },
    methods: {
      // 회원가입 처리 메서드
      handleSignup() {
        if (!this.validEmail) {
          this.errorMessage = 'Please enter a valid email.';
          return;
        }
        if (this.password.length < 6) {
          this.errorMessage = 'Password must be at least 6 characters.';
          return;
        }
        if (!this.passwordsMatch) {
          this.errorMessage = 'Passwords do not match.';
          return;
        }
        if (!this.agreeToTerms) {
          this.errorMessage = 'You must agree to the terms and conditions.';
          return;
        }
  
        // 예시를 위한 회원가입 성공 가정
        this.$emit('signup-success');
      },
    },
  });
</script>

<style scoped>
/* 전체 폼 스타일 */
.signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #141414;
}

/* 회원가입 폼 컨테이너 스타일 */
.signup-container {
  width: 300px;
  padding: 40px;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #fff;
}

/* 제목 스타일 */
.signup-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* 입력 필드 스타일 */
.signup-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}

/* 약관 동의 스타일 */
.signup-terms {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}

/* 회원가입 버튼 스타일 */
.signup-button {
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

.signup-button:hover {
  background-color: #f6121d;
}

/* 로그인 버튼 스타일 */
.signin-button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signin-button:hover {
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
