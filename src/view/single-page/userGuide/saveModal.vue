<template>
    <div>
       <Modal v-model="modal2" width="500"  @on-cancel="cancel">
        <p slot="header" style="color:#f60;text-align:left" >
            <Button type="primary" :loading="modal_loading" @click="del('0')">保存</Button>

            <Button type="primary" :loading="modal_loading" @click="del('1')">返回</Button>
        </p>
        <div style="text-align:left">
             <Form  ref="formValidate" label-position="right" :label-width="100">
                <FormItem label="校对文件配置：">
                    <Upload
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                    <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
                </FormItem>
                  <FormItem label="校对文件类型：">
                    <Select v-model="formValidate.type" placeholder="请选择--">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <!-- <Button type="error" :loading="modal_loading" @click="del">Delete</Button> -->
        </div>
    </Modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modal2: true,
            modal_loading: false,
            formValidate: {
                    type: ''
                },
            file: null,
            loadingStatus: false
        }
    },
    methods: {
        del (value) {
            if (value === '1') {
                this.modal_loading = true
                setTimeout(() => {
                    this.modal_loading = false
                    this.modal2 = false
                    this.$Message.success('已取消')
                }, 2000)
                this.$emit('save', '1')
            }
            if (value === '0') {
                this.modal_loading = true
                setTimeout(() => {
                    this.modal_loading = false
                    this.modal2 = false
                    this.$Message.success('保存成功')
                }, 2000)
                this.$emit('save', '0')
            }
            },
              cancel () {
                this.$Message.info('已取消')
                this.modal1 = true
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
