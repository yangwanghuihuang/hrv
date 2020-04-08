<template>
  <div>
    <Modal v-model="modal1" title="10.255.84.100:8081 显示" @on-ok="ok" @on-cancel="cancel">
      <p>确定要删除所有文件吗？</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal1: true
    }
  },
  methods: {
    ok () {
      this.$Message.info('已删除')
      this.modal1 = true
      this.$emit('success', '1')
    },
    cancel () {
      this.$Message.info('已取消')
      this.modal1 = true
      this.$emit('success', '0')
    }
  }

}
</script>
