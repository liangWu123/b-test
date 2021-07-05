<template>
  <div class="mail-app">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      {{ router[0].meta.title }}/{{ router[1].meta.title }}
    </div>
    <ul class="uesr-info">
      <li>{{ $store.state.loginName.username }}<a-icon type="down" /></li>
      <li @click="loginout">退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: [],
    };
  },
  beforeMount() {
    this.router = this.$router.currentRoute.matched;
  },
  watch: {
    $route: {
      handler() {
        this.changeRouter();
      },
      immidiate: true,
    },
  },
  methods: {

    toggleCollapsed() {
      this.$store.commit('change');
    },
    loginout() {
      this.$store.dispatch('loginout');
      this.$router.push('/login');
    },
    changeRouter() {
      this.router = this.$router.currentRoute.matched;
    },
  },
};
</script>
