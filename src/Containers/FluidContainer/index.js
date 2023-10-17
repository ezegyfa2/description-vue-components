export default {
    install(Vue) {
        require('../Container').default.install(Vue)

        Vue.component('fluid-description-section-container', () => import('./Component.vue'))
    }
}