// src/stores/auth.ts
import { defineStore } from 'pinia';

// Pinia store를 정의하여 사용자 인증 상태를 관리합니다.
export const useAuthStore = defineStore('auth', {
  // state: store에서 관리할 상태를 정의합니다.
  state: () => ({
    // 사용자가 로그인했는지 여부를 나타내는 상태입니다. localStorage에서 'authUser' 항목을 확인하여 설정합니다.
    isAuthenticated: !!localStorage.getItem('authUser'),
    // 로그인한 사용자의 정보를 저장합니다. localStorage에서 'authUser' 항목을 가져와 JSON 객체로 변환하여 저장합니다.
    user: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser') || '{}') : null,
  }),
  actions: {
    // 사용자가 로그인할 때 호출되는 메서드입니다.
    login(userData: object) {
      // 로그인 상태를 true로 설정합니다.
      this.isAuthenticated = true;
      // 사용자 정보를 설정합니다.
      this.user = userData;
      // localStorage에 사용자 정보를 JSON 문자열로 저장하여 새로고침 후에도 로그인 상태를 유지합니다.
      localStorage.setItem('authUser', JSON.stringify(userData));
    },
    // 사용자가 로그아웃할 때 호출되는 메서드입니다.
    logout() {
      // 로그인 상태를 false로 설정합니다.
      this.isAuthenticated = false;
      // 사용자 정보를 null로 설정합니다.
      this.user = null;
      // localStorage에서 'authUser' 항목을 제거하여 로그인 상태를 초기화합니다.
      localStorage.removeItem('authUser');
    },
  },
});
