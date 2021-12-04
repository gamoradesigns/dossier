import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/assets/css/styles.css')


import ScrollAnimation from "./directives/scrollanimation"
import ScrollFadingAnimation from "./directives/scrollfadinganimation"
import FallingAnimation from "./directives/fallinganimation"
import AppearOnScroll from "./directives/appearOnScroll"





Vue.directive('appearOnScroll', AppearOnScroll)
Vue.directive('scrollanimation', ScrollAnimation)
Vue.directive('scrollfadinganimation', ScrollFadingAnimation)
Vue.directive('fallinganimation', FallingAnimation)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')