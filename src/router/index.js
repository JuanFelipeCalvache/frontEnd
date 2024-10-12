import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/UserLogin.vue';
import Register from '../views/UserRegister.vue';
import HomeView from '../views/HomeView.vue';
import TermsAndConditions from '../views/TermsAndConditions.vue'; // Asegúrate de importar correctamente

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: TermsAndConditions, // Ruta a la vista de términos y condiciones
  },
  {
    path: '/',
    redirect: '/login', // Redirige al login cuando abres la página
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
