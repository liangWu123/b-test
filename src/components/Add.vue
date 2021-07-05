<template>
  <div>
    <a-steps :current="current" class="steps">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <commodity-info :current="current" v-if="current === 0" @next="next" :form="form" />
      <commodity-sales v-else @prev="prev" :form="form" @click="upLoad" />
      <!-- <m-table/> -->
    </div>
  </div>
</template>
<script>
import CommodityInfo from './component/CommodityInfo.vue';
import CommoditySales from './component/CommoditySales.vue';
import api from '../api/products';
// import mTable from './component/mTable1111.vue';

export default {
  components: {
    CommodityInfo,
    CommoditySales,
    // mTable,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
      form: {
        title: '',
        category: undefined,
        tags: [],
        desc: '',
        c_items: '',
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: '',
        images: [],
        status: 1,
      },
    };
  },
  methods: {
    next() {
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
    upLoad() {
      api.postProductsAdd(this.form).then((res) => {
        if (res.data.status) {
          this.$message.success('新增成功');
          this.$router.push('/commodity/list');
        }
      });
    },
  },
};
</script>
<style scoped>
.steps {
  margin: 30px auto;
  width: 60%;
}
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 50px;
}
</style>
