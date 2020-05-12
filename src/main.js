import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './lang/lang' // 語言包
import ElementUI from 'element-ui'; // element
import 'element-ui/lib/theme-chalk/index.css';
import * as api from './http'; // api
import moment from "moment"; // 時間轉換
import './assets/css/reset.css'; // 
import './assets/css/main.css';
import './assets/css/RWD.css';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import locale from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(ElementUI, { locale });

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//全局方法
Vue.prototype.$moment = moment;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
