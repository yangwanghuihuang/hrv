<template>
  <section class="noticeModal">
    <Modal v-model="modal2" :title="title" width="800" @on-cancel="cancel">
      <h5>公告标题</h5>
      <p>123456789455612312313245647897314654678943132134654657998</p>
    </Modal>
  </section>
</template>

<script>
export default {
  name: 'noticeModal',
  data () {
    return {
      modal2: true,
      title: '最新公告'
    }
  },
  components: {},
  watch: {},
  mounted () { },
  methods: {
    cancel () {
      this.$emit('notice', '1')
    }
  }
}
</script>

<style scoped lang="less">
</style>
