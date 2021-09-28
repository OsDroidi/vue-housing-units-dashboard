import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  BootstrapVue,
  IconsPlugin,
  BIconStarFill,
  BIconHeart,
  BIconMapFill,
  BIconPersonFill,
  BIconHouseFill,
  BIconArrowLeftCircleFill,
} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('BIconStarFill', BIconStarFill)
Vue.component('BIconHeart', BIconHeart)
Vue.component('BIconMapFill', BIconMapFill)
Vue.component('BIconPersonFill', BIconPersonFill)
Vue.component('BIconHouseFill', BIconHouseFill)
Vue.component('BIconArrowLeftCircleFill', BIconArrowLeftCircleFill)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
