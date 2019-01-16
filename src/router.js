import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NavbarHome from './components/NavbarHome.vue'
import NavbarAbout from './components/NavbarAbout.vue'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: Home,
      navbar: NavbarHome,
    }
  }, {
    path: '/:date',
    name: 'about',
    components: {
      default: About,
      navbar: NavbarAbout,

    }
  }]
})