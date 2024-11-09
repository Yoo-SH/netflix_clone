import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'; // 기본 스타일 가져오기

const options = {
    position: 'top-center',  // 중앙 상단에 표시하여 주목도 향상
    timeout: 3000,
    closeOnClick: true,
    toastClassName: "netflix-toast",
    bodyClassName: "netflix-toast-body",
  };

const pinia = createPinia() // 전역 상태 관리 라이브러리인 Pinia를 생성합니다.
createApp(App).use(router).use(pinia).use(Toast,options).mount('#app')

