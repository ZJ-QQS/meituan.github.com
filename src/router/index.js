import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import goodsList from '@/page/goodList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/ChangeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: '/s:name',
      name: 'goods',
      component: goodsList
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: ChangeCity
    }
    ]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [{
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    ]
  }
  ]
})
// 使用懒加载优化组件
