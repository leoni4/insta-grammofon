import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
