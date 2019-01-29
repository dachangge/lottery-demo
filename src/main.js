import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import { router } from './router'

Vue.config.productionTip = false
Vue.use(VueTouchRipple)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
