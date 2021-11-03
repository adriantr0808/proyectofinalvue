import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/navegacion/Home';
import Tabla from './components/navegacion/TablaMultiplicar';
import Deportes from './components/Deportes';
import Numeros from './components/Numeros';
import ComicPadre from './components/ComicPadre';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Home },
  { path: '/tabla', component: Tabla },
  { path: '/deportes', component: Deportes },
  { path: '/numeros', component: Numeros },
  { path: '/comics', component: ComicPadre }


]


const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
