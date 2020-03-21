import Vue from 'vue'
import Router from 'vue-router'
//import components
import HelloWorld from '@/components/HelloWorld'
import HelloWorldTest from '@/components/HelloWorldTest'
import boy_ElementUITest from '@/components/UITest/ElementUITest'

//useful components

import boy_userManagement_backEnd from '@/components/Common/backEnd/userManagement'
import boy_userLogin_backEnd from '@/components/Common/backEnd/userLogin'
import boy_platformAppManagement_backEnd from '@/components/Common/backEnd/platformAppManagement'
import boy_platformUserAppAccessManagement_backEnd from '@/components/Common/backEnd/platformUserAppAccessManagement'
import boy_platformBizDomainManagement_backEnd from '@/components/Common/backEnd/platformBizDomainManagement'
import boy_DevLangManagement_backEnd from '@/components/Common/backEnd/DevLangManagement'

//import views
import adminHomeNavPage from '@/views/backEnd/adminHomeNavPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorldTest',
      name: 'HelloWorldTest',
      component: HelloWorldTest
    },
    {
      path: '/boy_ElementUITest',
      name: 'boy_ElementUITest',
      component: boy_ElementUITest
    },
    {
      path: '/boy_userManagement_backEnd',
      name: 'boy_userManagement_backEnd',
      component: boy_userManagement_backEnd 
      
    },
    {
      path: '/boy_userLogin_backEnd',
      name: 'boy_userLogin_backEnd',
      component: boy_userLogin_backEnd 
    },
    {
      path: '/boy_platformAppManagement_backEnd',
      name: 'boy_platformAppManagement_backEnd',
      component: boy_platformAppManagement_backEnd 
    },
    {
      path: '/boy_platformUserAppAccessManagement_backEnd',
      name: 'boy_platformUserAppAccessManagement_backEnd',
      component: boy_platformUserAppAccessManagement_backEnd 
    },
    {
      path: '/boy_platformBizDomainManagement_backEnd',
      name: 'boy_platformBizDomainManagement_backEnd',
      component: boy_platformBizDomainManagement_backEnd 
      
    },
    {
      path: '/boy_DevLangManagement_backEnd',
      name: 'boy_DevLangManagement_backEnd',
      component: boy_DevLangManagement_backEnd 
    },
    {   

      path: '/adminHomeNavPage',
      name: 'adminHomeNavPage',
      component: adminHomeNavPage 
    }
  ]
})
