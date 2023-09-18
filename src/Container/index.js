export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'description-section-container',
            require('./Component.vue').default,
            Vue
        )
    }
}