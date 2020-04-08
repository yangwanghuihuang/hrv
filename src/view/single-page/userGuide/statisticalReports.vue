<template>
  <div class="userGuide">
    <div class="search">
      <label>校对日期：</label>
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <Button type="primary" @click="generatefile()">生成文件</Button>
      <Button type="primary" @click="handleSelectAll(true)">全选</Button>
      <Button type="primary" @click="handleSelectAll(false)">重置</Button>
    </div>
    <div class="main">
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
    <generate-confirm v-if="ifShow" @generate="generate"></generate-confirm>
  </div>
</template>
<script>
import generateConfirm from './generatefile.vue'
export default {
  components: {
    'generate-confirm': generateConfirm
  },
  data () {
    return {
      tableHeight: 0,
      ifShow: false,
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
          activeTime: 18123165,

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
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    generatefile () {
      this.ifShow = true
    },
    generate (value) {
      if (value) {
        this.ifShow = false
      }
    }
  }
}
</script>
