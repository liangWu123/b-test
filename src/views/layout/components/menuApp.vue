<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[/(\w+)$/.exec(this.$router.history.current.matched[1].path)[0]]"
      :default-open-keys="[
        this.$router.history.current.matched[0].path?
        this.$router.history.current.matched[0].path:'/'
      ]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <template v-for="it in authority">
        <a-sub-menu :key="it.path" v-if="it.meta.hidden">
          <span slot="title"
            ><a-icon :type="it.meta.type" /><span>
              {{ it.meta.title }}
            </span></span
          >
          <template :v-if="it.children">
            <a-menu-item :key="ci.path" v-for="ci in it.children">

              <router-link :to="{ name: ci.name }">
                <a-icon :type="ci.meta.type" />
                {{ ci.meta.title }}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authority: [],
    };
  },
  created() {
    this.authority = this.$store.state.authority;
  },
};
</script>
