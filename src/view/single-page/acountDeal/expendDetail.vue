<template>
  <div class="expendDetail">
    <div class="search">
      <div class="btnStyle">
          <Button type="primary" @click="handleSelectAll('4')">查询</Button>
      </div>

       <div class="formStyle">
          <Form  ref="formValidate" label-position="right" :label-width="100">
                <FormItem label="状态：">
                    <Select  placeholder="所有出账状态" style="width:200px">
                        <Option value="出账成功">出账成功</Option>
                        <Option value="账单确认">账单确认</Option>
                        <Option value="等待出账">等待出账</Option>
                        <Option value="异常中断">异常中断</Option>
                   </Select>
                </FormItem>
                  <FormItem label="出账任务：">
                     <Input disabled placeholder="Enter text" style="width: auto">
                  <Icon type="ios-search" slot="suffix" @click="skip2Task" />
                  </Input>
                </FormItem>
                 <FormItem label="结算周期：">
                    <Input disabled placeholder="Enter text" style="width: auto">
                  <Icon type="ios-search" slot="suffix" @click="skip2cycle" />
                  </Input>

                </FormItem>
            </Form>
       </div>

      <model-component v-if="ifShow" @success="success"></model-component>
      <save-confirm v-if="ifExist" @save="save"></save-confirm>
      <show-confirm v-if="ifConfirm" @show="show"></show-confirm>
      <update-confirm v-if="ifUpdate" @update="update"></update-confirm>
      <expend-modal v-if="ifModal"  @task="task"></expend-modal>
      <settle-clcle v-if="ifCycle" @confirm="confirm"></settle-clcle>
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
        <Page class="pageStyle" simple show-sizer :total="dataCount" :page-size="pageSize"  @on-page-size-change="pageSizeChange"  @on-change="changepage"></Page>
      </div>
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
     <!-- <div class="footer">
      <Page  :total="dataCount" :page-size="pageSize"  @on-change="changepage"></Page>
    </div> -->
  </div>
</template>
<script>
import services from '../../../api/services'
import ModelComponent from '../userGuide/modal.vue'
import saveConfirm from './saveModal.vue'
import showConfirm from '../userGuide/showConfirm.vue'
import updateConfirm from './updateDealModal.vue'
import expendModal from '../settleReport/expendTask'
import settleClcle from '../settleReport/settleCycleModal'
export default {
      components: {
           'model-component': ModelComponent,
           'save-confirm': saveConfirm,
           'show-confirm': showConfirm,
           'update-confirm': updateConfirm,
           'expend-modal': expendModal,
           'settle-clcle': settleClcle
        },
    data() {
        return {
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 5,
        pageIndex: 1,
        totalPage: 0,
        tableHeight: 0,
        ifShow: false,
        ifExist: false,
        ifConfirm: false,
        ifUpdate: false,
        ifModal: false,
        ifCycle: false,
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '出账任务',
            key: 'settleName'
          },
          {
            title: '结算周期',
            key: 'settleKinds'
          },
          {
            title: '状态',
            key: 'stat',
            render: (h, params) => {
              console.dir(params)
              return h('div', [
                  h('span', {
                    style: {
                        color: params.row.stat === '异常中断' ? '#f00' : 'black'
                      }
                  }, params.row.stat)
              ])
            }
          },
           {
            title: '备注',
            key: 'remark'
          },
          {
            title: '创建时间',
            key: 'createTime'
          },
          {
            title: '修改时间',
            key: 'updateTime'
          }
        ],
        data1: [],
        dataTotal: []
        }
    },
      mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
           this.$http
      .post(services.moniExpendData.moniExpendData)
      .then(
        res => {
          if (res.data && res) {
             this.dataTotal = res.data
             console.dir(this.dataTotal)
            //  for(let i =0;i<this.dataTotal.length;i++){
            //       if(this.dataTotal[i].stat  === '异常中断'){
            //      //设置当前颜色为红色
            //        this.dataTotal[i].stat.style='font-color:red'
            //  }
            //  }

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
              this.ifConfirm = true
              console.dir(this.ifConfirm)
            }
          },
          changepage(index) {
                var _start = (index - 1) * this.pageSize
                var _end = index * this.pageSize
                   this.pageIndex = index
               console.dir(_start)
               console.dir(_end)
                this.data1 = this.dataTotal.slice(_start, _end)
                console.dir(this.data1)
      },
       pageSizeChange(value) {
        this.pageSize = value
           this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)
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
           task(value) {
          if (value) {
            this.ifModal = false
          }
      },
          update(value) {
            console.dir('123123')
            console.dir(value)
            if (value) {
              this.ifUpdate = false
            }
          },
          skip2Task() {
            alert('跳转至网页对话框')
           this.ifModal = true
          },
          skip2cycle() {
             this.ifCycle = true
          },
             confirm(value) {
        console.dir(value)
         if (value) {
           this.ifCycle = false
         }
      }
    }
}
</script>
<style lang="less">
.expendDetail{
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
.ivu-form-item {
     margin-bottom: 5px;
    vertical-align: top;
    zoom: 1;
}

</style>
