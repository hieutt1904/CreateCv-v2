import Vue from 'vue';
import App from './App.vue';
import router from './router';

//store
import store from './store';

//i18n
import VueI18n from 'vue-i18n';
import i18n from './langs/i18n';
Vue.use(VueI18n);

//element UI
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const mainApp = new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app');
export default mainApp;
