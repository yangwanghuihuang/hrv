<template>
  <div class="settleReport">
    <div class="search">
        <div class="btnStyle">
            <Button type="primary" @click="handleSelectAll()">查询</Button>
            <Button type="primary" @click="skip2Total()">总表</Button>
            <Button type="primary" @click="skipt2Little()">分表</Button>
            <Button type="primary" @click="export_excel()">导出分表</Button>
            <Button type="primary" @click="export_excel()">导出总表</Button>
            <!-- <Button type="primary" @click="handleSelectAll(false)">返回</Button> -->
        </div>
        <div class="formStyle">
          <Form  ref="formValidate" label-position="left" :label-width="100">
                <!-- <FormItem label="出账类别：">
                    <Select  placeholder="请选择--" style="width:200px">
                        <Option value="出账成功">北京</Option>
                        <Option value="账单确认">广州</Option>
                        <Option value="等待出账">上海</Option>
                        <Option value="异常中断">天津</Option>
                   </Select>
                </FormItem> -->

                  <FormItem label="出账任务：">
                  <Input disabled style="width: auto">
                  <Icon type="ios-search" slot="suffix" @click="skip2cycle" />
                  </Input>
                </FormItem>
            </Form>
       </div>
    </div>
    <div class="main">
      <!-- <div class="main_page">
            <span class="textStyle">第{{pageIndex}}页/共{{totalPage}}页 共{{dataCount}}条</span>
        <Page class="pageStyle" simple show-sizer show-total :pageHeight="pageHeight" :total="dataCount" :page-size="pageSize"  @on-page-size-change="pageSizeChange"  @on-change="changepage"></Page>
      </div> -->

      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1">
        <template slot-scope="{ row, index }" slot="action">
         <Input readonly  v-model="settleCycle" style="width: auto">
            <Icon type="ios-search" slot="suffix" @click="goCycleData()"/>
        </Input>
       </template>
      </Table>
    </div>
    <cycle-data v-if="ifShow" @confirm="confirm"></cycle-data>
    <expend-task v-if="ifExist"  @task="task"></expend-task>
    <div class="footer">

    </div>

  </div>
</template>

<script>
import services from '../../../api/services'
import cycleData from './settleCycleModal'
import expendTask from './expendTask'
  export default {
    components: {
       'cycle-data': cycleData,
       'expend-task': expendTask
    },
    data () {
      return {
        pageIndex: 1,
        totalPage: 0,
        currentid: 0,
        id_jishi: 0,
        tableHeight: 0,
        pageHeight: 0,
        settleCycle: '2010',
        ifShow: false,
        ifExist: false,
        // 初始化信息总条数
       // dataCount: 0,
        // 每页显示多少条
       // pageSize: 5,
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
             slot: 'action',
             width: 150,
             align: 'center'
          },
          {
            title: '开始日期',
            key: 'address'
          },
           {
            title: '结束日期',
            key: 'address'
          }
        ],
        data1: [],
        dataTotal: []
         // editIndex: -1,  // 当前聚焦的输入框的行数
        // editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        // editAge: '',  // 第二列输入框
        // editBirthday: '',  // 第三列输入框
        // editAddress: '',  // 第四列输入框
      }
    },
    created() {
      console.dir(this.settleCycle)
      this.settleCycle = '2010-10'
      console.dir(this.settleCycle)
    },
    mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
          this.$http
      .post(services.mock.data_list)
      .then(
        res => {
          if (res.data && res) {
            console.dir('123123123123')
            console.dir(res.data)
             this.dataTotal = res.data
             this.dataCount = this.dataTotal.length
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
      goCycleData() {
         this.settleCycle = '2010-11'
         this.ifShow = true
      },
      handleSelectAll () {
        alert('按照出账任务类别或者出账任务更新表格数据')
      },
      // changepage(index) {
      //   console.dir(index)
      //           var _start = (index - 1) * this.pageSize
      //           var _end = index * this.pageSize
      //            this.pageIndex = index
      //          console.dir(_start)
      //          console.dir(_end)
      //           this.data1 = this.dataTotal.slice(_start, _end)
      //           console.dir(this.data1)
      // },
      //  pageSizeChange(value) {
      //   this.pageSize = value
      //      this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)
      // },
      confirm(value) {
        console.dir(value)
         if (value) {
           this.ifShow = false
         }
      },
      task(value) {
          if (value) {
            this.ifExist = false
          }
      },
      skip2cycle() {
         this.ifExist = true
      },
      //  downloadToExcel(status) {
      //    if (status === '0') {
      //       alert('导出分表excel')
      //    }
      //     if (status === '1') {
      //       alert('导出总表excel')
      //    }
      //       // this.$http.post(services.mock.data_list, {responseType: 'arraybuffer'}).then(res => {
      //       //   this.data1 = res.data
      //       //   console.dir(this.data1)
      //       //     // let fileName = decodeURI(res.headers['content-disposition'].split(';')[1].split('=')[1]); // 获取浏览器response header中的文件名
      //       //     let blob = new Blob([this.data1], {type: 'application/vnd.ms-excel;charset=UTF-8'});
      //       //     if('msSaveOrOpenBlob' in navigator){
      //       //         //ie使用的下载方式
      //       //         window.navigator.msSaveOrOpenBlob(blob, 'test');
      //       //     } else {
      //       //         let url = URL.createObjectURL(blob);
      //       //         let link = document.createElement('a');
      //       //         link.style.display = 'none';
      //       //         link.href = url;
      //       //         link.setAttribute('download', 'test');
      //       //         document.body.appendChild(link);
      //       //         link.click()
      //       //     }
      //       // })
      //   },
       formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          return v[j]
        }))
      },
        export_excel() {
        import('../../../libs/Export2Excel').then(excel => {
          const multiHeader = [['序号', '省公司', '往来投', '应结出', '', '', '应结入', '', '', '结算额']]
          const header = ['', '', '', '不含税金额(A1)', '税额(A2)', '含税金额(A3)', '不含税金额(B1)', '税额(B2)', '含税金额(B3)', '含税金额(C-B3-A3)']
          const filterVal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
          const list = this.data1
          console.dir(list)
          const data = this.formatJson(filterVal, list)
          const merges = ['A1:A2', 'B1:B2', 'C1:C2', 'D1:F1', 'G1:I1', 'J1:J1']
          const filename = '导出总表'
          excel.export_json_to_excel({
            multiHeader,
            header,
            merges,
            data,
            filename
          })
        })
      },
      skip2Total() {
          this.$router.push({ path: 'excelDemo' })
      },
      skipt2Little() {
        this.$router.push({ path: 'excelDemo' })
      }
    }
  }
</script>

<style lang="less" scope>
  .settleReport{
    height: 100%;
    background-color: #fff;
    .search{
          height: 15%;
          padding-left: 10px;
          text-align: left;
          margin:2px;
         .btnStyle{
            height:36%;
         }
          .formStyle{
              padding-top: 15px;
              height: 60%;
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
    .footer{
      //  height: 20%;
    }
  }
  .ivu-form .ivu-form-item-label {
    text-align: left;
}
  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    margin-right: 10px;
}
// .ivu-table-wrapper {
//    height: 359px!important;
// }
</style>
