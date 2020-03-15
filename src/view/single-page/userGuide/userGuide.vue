<template>
  <div class="userGuide">
    <div class="search">
       <Row>
        <Col span="18"> <Input search enter-button placeholder="按照姓名查询员工信息，记得回车哦" /></Col>
        <Col span="3"> 
            <Button type="primary"  @click="insertEmployee()">添加员工</Button>
     
        </Col>
         <Col span="3"> 
         
            <Button type="primary"  @click="export_excel">导出excel</Button>
        </Col>
       </Row>     
    </div>
    <div class="main">
      <div class="main_page">
            <span class="textStyle">第{{pageIndex}}页/共{{totalPage}}页 共{{dataCount}}条</span>
        <Page class="pageStyle" simple show-sizer show-total :pageHeight="pageHeight" :total="dataCount" :page-size="pageSize"  @on-page-size-change="pageSizeChange"  @on-change="changepage"></Page>
      </div>

      <Table :height="tableHeight"  style="width:100%"  border ref="selection" :columns="columns4" :data="data1">
       
      </Table>
    </div>
   
    <div class="footer">

    </div>
    <add-emplyee v-if="ifShow" @save="save"></add-emplyee>
    <edit-employee v-if="ifExist" :infoId="infoId" @edit="edit"></edit-employee>
  </div>
</template>

<script>
import services from '../../../api/services'
import { export2Excel } from '../../../components/common/js/util'
import addEmployee from './saveModal'
import editEmployee from './editModal'
  export default {
    components: {
       'add-emplyee': addEmployee,
       'edit-employee':editEmployee
    },
    data () {
      return {
        ifShow:false,
        pageIndex: 1,
        totalPage: 0,
        infoId:'',
        tableHeight: 0,
        pageHeight: 0,
        settleCycle: '2010',
        ifShow: false,
        ifExist: false,
        // 初始化信息总条数
       dataCount: 0,
        // 每页显示多少条
       pageSize: 5,
        columns4: [
         {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '姓名',
          key: 'address'
        },
        {
          title: '工号',
          key: 'workId'
        },
        {
          title: '性别',
          key: 'address'
        },
        {
          title: '出生日期',
          key: 'address'
        },
        {
          title: '身份证号码',
          key: 'address'
        },
        {
          title: '婚姻状况',
          key: 'address'
        },
        {
          title: '民族',
          key: 'address'
        },
        {
          title: '籍贯',
          key: 'address'
        },
        {
          title: '电子邮箱',
          key: 'address'
        },
       {
                        title: 'Action',
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
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
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
    },
    mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
      let tmp={
          pageNum:1,
          pageSize:10
      }
      this.$http
      .post(services.mock.data_list)
      .then(
        res => {
          if (res.data && res) {
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
      show (index) {
          this.infoId=this.data1[index].workId
          this.ifExist = true
                // this.$Modal.info({
                //     title: '员工信息',
                  
                //     content: `Name：${this.data1[index].address}<br>Age：${this.data1[index].workId}<br>Address：${this.data1[index].address}`
                // })
            },
      remove (index) {
                this.data1.splice(index, 1);
                this.dataCount--;
                this.totalPage = Math.ceil(this.dataCount / this.pageSize)
            },
      insertEmployee(){
          this.ifShow = true

      },
      save(value){
          if(value){
            this.ifShow=false
          }
      },
      edit(value){
           if(value){
            this.ifExist=false
          }
      },
      goCycleData() {
         this.settleCycle = '2010-11'
         this.ifShow = true
      },
      handleSelectAll () {
        alert('按照出账任务类别或者出账任务更新表格数据')
      },
      changepage(index) {
        console.dir(index)
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
           this.totalPage = Math.ceil(this.datacount / this.pageSize)
      },
          export_excel() {
              export2Excel(this.columns4, this.data1)
          }

    }
  }
</script>

<style lang="less" scope>
  .userGuide{
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
         .ivu-col-span-3 {
            padding-left: 57px!important;
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

.ivu-input-group {
    width: 33%;
}
</style>
