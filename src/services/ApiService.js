// src/services/ApiService.js
import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Cambiar a la URL del backend

export default {
  async login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  },
  async getUsers(){
    return axios.get(`${API_URL}/usuarios`);
  },
  async setUser(usuario) {
    try {
      const response = await axios.post(`${API_URL}/usuarios`, usuario);
      return response;  // Retorna la respuesta completa
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  }
};
