<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="handleRegister">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="correo" required />

      <label for="cedula">Cédula:</label>
      <input type="text" id="cedula" v-model="cedula" required />

      <label for="telefono">Teléfono:</label>
      <input type="text" id="telefono" v-model="telefono" />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <label>
        <input type="checkbox" v-model="acceptTerms" required />
        Acepto los <a href="/terms">términos y condiciones</a>
      </label>

      <button type="submit" :disabled="!acceptTerms" router-link to="/login">Registrar</button>
    </form>

    <p>¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ApiService from '../services/ApiService';

// Definir variables reactivas
const nombre = ref('');
const correo = ref('');
const cedula = ref('');
const telefono = ref('');
const password = ref('');
const acceptTerms = ref(false);

// Función para manejar el registro de usuario
const handleRegister = async () => {
  try {
    const user = {
      nombre: nombre.value,
      correo: correo.value,
      password: password.value,
      cedula: cedula.value,
      telefono: telefono.value,
      creadoPor: 'system', // Cambiar según el valor adecuado
      editadoPor: 'system',
    };

    // Llamar al servicio API para registrar el usuario
    const response = await ApiService.setUser(user);
    console.log('Usuario registrado con éxito:', response);
  } catch (error) {
    console.error('Error durante el registro:', error);
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

button:hover:enabled {
  background-color: #369b73;
}

p {
  text-align: center;
}
</style>
