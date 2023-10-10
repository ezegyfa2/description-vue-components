export default {
    install(Vue) {
        Vue.component('description-section-container', () => import('./Container/Component.vue'));
        Vue.component('black-description-section', () => import('./BlackDescription/Component.vue'));
        Vue.component('white-description-section', () => import('./WhiteDescription/Component.vue'));
    },
};
