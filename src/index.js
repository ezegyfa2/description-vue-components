export default {
	install(Vue) {
		Vue.component('description-container', require('./Container.vue').default);
		Vue.component('black-description', require('./BlackDescription.vue').default);
		Vue.component('white-description', require('./WhiteDescription.vue').default);
	}
};