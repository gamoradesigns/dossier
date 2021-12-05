import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/assets/css/styles.css')


//  ordered animaitions

import FirstIn from "./directives/firstIn"
Vue.directive('firstIn', FirstIn)

import SecondIn from "./directives/secondIn"
Vue.directive('secondIn', SecondIn)

import ThirdIn from "./directives/thirdIn"
Vue.directive('thirdIn', ThirdIn)

import FourthIn from "./directives/fourthIn"
Vue.directive('fourthIn', FourthIn)


// spare fade in animaition 
// import PageFadeIn from "./directives/pageFadeIn"
// Vue.directive('pageFadeIn', PageFadeIn)



// old animations - try not to use -- buggy
// import ScrollAnimation from "./directives/scrollanimation"
// import ScrollFadingAnimation from "./directives/scrollfadinganimation"
// import FallingAnimation from "./directives/fallinganimation"
// import AppearOnScroll from "./directives/appearOnScroll" - in and out on scroll - buggy
// Vue.directive('appearOnScroll', AppearOnScroll)
// Vue.directive('scrollanimation', ScrollAnimation)
// Vue.directive('scrollfadinganimation', ScrollFadingAnimation)
// Vue.directive('fallinganimation', FallingAnimation)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')