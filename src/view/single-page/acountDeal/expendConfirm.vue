<template>
  <div class="expendConfirm">
    <div class="search">
      <!-- <label>校对日期：</label>
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker> -->
      <Button type="primary" @click="expendConfirm()">出账确认</Button>

    </div>
    <div class="main">
      <div class="main_page">
            <span class="textStyle">第{{pageIndex}}页/共{{totalPage}}页 共{{dataCount}}条</span>
        <Page class="pageStyle" simple show-sizer :pageHeight="pageHeight" :total="dataCount" :page-size="pageSize"  @on-page-size-change="pageSizeChange"  @on-change="changepage"></Page>
      </div>

      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
    <div class="footer">
    <expend-modal v-if="ifShow" @back="back"></expend-modal>
    </div>
  </div>
</template>

<script>
import services from '../../../api/services'
import expendConfirmModal from './expendConfirmModal'
  export default {
    components: {
      'expend-modal': expendConfirmModal
    },
    data () {
      return {
        tableHeight: 0,
        ifShow: false,
          // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 30,
        // 当前页数
        pageIndex: 1,
        totalPage: 0,
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '出账任务',
            key: 'name'
          },
          {
            title: '结算周期',
            key: 'age'
          },
          {
            title: '状态',
            key: 'age'
          },
           {
            title: '备注',
            key: 'name'
          },
           {
            title: '创建时间',
            key: 'name'
          },
           {
            title: '修改时间',
            key: 'name'
          }

        ],
        data1: [],
        dataTotal: []
      }
    },
    mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
     this.$http
      .post(services.mock.data_list)
      .then(
        res => {
          if (res.data && res) {
             this.dataTotal = res.data
             this.dataCount = this.dataTotal.length
              console.dir(this.dataTotal.length)
              console.dir(this.pageSize)
               this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)
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
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status)
      },
      expendConfirm() {
         this.ifShow = true
      },
        changepage(index) {
        console.dir(index)
        this.pageIndex = index
                var _start = (index - 1) * this.pageSize
                var _end = index * this.pageSize
               console.dir(_start)
               console.dir(_end)
                this.data1 = this.dataTotal.slice(_start, _end)
                console.dir(this.data1)
      },
      pageSizeChange(value) {
        this.pageSize = value
           this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)
      },
      back() {
        this.ifShow = false
      }
    }
  }
</script>

<style lang="less">
  .expendConfirm{
    height: 100%;
    background-color: #fff;
    .search{
      height: 10%;
      padding-left: 10px;
      display: flex;
      align-items: center;
      margin:2px;
      .ivu-btn-primary{
        margin-left: 10px;
      }
    }
    .main{
      padding: 10px;

       .main_page{
        height: 10%;
        display: flex;
        flex-direction: row;
        .pageStyle{
           width: auto;
           margin-bottom: 5px;
        }
        .textStyle{
          width: auto;
          margin-left: 959px;
          font-size: 14px;
          height: 32px;
          line-height: 29px;
        }
      }
    }
  }
</style>
