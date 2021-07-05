<template>
  <div class="minput">
    <a-form :form="form" layout="inline">
      <a-form-item label="搜索关键字">
        <a-input placeholder="input" v-model="form.searchWord" />
      </a-form-item>
      <a-form-item label="商品类目">
        <a-select
          placeholder="Select a option and change input text above"
          style="width:100px"
          v-model="form.category"
        >
          <a-select-option
            v-for="item in this.$store.state.category"
            :key="item._id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 8, offset: 12 }">
        <a-button type="primary" html-type="submit" @click="handler">
          搜索
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '../../api/category';
import products from '../../api/products';

export default {
  data() {
    return {
      form: {
        searchWord: undefined,
        category: undefined,
      },
    };
  },
  methods: {
    handler() {
      products.getProductsList(this.form).then((p) => {
        const data = p.data.map((i) => {
          const {
            _id: key,
            id,
            title,
            desc,
            category: categor,
            price,
            price_off: priceOff,
            tags: [tags],
            inventory,
            status: statue,
          } = i;
          const status = statue === 1 ? '上架' : '下架';
          let category;
          this.$store.state.category.forEach((element) => {
            if (element.id === categor) {
              category = element.name;
            }
            return 0;
          });
          return {
            key,
            id,
            title,
            desc,
            category,
            price,
            priceOff,
            tags,
            inventory,
            status,
          };
        });
        this.$store.dispatch('authorityList', data);
      });
    },
  },
  mounted() {
    api.getCategorylist().then((r) => {
      this.$store.dispatch('category', r.data);
    });
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/filter.less");
</style>
