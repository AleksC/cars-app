import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Cars from './pages/Cars.vue'
import AddCar from './pages/AddCar.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: Cars },
  { path: '/add', component: AddCar },
  { path: '/edit/:id', component: AddCar, name: 'edit' },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
