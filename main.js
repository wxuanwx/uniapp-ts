import App from './App'
import uvUI from '@/uni_modules/uv-ui-tools'
import Utils from '@/utils/index';
import config from '@/common/config';
import store from '@/store';

uni.$Utils = Utils;

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(uvUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

App.mpType = 'app';
const app = new Vue({
	...App,
	store
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia';
export function createApp() {
  const app = createSSRApp(App)
	app.use(Pinia.createPinia());
	app.use(uvUI);
  return {
    app,
		Pinia
  }
}
// #endif