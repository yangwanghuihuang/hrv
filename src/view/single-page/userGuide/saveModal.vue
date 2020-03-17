<template>
    <div>
       <Modal v-model="modal2" width="800"  @on-cancel="cancel">
        <p slot="header" style="color:#f60;text-align:left" >
            <Button type="primary" :loading="modal_loading" @click="del('0')">提交</Button>

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
                        <Input v-model="formValidate.workid"  placeholder="89785" style="width: 200px"/>
                    </FormItem>
                    </Col>
                    <Col span="12">
                      <FormItem label="学历：" style="width: 200px">
                        <Select v-model="formValidate.tiptopdegree" placeholder="请选择" >
                            <Option value="1" selected>博士</Option>
                             <Option value="2">硕士</Option>
                            <Option value="3">本科</Option>
                            <Option value="4">大专</Option>
                             <Option value="5">高中</Option>
                            <Option value="6">初中</Option>
                             <Option value="7">小学</Option>
                              <Option value="8">小学</Option>
                        
                        </Select>
                    </FormItem>
                    <FormItem label="工龄：">
                        <Input v-model="formValidate.workage"  placeholder="3年" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="入职日期：">
                        <DatePicker type="date" v-model="formValidate.begindate" placeholder="Select date  必填写" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="转正日期：">
                        <DatePicker type="date" v-model="formValidate.conversiontime" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="部门：">
                        <!-- <Select v-model="selectModal" style="width:200px">
                            <Option v-for="item in departmentList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select> -->
                         <Input v-model="formValidate.departmentid"  placeholder="30" style="width: 200px"/>

                    </FormItem>
                    <FormItem label="职位：">
                         <Input v-model="formValidate.posid"  placeholder="30" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="在职状态：">
                        <Select v-model="formValidate.workstate" placeholder="请选择--">
                            <Option value="1" selected>在职</Option>
                             <Option value="2">离职</Option>

                        </Select>
                      
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
            selectModal:'',
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
                workstate:''
                },
        }
    },
    mounted(){
         this.$store.dispatch('depart/departOption');
        // this.$store.commit('setDepartOption');
    },
    computed:{
      departmentList() {
          //映射getter的数据到组件中，可以直接使用
            return this.$store.getters['depart/getDepartOption'] || []
        },
    },
    methods: {
        del (value) {
            if (value === '1') {
                this.$emit('save', '1')
            }
            //保存
            if (value === '0') {
                this.$emit('save', '0')
                 this.$http
                .post(services.addEmplyee.addEmplyee,this.formValidate)
                .then(
                    res => {
                    if (res.data && res) {
                        console.dir(res.data)

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
              this.$emit('save', '1')
        },  
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
