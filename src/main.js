import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less';

Vue.config.productionTip = false
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
