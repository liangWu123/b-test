<template>
  <div>
    <a-button class="bt" @click="rthand">
      添加商品
    </a-button>
    <a-table :columns="columns" :data-source="$store.state.authorityList">
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)"
        >
          <a-button size="small">删除</a-button>
        </a-popconfirm>
        <a-popconfirm title="Sure to edit?" @confirm="edit">
          <a-button size="small">编辑</a-button>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
import api from '../../api/products';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    scopedSlots: { customRender: 'id' },
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: '10%',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    width: '10%',
  },
  {
    title: '类目',
    dataIndex: 'category',
  },
  {
    title: '预售价格',
    dataIndex: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'priceOff',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    width: '8%',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
    width: '15%',
  },
];
export default {
  data() {
    return {
      columns,
      count: this.$store.state.authorityList.length,
      dataSource: this.$store.state.authorityList,
    };
  },
  created() {
    api.getProductsList().then((r) => {
      const data = r.data.map((i) => {
        const {
          _id: key,
          id,
          title,
          desc,
          category: categor,
          price,
          price_off: priceOff,
          tags: tag,
          inventory,
          status: statue,
        } = i;
        const status = statue === 1 ? '上架' : '下架';
        const tags = tag.join('，');
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
      this.dataSource = data;
    });
  },
  methods: {
    edit() {
      this.$router.push('add');
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find((item) => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      api.deleteProductsId(key).then((r) => {
        if (r.data.ok) {
          this.$message.success('删除成功');
        }
      });
      this.$store.state.authorityList = this.$store.state.authorityList.filter(
        (item) => item.id !== key,
      );
    },
    rthand() {
      this.$router.push('add');
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },
  // watch: {
  //   dataSource() {
  //     console.log('++++');
  //   },
  // },
};

</script>
<style>
.editable-cell {
  position: relative;
}
.bt {
  position: absolute;
  right: 10px;
  top: 70px;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
