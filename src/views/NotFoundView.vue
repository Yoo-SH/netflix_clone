<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>존재하지 않는 페이지 입니다.</p>
    <router-link to="/" style="color: #f40612;">Go Back Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundViewComponent',
  };
  </script>
  
  <style scoped>
  .not-found {
    font-size: 1.5rem;
    color: #f40612;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

  }
  </style>
  