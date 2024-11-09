import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

const options = {
    position: 'top-right',
    timeout: 0, // 자동으로 사라지지 않도록 설정
    closeOnClick: true,
  };
  

const pinia = createPinia() // 전역 상태 관리 라이브러리인 Pinia를 생성합니다.
createApp(App).use(router).use(pinia).use(Toast,options).mount('#app')
