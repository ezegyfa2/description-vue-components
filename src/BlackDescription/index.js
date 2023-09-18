export default {
    install(Vue) {
        require('../Description').default.install(Vue)

        registerVueComponent(
            'black-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}