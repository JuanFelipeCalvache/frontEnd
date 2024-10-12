<!-- src/views/Home.vue -->
<template>
    <MainLayout>
      <ApiButtom />
      <HolaMundo />
    </MainLayout>
  </template>
  
  <script setup>
  import MainLayout from '../layouts/MainLayout.vue';
  import ApiButtom from '@/components/ApiButtom.vue';
  </script>
  
  <style scoped>
  /* Add view-specific styles here */
  </style>
  