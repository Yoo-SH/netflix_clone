import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia() // 전역 상태 관리 라이브러리인 Pinia를 생성합니다.
createApp(App).use(router).use(pinia).mount('#app')
