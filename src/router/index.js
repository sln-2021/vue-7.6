import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/Layout';
import About from '../views/about/About';
import Demo from '../views/Demo.vue';
import Children from '../views/about/children.vue';
import Test from '../views/about/test2.vue';
Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: About,
        icon: 'el-icon-s-home',
      },
      {
        path: 'children',
        name: 'children',
        component: Children,
        icon: 'el-icon-s-tools',
      },
      {
        path: 'test2',
        name: 'test2',
        component: Test,
        icon: 'el-icon-setting',
      },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    component: Layout,
    children: [
      {
        path: 'test2',
        name: 'test2',
        component: Demo,
      },
    ],
  },
];
export default new Router({
  routes,
});
