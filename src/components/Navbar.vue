<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/#" class="logo">
        <svg class="svg-inline--fa fa-ticket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ticket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="height: 100%; color: rgb(229, 9, 20);">
          <path class="" fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"></path>
        </svg>
      </router-link>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/popular" class="nav-item">Popular</router-link>
      <router-link to="/search" class="nav-item">Search</router-link>
      <router-link to="/wishlist" class="nav-item">Wishlist</router-link>
    </div>
    <div class="navbar-right">
      <router-link v-if="!isAuthenticated" to="/Sign" class="nav-item sign-button">Sign</router-link>
      <div v-else class="nav-item">
        <span class="user-email">{{ userInfo  }}</span>
      <router-link @click="logout" to="/Sign" class="nav-item logout-button">Logout</router-link>
    </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const authStore = useAuthStore();
    const { isAuthenticated, user } = storeToRefs(authStore);
    const { logout } = authStore;

    return {
      isAuthenticated,
      userInfo: user?.value?.email || user?.value?.userInfo.properties.nickname || '',
      logout,
    };
  },
});
</script>

<style scoped>
/* 기존의 스타일 그대로 유지 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #141414;
  color: #ffffff;
  margin: 0;
}

.navbar-left,
.navbar-right {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;

}

.nav-item:hover {
  color: #e50914;
}

.navbar-left a svg {
  margin-right: 1rem;
  height: fit-content;
  width: 27px;
}

/* 로그인 버튼 스타일 */
.sign-button {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #e50914;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  height: auto;
}

.sign-button:hover {
  background-color: #f51b26;
  text-decoration: none;
}

/* 로그아웃 버튼 스타일 */
.logout-button {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #e50914;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logout-button:hover {
  background-color: #e50914;
  color: #ffffff;
}

.user-email{
  margin-right: 1rem;
  font-weight: bold;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }

  .mobile-menu-icon {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: #141414;
    padding: 0.5rem;
  }

  .navbar-links.mobile-menu-open {
    display: flex;
  }

  .navbar-left {
    width: 100%;
    justify-content: space-between;
  }

   /* 기존에 .navbar-right가 display: none; 이었던 부분 수정 */
   .navbar-right .nav-item {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}
</style>
