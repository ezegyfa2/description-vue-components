export default {
    install(Vue) {
        require('../Description').default.install(Vue)
        require('helper-vue-components/image').default.install(Vue)

        Vue.component('black-description-section', () => import('./Component.vue'))
    }
}