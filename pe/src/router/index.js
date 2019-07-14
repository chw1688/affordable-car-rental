import Vue from 'vue'
import Router from 'vue-router'
import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"
// import index from '../components/index/index'
import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/StoreDetails',
      name: 'StoreDetails',
      component:StoreDetails
    },
    {
      path:"/carDetails",
      name:"CarDetails",
      component:CarDetails
    },
    {
      path: '/comments',
      name: 'Pcomments',
      component: Pcomments
    },
    {
      path:'/evaluation',
      name:'Evaluation',
      component:Evaluation
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge
    },
    {
      path:'/choice',
      name:'Choice',
      component:Choice
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
  ]
})
