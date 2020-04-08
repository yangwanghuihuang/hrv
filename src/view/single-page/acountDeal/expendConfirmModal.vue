<template>
  <div>
    <Modal v-model="modal2" width="500" @on-cancel="cancel">
      <p slot="header" style="color:#f60;text-align:left">来自网页消息</p>
      <div style="text-align:left">确定要确认所选择的账期吗？</div>
      <div slot="footer">
        <Button type="primary" :loading="modal_loading" @click="del('0')">确认</Button>

        <Button type="primary" :loading="modal_loading" @click="del('1')">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal2: true
    }
  },
  methods: {
    del (status) {
      if (status === '0') {
        this.$router.push({ path: 'expendDetail' })
      }
      if (status === '1') {
        this.$emit('back', '1')
      }
    },
    cancel () {
      this.$emit('back', '1')
    }
  }
}
</script>
