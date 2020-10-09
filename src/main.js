import Vue from 'vue'
import '@/assets/css/main.css'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './axios'
import store from './store'
import mock from './mock'
import router from './router'

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