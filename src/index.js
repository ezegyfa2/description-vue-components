import BlackDescription from "./BlackDescription.vue";
import Container from "./Container.vue";
import WhiteDescription from "./WhiteDescription.vue";

export default {
	install(Vue) {
		Vue.component('description-container', Container.default);
		Vue.component('black-description', BlackDescription.default);
		Vue.component('white-description', WhiteDescription.default);
	}
};