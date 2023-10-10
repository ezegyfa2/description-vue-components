export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        Vue.component('description-section-container', () => import('./Component.vue'))
    }
}