import Vue from 'vue';
import Vuex from 'vuex';
import cookies from '../utils/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的收起状态
    collapsed: false,
    // 用户信息登录名
    loginName: cookies.getcookise(),
    authority: [],
    // 商品类面
    category: [],
    // 商品列表
    authorityList: [],
  },
  mutations: {
    change(state) {
      state.collapsed = !state.collapsed;
    },
    loginName(state, obj) {
      state.loginName = obj;
    },
    loginout(state) {
      state.loginName = {
        appkey: '',
        email: '',
        role: '',
        username: '',
      };
    },
    authority(state, obj) {
      state.authority = obj;
    },
    category(state, arr) {
      state.category = arr;
    },
    authorityList(state, arr) {
      state.authorityList = arr;
    },
  },
  actions: {
    loginNamelogin({
      commit,
    }, obj) {
      commit('loginName', obj);
      cookies.setcookies(obj);
    },
    loginout({
      commit,
    }) {
      cookies.removecookies();
      commit('loginout');
    },
    authority({ commit }, obj) {
      commit('authority', obj);
    },
    authorityList({ commit }, arr) {
      commit('authorityList', arr);
    },
    category({ commit }, arr) {
      commit('category', arr);
    },
  },
  modules: {},
});
