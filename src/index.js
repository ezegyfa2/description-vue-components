export default {
	install(Vue) {
		registerVueComponent('description-section-container', require('./Container/Component.vue').default, Vue);
		registerVueComponent('black-description-section', require('./BlackDescription/Component.vue').default, Vue);
		registerVueComponent('white-description-section', require('./WhiteDescription/Component.vue').default, Vue);
	}
};