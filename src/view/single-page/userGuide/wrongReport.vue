<template>
  <div class="userGuide">
    <div class="search">
      <label>校对日期：</label>
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <Button type="primary">生成文件</Button>
      <Button type="primary" @click="handleSelectAll(true)">全选</Button>
      <Button type="primary" @click="handleSelectAll(false)">重置</Button>
    </div>
    <div class="main">
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
        tableHeight: 0,
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '错单文件',
            key: 'wrongReport'
          },
          {
            title: '生效时间',
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
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status)
      }
    }
}
</script>
