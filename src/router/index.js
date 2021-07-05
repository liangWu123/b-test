import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import Login from '../views/Login.vue';
import store from '../store';

Vue.use(VueRouter);

const asyncRoutes = [{
  path: '/commodity',
  name: 'Commodity',
  component: Home,
  meta: {
    title: '商品',
    hidden: true,
    type: 'wallet',

  },
  children: [{
    path: 'list',
    name: 'List',
    component: () => import('../components/List.vue'),
    meta: {
      title: '商品列表',
      hidden: true,
      type: 'bars',

    },
  }, {
    path: 'add',
    name: 'Add',
    component: () => import('../components/Add.vue'),
    meta: {
      title: '添加商品',
      hidden: true,
      type: 'folder-add',
    },
  }, {
    path: 'category',
    name: 'Category',
    component: () => import('../components/Category.vue'),
    meta: {
      title: '商品类目',
      hidden: true,

    },
  },

  ],
}];

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    title: '登录',
    hidden: false,

  },
},
{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: {
    path: '/statistics',
  },
  beforeEnter: (to, from, next) => {
    const arr = asyncRoutes.filter((it) => {
      const children = it;
      if (it.name === 'Category') {
        return false;
      }
      children.children = children.children.filter((cit) => cit.name !== 'Category');
      return true;
    });
    store.dispatch('authority', routes.concat(arr));
    return next();
  },

  meta: {
    title: '首页',
    hidden: true,
    type: 'home',
  },
  children: [{
    path: 'statistics',
    component: () => import('../components/Statistics.vue'),
    name: 'Statistics',
    meta: {
      title: '统计',
      hidden: true,
      type: 'line-chart',
    },
  }],
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && store.state.loginName.username === undefined) {
    return next('/login');
  }
  if (store.state.loginName.role === 'coustomer') {
    const arr = asyncRoutes.filter((it) => {
      const children = it;
      if (it.name === 'Category') {
        return false;
      }
      children.children = children.children.filter((cit) => cit.name !== 'Category');
      return true;
    });
    store.dispatch('authority', routes.concat(arr));
    return next();
  }
  return next();
});

router.addRoutes(asyncRoutes);

export default router;
