<template>
  <div class="divideResult">
    <div class="search">
       <div class="btnStyle">
         <Button type="primary" @click="handleSelectAll('4')">查询</Button>
         <Button type="primary" @click="back()">返回</Button>
       </div>

       <div class="formStyle">
          <Form  ref="formValidate" label-position="left" :label-width="120">
                <FormItem label="拆分状态：">
                    <Select  placeholder="请选择--" style="width:200px">
                        <Option value="beijing">按月</Option>
                        <Option value="shanghai">一次性结算</Option>
                        <Option value="shenzhen">按季度</Option>
                   </Select>
                </FormItem>
                  <FormItem label="创建日期：">
                  <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
                 <FormItem label="业务名称：">
                    <Input  placeholder="Enter something..." style="width: 200px" />
                </FormItem>
            </Form>
       </div>

      <!-- <model-component v-if="ifShow" @success="success"></model-component>
      <save-confirm v-if="ifExist" @save="save"></save-confirm>
      <show-confirm v-if="ifConfirm" @show="show"></show-confirm>
      <update-confirm v-if="ifUpdate" @update="update"></update-confirm> -->
      <!-- <Modal
        v-model="modal1"
        title="10.255.84.100:8081 显示"
        @on-ok="ok"
        @on-cancel="cancel">
       <p>确定要删除所有文件吗？</p>
    </Modal> -->
    </div>
    <div class="main">
        <div class="main_page">
            <span class="textStyle">第{{pageIndex}}页/共{{totalPage}}页 共{{dataCount}}条</span>
        <Page class="pageStyle" simple show-sizer show-total :pageHeight="pageHeight" :total="dataCount" :page-size="pageSize"  @on-page-size-change="pageSizeChange"  @on-change="changepage"></Page>
      </div>
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
import services from '../../../api/services'
export default {
      components: {

        },
    data() {
        return {
        tableHeight: 0,
        ifShow: false,
        ifExist: false,
        ifConfirm: false,
        ifUpdate: false,
           // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 5,
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
            title: '业务名称',
            key: 'settleName'
          },
          {
            title: '拆分状态',
            key: 'settleKinds'
          },
          {
            title: '备注',
            key: 'beginTime'
          },

          {
            title: '创建时间',
            key: 'createTime'
          }

        ],
        data1: [],
        dataTotal: []
        }
    },
      mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
       this.$http
      .post(services.cycleData.cycleData)
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
            console.dir(status)
            if (status === '1') {
              this.ifShow = true
            }
            if (status === '2') {
              this.ifExist = true
              console.dir(this.ifExist)
            }
            if (status === '3') {
              this.ifUpdate = true
              console.dir(this.ifUpdate)
            }
            if (status === '4') {
             alert('展示通过条件的查询结果')
            }
          },
          success(value) {
             console.dir(value)
              if (value) {
                this.ifShow = false
             }
          },
          save(value) {
            if (value) {
               this.ifExist = false
            }
          },
          show(value) {
            if (value) {
              this.ifConfirm = false
            }
          },
          update(value) {
            console.dir('123123')
            console.dir(value)
            if (value) {
              this.ifUpdate = false
            }
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
        if (this.$route.params.name === 'split') {
            console.dir(this.$route.params.name === 'split')
              this.$router.push({ path: 'divideReport' })
        }
        if (this.$route.params.name === 'upload') {
            console.dir(this.$route.params.name === 'upload')
               this.$router.push({ path: 'uploadReport' })
        }
      }
    }
}
</script>
<style lang="less" scope>
    .divideResult{
       height: 100%;
       background-color: #fff;
       .search{
          height: 26%;
          padding-left: 10px;
          text-align: left;
          margin:2px;
         .btnStyle{
            height:20%;
         }
          .formStyle{
              margin-top: 15px;
              height: 80%;
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
//     .ivu-form .ivu-form-item-label {
//     text-align: left;
// }
.ivu-form-item {
     margin-bottom: 5px;
    vertical-align: top;
    zoom: 1;
}
   button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    margin-right: 10px;
}
</style>
