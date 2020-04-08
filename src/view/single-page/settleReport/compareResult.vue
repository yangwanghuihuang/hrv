<template>
  <div class="settleCycleMpdal">
    <div class="search">
      <Button type="primary" @click="export_excel()">导出结果</Button>
    </div>
    <div class="main">
      <div class="main_page">
        <span class="textStyle">第{{pageIndex}}页/共{{totalPage}}页 共{{dataCount}}条</span>
        <Page
          class="pageStyle"
          simple
          show-sizer
          show-total
          :pageHeight="pageHeight"
          :total="dataCount"
          :page-size="pageSize"
          @on-page-size-change="pageSizeChange"
          @on-change="changepage"
        ></Page>
      </div>
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
import services from '../../../api/services'
import { export2Excel } from '../../../components/common/js/util'
export default {
  data () {
    return {

      dataCount: 0,
      totalPage: 0,
      pageSize: 10,
      pageIndex: 1,
      tableHeight: 0,
      currentid: 0,
      id_jishi: 0,
      columns4: [
        {
          title: '报表名称',
          key: 'name'
        },
        {
          title: '账期时间',
          key: 'age'
          // slot: 'action',
          // width: 150,
          // align: 'center'
        },
        {
          title: '总表数据',
          key: 'name'
        },
        {
          title: '分表数据',
          key: 'name'
        },
        {
          title: '数据差异',
          key: 'name'
        },
        {
          title: '核对结果',
          key: 'address'
        },
        {
          title: '备注',
          key: 'name'
        }
      ],
      data1: [],
      dataTotal: []
    }
  },
  mounted () {
    this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
    this.$http
      .post(services.mock.data_list)
      .then(
        res => {
          if (res.data && res) {
            this.dataTotal = res.data
            this.dataCount = this.dataTotal.length
            this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)

            //   if(this.dataTotal.length%this.pageSize){
            //           this.totalPage = this.dataTotal.length/this.pageSize+1
            //   }
            if (this.dataTotal.length < this.pageSize) {
              this.data1 = this.dataTotal
            } else {
              this.data1 = this.dataTotal.slice(0, this.pageSize)
            }

            // 进行跳转成功页面
            // 成功后调用服务
            // 给父组件传递flag标志，1为关闭当前，打开success。
          } else if (res.data && res.data.resultCode !== '000000') {
            this.$dialog.alert({ message: '服务器调用出错！' })
          }
        },
        res => {
          // error callback
        }
      )
  },
  methods: {
    changepage (index) {
      console.dir(index)
      this.pageIndex = index
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      console.dir(_start)
      console.dir(_end)
      this.data1 = this.dataTotal.slice(_start, _end)
      console.dir(this.data1)
    },
    export_excel () {
      export2Excel(this.columns4, this.data1)
    }

  }

}
</script>
<style lang="less" scoped>
.settleCycleMpdal {
  height: 100%;
  background-color: #fff;
  .search {
    height: 10%;
  }
  .main {
    padding: 10px;
    .main_page {
      height: 10%;
      display: flex;
      flex-direction: row;
      .pageStyle {
        width: auto;
        margin-bottom: 5px;
      }
      .textStyle {
        width: auto;
        margin-left: 959px;
        font-size: 14px;
        height: 32px;
        line-height: 29px;
      }
    }
  }
  .ivu-btn-primary {
    margin-left: 10px;
  }
}
</style>
