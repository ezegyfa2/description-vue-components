export default {
    install(Vue) {
        registerVueComponent(
            'white-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}