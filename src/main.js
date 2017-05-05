import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource' //数据交互
import 'element-ui/lib/theme-default/index';    // 默认主题
import './assets/css/common'

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');