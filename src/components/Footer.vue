<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/help" class="footer-link">Help Center</router-link>
        <router-link to="/terms" class="footer-link">Terms of Use</router-link>
        <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
        <router-link to="/contact" class="footer-link">Contact Us</router-link>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 Netflix Clone. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FooterComponent',
  });
  </script>
  
  <style scoped>
  .footer {
    background-color: #141414;
    color: #ffffff;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  
  .footer-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .footer-link:hover {
    color: #e50914;
  }
  
  .footer-copyright {
    font-size: 0.8rem;
  }
  </style>
  