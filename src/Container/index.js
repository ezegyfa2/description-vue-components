export default {
    install(Vue) {
        require('helper-vue-components/bootstrapPackage').default.install(Vue)

        registerVueComponent(
            'description-section-container',
            require('./Component.vue').default,
            Vue,
			'description-vue-components/Container/Component.vue'
        )
    }
}