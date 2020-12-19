import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from "../components/About";
import Blog from "../components/Blog";
import Flag from "../components/Flag";
import Message from "../components/Message";
import Picture from "../components/Picture";
import Time from "../components/Time";
import MsgDetail from "../components/MsgDetail";
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sysy',
      name: 'message',
      component: Message
    },
    {
      path: '/flag',
      name: 'flag',
      component: Flag
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/msg',
      name: 'msgDetail',
      component: MsgDetail
    },
  ]
})
