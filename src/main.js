// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import VueFormWizard from 'vue-form-wizard'
import { DatePicker, TimeSelect } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

// CSS
import 'vuesax/dist/vuesax.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


Vue.config.productionTip = false
locale.use(lang)
Vue.use(Vuesax)
Vue.use(VueFormWizard)
Vue.use(DatePicker);
Vue.use(TimeSelect);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
