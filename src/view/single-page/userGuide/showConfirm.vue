<template>
  <div>
    <Modal v-model="modal2" width="500" @on-cancel="cancel">
      <p slot="header" style="color:#f60;text-align:left">
        <Button type="primary" :loading="modal_loading" @click="del('1')">返回</Button>
      </p>
      <div style="text-align:left">
        <Form ref="formValidate" label-position="right" :label-width="140">
          <FormItem label="校对文件名称：">
            <Input v-model="fileName" placeholder="文件名称" disabled style="width:328px" />
          </FormItem>
          <FormItem label="校对文件内容：">
            <Input v-model="fileContent" type="textarea" disabled placeholder="Enter something..." />
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
  data () {
    return {
      modal2: true,
      modal_loading: false,
      formValidate: {
        type: ''
      },
      fileContent: 'dth',
      fileName: 'adas',
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
        this.$emit('show', '1')
      }
      if (value === '0') {
        this.modal_loading = true
        setTimeout(() => {
          this.modal_loading = false
          this.modal2 = false
          this.$Message.success('保存成功')
        }, 2000)
        this.$emit('show', '0')
      }
    },
    cancel () {
      this.$Message.info('已取消')
      this.modal1 = true
      this.$emit('show', '1')
    },
    handleUpload (file) {
      this.file = file
      return false
    },
    upload () {
      this.loadingStatus = true
      setTimeout(() => {
        this.file = null
        this.loadingStatus = false
        this.$Message.success('Success')
      }, 1500)
    }

  }
}
</script>
<style lang="less" scope>
.ivu-modal-header p,
.ivu-modal-header-inner {
  height: 32px;
  line-height: 32px;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  margin-right: 10px;
}
.ivu-form .ivu-form-item-label {
  text-align: center;
}
.ivu-form-item {
  margin-bottom: 16px;
}

.ivu-modal-footer {
  border-top: 0px solid #eeeeee;
}
</style>
