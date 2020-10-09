import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import axios from './axios'
import store from './store'
import mock from './mock'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('document-click', {
    bind(el, binding, vnode) {
        document.addEventListener('click', binding.value, false)
    }
    // inserted () {
    //   console.log('insert')
    // },
    // update () {
    //   console.log('update')
    // }
})

/* eslint-disable no-new */
Vue.prototype.axios = axios

new Vue({
    el: '#app',
    router,
    store,
    mock,
    render: h => h(App)

    // components: { App },
    // template: '<App/>'
})