import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage'
import WaterfallFlow from '../components/WaterfallFlow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }, {
      path: '/WaterfallFlow',
      name: 'WaterfallFlow',
      component: WaterfallFlow
    }
  ]
})
