<template>
  <div id="app">
    <nav>
      <NavbarComponent />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
  },
});
</script>
