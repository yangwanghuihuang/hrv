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
                    <Input v-model="formValidate.nationid" placeholder="河北石家庄" style="width: 200px"/>
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
                        <Select v-model="formValidate.tiptopDegree" placeholder="请选择--">
                            <Option value="shenzhen">研究生</Option>
                            <Option value="本科">本科</Option>
                            <Option value="大专">大专</Option>
                        
                        </Select>
                    </FormItem>
                    <FormItem label="工龄：">
                        <Input v-model="formValidate.workAge"  placeholder="3年" style="width: 200px"/>
                    </FormItem>
                    <FormItem label="入职日期：">
                        <DatePicker type="date" v-model="formValidate.beginDate" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="转正日期：">
                        <DatePicker type="date" v-model="formValidate.conversionTime" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    <FormItem label="合同起始日期：">
                        <DatePicker v-model="formValidate.daterange" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                    </Col>
                </Row>   
                 <!-- <FormItem label="合同终止日期：">
                     <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem> -->
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
                nationid:'',
                birthday:'',
                gender:'',
                phone:'',
                workid:'',
                tiptopDegree: '',
                workAge:'',
                daterange:'',
                conversionTime:'',
                beginDate:'',
                },
        }
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
