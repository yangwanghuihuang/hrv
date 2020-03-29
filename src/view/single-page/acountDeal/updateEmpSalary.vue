<template>
  <div class="updateEmpSalary">
     <Modal v-model="modal2" width="800"  @on-cancel="cancel">
        <p slot="header" style="color:#f60;text-align:left" >
            <Button type="primary"  @click="del('0')">保存</Button>

            <Button type="primary"  @click="del('1')">返回</Button>
        </p>
        <div style="text-align:left">
              <Form  ref="formValidate" :model="formValidate" label-position="right" :label-width="100"  :rules="ruleFormValidate">
                 <Row>
                    <Col span="12">
                    <FormItem label="启用时间：" prop="createdate">
                        <!-- <Input v-model="formValidate.createDate" placeholder="1000" style="width: 200px"/> -->
                        <DatePicker type="date" v-model="formValidate.createdate" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="基本工资：" prop="basicsalary">
                    <Input v-model="formValidate.basicsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="交通补助："  prop="trafficsalary">
                    <Input v-model="formValidate.trafficsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="午餐补助："  prop="lunchsalary">
                        <Input v-model="formValidate.lunchsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="奖金："  prop="bonus">
                        <Input v-model="formValidate.bonus"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                   
                    </Col>
                    <Col span="12">
                       <FormItem label="养老金比率"  prop="pensionper">
                        <Input v-model="formValidate.pensionper"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                    <FormItem label="养老金比基数"  prop="pensionbase">
                        <Input v-model="formValidate.pensionbase"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                    <FormItem label="医疗保险比率"  prop="medicalper">
                        <Input v-model="formValidate.medicalper"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                    <FormItem label="医疗保险基数"  prop="medicalbase">
                        <Input v-model="formValidate.medicalbase"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                    <FormItem label="公积金比率"  prop="accumulationfundper">
                        <Input v-model="formValidate.accumulationfundper"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                    <FormItem label="公积金基数"  prop="accumulationfundbase">
                        <Input v-model="formValidate.accumulationfundbase"  placeholder="89785" style="width: 180px"/>
                    </FormItem>
                 
                    </Col>
                </Row>   
              
            </Form>
        </div>
        <div slot="footer">
        </div>
    </Modal>
  </div>
</template>

<script>
import services from '../../../api/services'
export default {
 name: 'updateEmpSalary',
  props:{
        infoId:{
          type:Number,
          default:0
        }
    },
  data() {
    return {
         modal2:true,
       formValidate:{
           id:0,
           createdate:'',
           basicsalary:'',
           trafficsalary:'',
           lunchsalary:'',
           bonus:'',
           pensionper:'',
           pensionbase:'',
           medicalper:'',
           medicalbase:'',
           accumulationfundper:'',
           accumulationfundbase:''
       },
       ruleFormValidate:{
                 lunchsalary:[
                        { required: true, message: '请输入午餐补助', trigger: 'blur' }
                    ],
                 basicsalary:{ required: true, message: '请输入基本工资', trigger: 'blur' },
                 trafficsalary:{required: true, message: '请输入交通补助', trigger: 'blur'},
                 bonus:{required: true, message: '请输入奖金', trigger: 'blur'},
                 pensionper:{required: true, message: '请输入养老比率', trigger: 'blur'},
                 pensionbase: { required: true,message: '请输入养老金基数',trigger:'blur'},
                 medicalper:{required: true, message: '请输入医疗比率', trigger: 'blur'},
                 createdate:{required: true,type: 'date', message: '请选择创建日期', trigger: 'blur'},
                 medicalbase:{required: true, message: '请输入医疗保险', trigger: 'blur'},
                accumulationfundper:{required: true, message: '请输入公积金', trigger: 'blur'},
                  accumulationfundbase:{required: true, message: '请输入公积金比率', trigger: 'blur'}
            }
    }
  },
  components: {},
  watch: {},
  mounted() {
      console.dir(this.infoId)
      //通过账套id，先展示账套信息
       let tmp={
         id: this.infoId
      }
       this.$http
      .post(services.empSalaryById.empSalaryById,tmp)
      .then(
        res => {
          if (res.data && res && res.data.result) {
            this.formValidate = res.data.result
            console.dir(res.data.result.createDateDesc)
            this.formValidate.createDate=res.data.result.createDateDesc
        //   this.createDate=new Date(res.data.result.createDateDesc)
          } else if (res.data && res.data.resultCode !== '000000') {
        //    this.$dialog.alert({ message: '服务器调用出错！' })
          }
        },
        res => {
          // error callback
        }
      )
  },
  methods: {
        cancel () {
              this.$emit('edit', '1')
            },
        del(value){
            if(value=='1'){
                 alert("back")
                    this.$emit('edit', '1')
            }
            if(value=='0'){
                 alert("submit")
                 //修改账套信息
                  this.formValidate.id=this.infoId
                  this.$http
                .post(services.salaryById.salaryById,this.formValidate)
                .then(
                    res => {
                    if (res.data && res&&res.data.resultCode === '000000') {
                       console.dir(res.data.result)
                       this.$emit('edit', '1')
                    } else if (res.data && res.data.resultCode !== '000000') {
                        // this.$dialog.alert({ message: '服务器调用出错！' })
                    }
                    },
                    res => {
                    }
                )
            }
        }
  }
}
</script>

<style scoped lang="less">
.ivu-modal-header p, .ivu-modal-header-inner {
    height: 32px;
    line-height: 32px;
}
button, html [type="button"], [type="reset"], [type="submit"] {
    margin-right: 10px;
}
.ivu-form .ivu-form-item-label{
    text-align: left;
}
.ivu-form-item {
    margin-bottom: 16px;
}

.ivu-modal-footer{
    border-top:0px solid #eeeeee;
}
</style>
