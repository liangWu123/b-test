<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="title" label="副标题" prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>

    <a-form-model-item label="商品类目">
      <a-select v-model="form.category" placeholder="请选择类目" prop="category">
        <a-select-option
          v-for="c in $store.state.category"
          :key="c.id"
          :value="c.id"
          @click="changIndex(c.id)"
        >
          {{ c.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_items" placeholder="请选择所属子类目">
        <template v-if="index">
          <a-select-option
            v-for="ti in $store.state.category[index - 1].c_items"
            :key="ti"
            :value="ti"
          >
            {{ ti }}
          </a-select-option>
        </template>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
      <a-select
        mode="tags"
        default-value="[]"
        style="width: 100%"
        v-model="form.tags"
        :token-separators="[',']"
        placeholder="请选择标签"
      >
        <a-select-option v-for="i in tags" :key="i">
          {{ i }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-button type="primary" @click="handleChange" class="pribut" :rules="rules">
      下一步
    </a-button>
  </a-form-model>
</template>
<script>
// import api from '../../api/category';

export default {
  props: ['form'],
  data() {
    return {
      index: undefined,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      tags: ['包邮，最晚次日达'],
      rules: {
        title: [{ required: true, message: '请填入标题', trigger: 'blur' }],
        tags: [{ required: true, message: '请填入商品标签', trigger: 'blur' }],
        category: [{ required: false, message: '请填入商品类目', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleChange() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next');
          return true;
        }
        return false;
      });
    },
    changIndex(index) {
      this.index = index;
    },
  },
};
</script>
