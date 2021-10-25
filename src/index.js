export default {
	install(Vue) {
		Vue.component('description-section-container', require('./Container.vue').default);
		Vue.component('black-description-section', require('./BlackDescription.vue').default);
		Vue.component('white-description-section', require('./WhiteDescription.vue').default);
	}
};