import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
import FlowChart from '@/views/FlowChart'
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'home',
      component: () => import('@/views/home'),
      meta: { title: '流程图demo' }
=======
      name: 'FlowChart',
      component: FlowChart
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
    }
  ]
})
