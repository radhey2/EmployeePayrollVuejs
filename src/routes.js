import {createRouter,createWebHistory} from 'vue-router'
import home from './components/home.vue'
import form from './components/form.vue'
import EditForm from './components/EditForm.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    //  Added our new route file named Emp2.vue
    {
        path: '/profile',
        name: 'form',
        component: form
  
    },
      {
        path: '/editemployee/:id?',
        name: 'EditForm',
        component: EditForm
      }  
];
const router = createRouter({
    history: createWebHistory(),
    routes
    })
export default router