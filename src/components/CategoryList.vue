<template>
    <div class="category-list">
      <h2 class="category-title">{{ title }}</h2>
      <div class="category-items">
        <div v-for="item in items" :key="item.id" class="category-item">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <p class="item-name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Item {
    id: number;
    name: string;
    image: string;
  }
  
  export default defineComponent({
    name: 'CategoryListComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array as PropType<Item[]>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .category-list {
    margin: 2rem 0;
    padding: 0 1rem;
    display: block;
  }
  
  .category-title {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 1rem;
  }
  
  .category-items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
  
  .category-item {
    text-align: center;
    color: black;
  }
  
  .item-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .item-name {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  </style>
  