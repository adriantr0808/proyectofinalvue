import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/navegacion/Home';
import Tabla from './components/navegacion/TablaMultiplicar';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: Home},
  {path: '/', component: Home},
  {path: '/tabla', component: Tabla}

]


const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
