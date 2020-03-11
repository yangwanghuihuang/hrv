<template>
    <div class="compareResultModal">
           <Modal v-model="modal1" title="校对结果"  @on-ok="ok"  @on-cancel="cancel">
            <div slot="header">
                 校对结果：
            </div>
            <div  style="text-align:left;padding-left:37px;font-size:18px;">
                 完全一致？
            </div>

           </Modal>
    </div>
</template>

<script>
export default {
 name: 'compareResultModal',
  data() {
    return {
         modal1: true
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
      ok () {
          this.modal1 = true
          this.$emit('success', '1')
      },
      cancel () {
         this.modal1 = true
         this.$emit('success', '0')
      }
  }
}
</script>

<style scoped lang="less">

</style>
