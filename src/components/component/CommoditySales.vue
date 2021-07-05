<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="price" label="商品售价" prop="price">
      <a-input v-model="form.price" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="price_off">
      <a-input v-model="form.price_off" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="inventory">
      <a-input v-model="form.inventory" />
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="unit">
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <a-form-model-item label="产品相册" prop="images">
      <a-upload
        :action="
          'https://mallapi.duyiedu.com/upload/images?appkey=wuliang_1620376130241' +
            $store.state.loginName.appkey
        "
        name="avatar"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">
            Upload
          </div>
        </div>
      </a-upload>
      <a-form-model-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-checkbox :checked="chanckBox" @change="handleStatusChange">是否上架</a-checkbox>
      </a-form-model-item>
    </a-form-model-item>
    <a-button @click="prev" class="pribut">
      上一步
    </a-button>
    <a-button type="primary" class="pribut" @click="upLoad">
      完成
    </a-button>
  </a-form-model>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ['form'],
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules: {
        price: [{ required: true, message: '请填入售价', trigger: 'blur' }],
        price_off: [{ required: true, message: '请填入商品折扣价', trigger: 'blur' }],
        inventory: [{ required: true, message: '请填入商品库存', trigger: 'blur' }],
        unit: [{ required: true, message: '请填入商品计量单位', trigger: 'blur' }],
        images: [{ required: true, message: '请上传图片', trigger: 'blur' }],
      },
      fileList: [],
    };
  },
  methods: {
    Change() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          return true;
        }
        return false;
      });
    },
    prev() {
      this.$emit('prev');
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        console.log(file.response.data.url);
        this.form.image = this.form.images.filter((item) => item !== file.response.data.url);
      }
      this.fileList = fileList;
    },
    handleStatusChange() {
      this.form.status = this.form.status === 1 ? 0 : 1;
    },
    upLoad() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('click');
          return true;
        }
        return false;
      });
    },
  },
  computed: {
    chanckBox() {
      if (this.form.status) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
.pribut {
  margin: 5px;
}
</style>
