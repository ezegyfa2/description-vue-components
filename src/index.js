export default {
    install(Vue) {
        registerVueComponent(
            'description-section-container',
            require('./Container/Component.vue').default,
            Vue,
			'description-vue-components/Container/Component.vue'
        );
        registerVueComponent(
            'black-description-section',
            require('./BlackDescription/Component.vue').default,
            Vue,
			'description-vue-components/BlackDescription/Component.vue'
        );
        registerVueComponent(
            'white-description-section',
            require('./WhiteDescription/Component.vue').default,
            Vue,
			'description-vue-components/WhiteDescription/Component.vue'
        );
    },
};
