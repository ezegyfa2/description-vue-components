export default {
    install(Vue) {
        require('../Description').default.install(Vue)

        Vue.component('white-description-section', () => import('./Component.vue'))
    }
}