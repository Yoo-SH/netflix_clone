<template>
    <nav class="navbar">
      <div class="navbar-left">
        <router-link to="/home" class="nav-item">Home</router-link> 
        <router-link to="/popular" class="nav-item">Popular</router-link> 
        <router-link to="/search" class="nav-item">Search</router-link> 
        <router-link to="/wishlist" class="nav-item">Wishlist</router-link>
      </div>
      <div class="navbar-right">
        <router-link to="/mypage" class="nav-item">My Page</router-link>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavbarComponent',
    
  });
  </script>
  
  <style scoped>
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
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
  }
  
  .nav-item:hover {
    color: #e50914;
  }
  </style>
  