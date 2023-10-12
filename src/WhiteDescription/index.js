export default {
    install(Vue) {
        require('../Description').default.install(Vue)
        require('helper-vue-components/image').default.install(Vue)

        Vue.component('b-lazy-image', () => import('bootstrap-vue').then(module => module.BImgLazy))
        Vue.component('white-description-section', () => import('./Component.vue'))
    }
}