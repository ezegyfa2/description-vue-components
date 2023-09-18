export default {
    install(Vue) {
        require('../Description').default.install(Vue)

        registerVueComponent(
            'white-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}