<template>
    <div>
       <Modal v-model="modal2" width="800"  @on-cancel="cancel">
        <p slot="header" style="color:#f60;text-align:left" >
            <Button type="primary" :loading="modal_loading" @click="del('0')">保存</Button>

            <Button type="primary" :loading="modal_loading" @click="del('1')">返回</Button>
        </p>
        <div style="text-align:left">
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
                        <Input v-model="formValidate.workid" disabled placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    </Col>
                    <Col span="12">
                      <FormItem label="学历：" style="width: 200px">
                        <Select v-model="formValidate.tiptopdegree" placeholder="请选择--">
                            <Option value="高中">高中</Option>
                            <Option value="本科">本科</Option>
                            <Option value="大专">大专</Option>
                               <Option value="硕士">硕士</Option>
                            <Option value="研究生">研究生</Option>
                              <Option value="博士">博士</Option>
                            <Option value="初中">初中</Option>
                        
                        </Select>
                    </FormItem>
                    <!-- <FormItem label="工龄：">
                        <Input v-model="formValidate.workage"  placeholder="3年" style="width: 200px"/>
                    </FormItem> -->
                    <FormItem label="入职日期：">
                        <DatePicker type="date" v-model="formValidate.begindate" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="转正日期：">
                        <DatePicker type="date" v-model="formValidate.conversiontime" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="部门：">
                        <Input v-model="formValidate.departmentid"  placeholder="3年" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="职位：">
                         <Input v-model="formValidate.posid"  placeholder="3年" style="width: 200px"/>
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
    data() {
        return {
            modal2: true,
            modal_loading: false,
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
                departmentid:''
                },
        }
    },
    props:{
       infoId:{
          type:Number,
          default:0
        },
    },
     mounted() { 
      let tmp={
          pageNum:1,
          pageSize:10,
          id:this.infoId
      }
      console.dir(tmp)
      this.$http
      .post(services.emplyeeByworkId.emplyeeByworkId,tmp)
      .then(
        res => {
          if (res.data && res && res.data.result) {
            console.dir(res.data)
            this.formValidate = res.data.result
            console.dir(res.data.result.tiptopdegree)
            if(res.data.result.tiptopdegree === '高中'){
               this.formValidate.tiptopDegree = "高中"
               console.dir(this.formValidate.tiptopDegree.value)
            }
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
        del (value) {
            if (value === '1') {
                this.$emit('edit', '1')
            }
            //保存
            if (value === '0') {
                this.$emit('edit', '0')
                alert("llll")
                 this.$http
                .post(services.updateEmp.updateEmp,this.formValidate)
                .then(
                    res => {
                         alert("llllmmm")
                    if (res.data && res) {
                       console.dir(res.data.result)

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
            }
            },
        cancel () {
              this.$emit('edit', '1')
            }
    }
}
</script>
<style lang="less" scope>
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
