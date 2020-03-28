<template>
  <section class="userInfo">
    <Form  ref="formValidate" label-position="right" :label-width="100">
                 <Row>
                    <Col span="12">
                     <FormItem label="姓名：">
                        <Input v-model="formValidate.name" placeholder="default size" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="性别：">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="男"></Radio>
                            <Radio label="女"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="出生日期：">
                       
                        <DatePicker type="date" v-model="formValidate.birthday" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="籍贯：">
                    <Input v-model="formValidate.nativeplace" placeholder="河北石家庄" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="民族：">
                    <Input v-model="formValidate.nationDesc" placeholder="河北石家庄" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="手机号：">
                        <Input v-model="formValidate.phone" placeholder="default size" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="工号：">
                        <Input v-model="formValidate.workid"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    </Col>
                    <Col span="12">
                      <FormItem label="学历：" style="width: 200px">
                        
                       <Input v-model="formValidate.tiptopdegree"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    <!-- <FormItem label="工龄：">
                        <Input v-model="formValidate.workage"  placeholder="3年" style="width: 200px"/>
                    </FormItem> -->
                    <FormItem label="入职日期：">
                        <DatePicker type="date" v-model="formValidate.begindate" placeholder="Select date  必填写" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="转正日期：">
                        <DatePicker type="date" v-model="formValidate.conversiontime" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="部门：" prop="departmentid">
                        <Input v-model="formValidate.departmentid" placeholder="河北石家庄" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="职位：">
                       <Input v-model="formValidate.posid" placeholder="河北石家庄" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="在职状态：">
                        <Input v-model="formValidate.workstate" placeholder="河北石家庄" style="width: 200px"/>
                    </FormItem>
                     <!-- <FormItem label="权限：">
                       <Input v-model="formValidate.remark" placeholder="河北石家庄" style="width: 200px"/>
                      
                    </FormItem> -->
                    </Col>
                </Row>   
              
            </Form>
  </section>
</template>

<script>
import services from '../../../api/services'
export default {
 name: 'userInfo',
  data() {
    return {
      userWorkId:'',
      formValidate: {
                name:'',
                nativeplace:'',
                nationDesc:'',
                birthday:'',
                gender:'',
                phone:'',
                workid:'',
                tiptopdegree: '',
                workage:'',
                daterange:'',
                conversiontime:'',
                begindate:'',
                posid:'',
                departmentid:'',
                workstate:'',
                },
    }
  },
  components: {},
  watch: {},
  mounted() {
    console.dir(this.$route.params.userId)
    console.dir(localStorage.getItem('userWorkid'))
    let tmp={}
    if(this.$route.params.userId){
        tmp={
          workid:this.$route.params.userId
          }
    }else{
        tmp={
          workid:localStorage.getItem('userWorkid')
          }
    }
       

   console.dir(tmp)
    //emplyeeByworkId
     this.$http
      .post(services.employeeByWorid.employeeByWorid,tmp)
      .then(
        res => {
          if(res.data && res){
             console.dir(res.data.result)
             this.formValidate=res.data.result
          }
          
          else if (res.data && res.data.resultCode !== '000000') {
            this.$Message.warn({ message: '服务器调用出错！' })
          }
        },
        res => {
          // error callback
        }
      )
  },
  methods: {}
}
</script>

<style scoped lang="less">

</style>
