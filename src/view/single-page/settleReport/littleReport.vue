<template>
  <div class="report">
    <div class="search">
      <div class="btnStyle">
        <Button type="primary" @click="handleSelectAll('1')">打印</Button>
        <Button type="primary" @click="handleSelectAll(true)">打印预览</Button>
        <Button type="primary" @click="handleSelectAll(false)">设置</Button>
        <Button type="primary">导出(excel)</Button>
        <Button type="primary" @click="handleSelectAll(true)">导出pdf</Button>
        <Button type="primary" @click="goBack()">返回</Button>
      </div>
      <div class="formStyle">
        <Form ref="formValidate" label-position="left" :label-width="100">
          <FormItem label="省份：">
            <Select placeholder="请选择--" style="width:200px">
              <Option value="出账成功">北京</Option>
              <Option value="账单确认">广州</Option>
              <Option value="等待出账">上海</Option>
              <Option value="异常中断">天津</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
      <print-modal v-if="ifShow"></print-modal>
    </div>
    <div class="main">
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
import printModal from './printModal.vue'
export default {
  components: {
    'print-modal': printModal
  },
  data () {
    return {
      tableHeight: 0,
      ifShow: false,
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '调账文件',
          key: 'name'
        },
        {
          title: '生效时间',
          key: 'age'
        },
        {
          title: '修改时间',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        }
      ]
    }
  },
  mounted () {
    this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
  },
  methods: {
    goBack () {
      this.$router.push({ path: 'settleReport' })
    },
    handleSelectAll (status) {
      if (status) {
        this.ifShow = true
      }
    }
  }
}
</script>

<style lang="less" scope>
.report {
  height: 100%;
  background-color: #fff;
  .search {
    height: 15%;
    padding-left: 10px;
    text-align: left;
    margin: 2px;
    .btnStyle {
      height: 36%;
    }
    .formStyle {
      padding-top: 15px;
      height: 60%;
    }
  }
  .main {
    padding: 10px;
    height: 70%;
  }
}
.ivu-form .ivu-form-item-label {
  text-align: left;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  margin-right: 10px;
}
</style>
