<template>
  <div class="clearfix">
    <a-upload
      list-type="picture-card"
      :file-list="fileList"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
      ],
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
  watch: {
    fileList: { // 深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        console.log(val, oldVal);
      },
      deep: true, // true 深度监听
    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
