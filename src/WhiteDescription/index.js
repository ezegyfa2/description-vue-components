export default {
    install(Vue) {
        require('helper-vue-components/bootstrapPackage').default.install(Vue)

        registerVueComponent(
            'white-description-section',
            require('./Component.vue').default,
            Vue,
            'description-vue-components/WhiteDescription/Component.vue'
        )
    }
}