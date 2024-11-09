<template>
    <div id="app">
      <transition name="fade">
        <!-- currentComponent 변수를 사용하여 SignIn과 SignUp 컴포넌트를 전환하는 부분 -->
        <component :is="currentComponent" @switch-form="switchForm" @login-success="navigateHome" @signup-success="navigateSignin"/>
      </transition>
    </div>
  </template>
  
  <script>
  import SignInComponent from '../components/SignIn.vue';
  import SignUpComponent from '../components/SignUp.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SignViewComponent',
    data() {
      return {
        currentComponent: 'SignInComponent', // 초기 컴포넌트는 SignIn으로 설정
      };
    },
    components: {
      SignInComponent,
      SignUpComponent,
    },
    methods: {
      // SignIn과 SignUp 컴포넌트를 전환하는 메서드
      switchForm() {
        this.currentComponent = this.currentComponent === 'SignInComponent' ? 'SignUpComponent' : 'SignInComponent';
      },
      // 로그인 성공 시 홈 화면으로 이동하는 메서드
      navigateHome() {
        this.$router.push('/');
      },
      // 회원가입 성공 시 로그인 화면으로 전환하는 메서드
      navigateSignin() {
        this.currentComponent = 'SignInComponent';
      }
    },
  });
  </script>
  
  <style>
  /* 컴포넌트 전환 시 페이드 효과 적용 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
  
  