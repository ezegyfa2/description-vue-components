export default {
	install(Vue) {
		Vue.component('description-section-container', require('./Container/Component.vue').default);
		Vue.component('black-description-section', require('./BlackDescription/Component.vue').default);
		Vue.component('white-description-section', require('./WhiteDescription/Component.vue').default);
	}
};