<!-- src/components/LoginForm.vue -->
<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ApiService from '../services/ApiService'; // Se usará para conectarse al backend
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = async () => {
    try {
      const response = await ApiService.login({ email: email.value, password: password.value });
      console.log(response.data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
  }
  </style>
  