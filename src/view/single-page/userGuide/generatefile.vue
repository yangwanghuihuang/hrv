<template>
  <div>
    <Modal v-model="modal2" width="360" @on-cancel="cancel" @on-ok="ok">
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableHeight: 0,
      modal2: true,
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '统计文件',
          key: 'wrongReport'
        },
        {
          title: '生效日期',
          key: 'activeTime'
        },
        {
          title: '修改时间',
          key: 'updateTime'
        }
      ],
      data1: [
        {
          wrongReport: 'John Brown',
          activeTime: 18,

          updateTime: '2016-10-03'
        },
        {
          wrongReport: 'John Brown',
          activeTime: 1234564,

          updateTime: '2016-10-03'
        }
      ]
    }
  },
  methods: {
    cancel () {
      this.$Message.info('已取消')
      this.modal1 = true
      this.$emit('generate', '1')
    },
    ok () {
      this.$Message.info('已删除')
      this.modal1 = true
      this.$emit('success', '1')
    }
  }
}
</script>
