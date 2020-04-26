<template>
  <section class="noticeModal">
    <Modal v-model="modal2" :title="title" width="500" @on-cancel="cancel">
      <h5>公告标题1</h5>
      <p>本系统完成于2020-04-25</p>
      <div slot="footer"></div>
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
