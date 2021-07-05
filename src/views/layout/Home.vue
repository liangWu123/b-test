<template>
  <div class="home">
    <menu-app :key="key" />
    <div :class="{ contenter: true, changeC: $store.state.collapsed }">
      <slider-nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menuApp from './components/menuApp.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  components: {
    menuApp,
    SliderNav,
  },
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
