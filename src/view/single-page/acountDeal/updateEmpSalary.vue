<template>
  <div class="updateEmpSalary">
     <Modal v-model="modal2" width="800"  @on-cancel="cancel">
        <p slot="header" style="color:#f60;text-align:left" >
            <Button type="primary"  @click="del('0')">保存</Button>

            <Button type="primary"  @click="del('1')">返回</Button>
        </p>
        <div style="text-align:left">
              <Form  ref="formValidate" label-position="right" :label-width="100">
                 <Row>
                    <Col span="12">
                    <FormItem label="启用时间：">
                        <!-- <Input v-model="formValidate.createDate" placeholder="1000" style="width: 200px"/> -->
                        <DatePicker type="date" v-model="formValidate.createdate" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="基本工资：">
                    <Input v-model="formValidate.basicsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="交通补助：">
                    <Input v-model="formValidate.trafficsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="午餐补助：">
                        <Input v-model="formValidate.lunchsalary" placeholder="1000" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="奖金：">
                        <Input v-model="formValidate.bonus"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                   
                    </Col>
                    <Col span="12">
                       <FormItem label="养老金比率：">
                        <Input v-model="formValidate.pensionper"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="养老金比基数">
                        <Input v-model="formValidate.pensionbase"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="医疗保险比率：">
                        <Input v-model="formValidate.medicalper"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="医疗保险基数：">
                        <Input v-model="formValidate.medicalbase"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="公积金比率：">
                        <Input v-model="formValidate.accumulationfundper"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="公积金基数：">
                        <Input v-model="formValidate.accumulationfundbase"  placeholder="89785" style="width: 200px"/>
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
    text-align: center;
}
.ivu-form-item {
    margin-bottom: 16px;
}

.ivu-modal-footer{
    border-top:0px solid #eeeeee;
}
</style>
