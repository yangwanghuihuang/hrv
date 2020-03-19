<template>
  <div class="settle">
    <!-- <div class="search">
       <div class="btnStyle">
         <Button type="primary" @click="handleSelectAll('4')">查询</Button>
        <Button type="primary"  @click="handleSelectAll('2')">新增</Button>
        <Button type="primary" @click="handleSelectAll('3')">修改</Button>
        <Button type="primary" @click="handleSelectAll('1')">删除</Button>
       </div>

       <div class="formStyle">
          <Form  ref="formValidate" label-position="left" :label-width="120">
                <FormItem label="结算周期类别：">
                    <Select  placeholder="请选择--" style="width:200px">
                        <Option value="beijing">按月</Option>
                        <Option value="shanghai">一次性结算</Option>
                        <Option value="shenzhen">按季度</Option>
                   </Select>
                </FormItem>
                  <FormItem label="开始日期：">
                  <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
                 <FormItem label="结束日期：">
                  <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
            </Form>
       </div>

      <model-component v-if="ifShow" @success="success"></model-component>
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
    <!-- </div> -->
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
import ModelComponent from '../userGuide/modal.vue'
import saveConfirm from './saveModal.vue'
import showConfirm from '../userGuide/showConfirm.vue'
import updateConfirm from './updateDealModal.vue'
import services from '../../../api/services'
export default {
      components: {
           'model-component': ModelComponent,
           'save-confirm': saveConfirm,
           'show-confirm': showConfirm,
           'update-confirm': updateConfirm
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
          align: 'center',
        },
         {
          title: '编号',
          key: 'id',
           width:100,
          resizable :true
        },
        {
          title: '姓名',
          key: 'name',
           width:100,
          resizable :true
        },
        {
          title: '工号',
          key: 'workid',
           width:100,
          resizable :true
        },
          {
          title: '手机号',
          key: 'phone',
           width:180,
          resizable :true
        },
           {
          title: '部门',
          key: 'departName',
           width:100,
          resizable :true
        },
          {
          title: '账套名称',
          key: 'name',
          width:180,
          resizable :true
        },
        {
          title: '基本工资',
          key: 'basicsalary',
          width:100,
          resizable :true
        },
        {
          title: '交通补助',
          key: 'trafficsalary',
          width:100,
          resizable :true
        },
        {
          title: '午餐补助',
          key: 'lunchsalary',
          width:100,
          resizable :true
        },
        {
          title: '奖金',
          key: 'bonus',
          width:100,
          resizable :true
        },
        {
          title: '启用时间',
          key: 'createDateDesc',
          width:180,
          resizable :true
        },
        {
          title: '养老金',
           align: 'center',
           children: [
                 {
                    title: '比率',
                    key: 'pensionper',
                    align: 'center',
                    width: 100,
                 },
                {
                    title: '基数',
                    key: 'pensionbase',
                    align: 'center',
                    width: 100,
                 },
           ]
        },
        {
          title: '医疗保险',
          align:'center',
          children: [
                 {
                    title: '比率',
                    key: 'medicalper',
                    align: 'center',
                    width: 100,
                 },
                {
                    title: '基数',
                    key: 'medicalbase',
                    align: 'center',
                    width: 100,
                 },
           ]
        },
        {
          title: '公积金',
          align:'center',
          children: [
                 {
                    title: '比率',
                    key: 'accumulationfundper',
                    align: 'center',
                    width: 100,
                 },
                {
                    title: '基数',
                    key: 'accumulationfundbase',
                    align: 'center',
                    width: 100,
                 }
                  ]},
        {
          title: '实际工资',
          key: 'allsalary',
          width:100,
          resizable :true
        },
                  {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改账套'),
                            ]);
                        }
                    }
        
        ],
        data1: [],
        dataTotal: []
        }
    },
      mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
       this.$http
      .post(services.empSalary.empSalary)
      .then(
        res => {
          if (res.data && res) {
            
              console.dir(res.data.result)
              this.dataTotal = res.data
             this.dataCount = this.dataTotal.result.length
             this.totalPage = Math.ceil(this.dataTotal.result.length / this.pageSize)
              
             if (this.dataTotal.result.length < this.pageSize) {
                    this.data1 = this.dataTotal.result
                   
                } else {
                    this.data1 = this.dataTotal.result.slice(0, this.pageSize)
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
      }
    }
}
</script>
<style lang="less" scope>
    .settle{
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

</style>
