<template>
  <div class="userGuide">
    <div class="search">
      <label>校对日期：</label>
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <Button type="primary" @click="handleSelectAll('2')">上传</Button>
      <Button type="primary" @click="handleSelectAll('1')">删除</Button>
      <Button type="primary" @click="handleSelectAll('3')">修改</Button>
      <Button type="primary" @click="handleSelectAll('4')">查看</Button>
      <Button type="primary" @click="handleSelectAll(false)">导出</Button>
      <model-component v-if="ifShow" @success="success"></model-component>
      <save-confirm v-if="ifExist" @save="save"></save-confirm>
      <show-confirm v-if="ifConfirm" @show="show"></show-confirm>
      <update-confirm v-if="ifUpdate" @update="update"></update-confirm>
      <!-- <Modal
        v-model="modal1"
        title="10.255.84.100:8081 显示"
        @on-ok="ok"
        @on-cancel="cancel">
       <p>确定要删除所有文件吗？</p>
      </Modal>-->
    </div>
    <div class="main">
      <Table :height="tableHeight" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
  </div>
</template>
<script>

import ModelComponent from './modal.vue'
import saveConfirm from './saveModal.vue'
import showConfirm from './showConfirm.vue'
import updateConfirm from './updateConfirm.vue'
export default {
  components: {
    'model-component': ModelComponent,
    'save-confirm': saveConfirm,
    'show-confirm': showConfirm,
    'update-confirm': updateConfirm
  },
  data () {
    return {
      tableHeight: 0,
      ifShow: false,
      ifExist: false,
      ifConfirm: false,
      ifUpdate: false,
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '校对文件名称',
          key: 'wrongReport'
        },
        {
          title: '生成时间',
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
          activeTime: 181234,

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
      console.dir(status)
      if (status === '1') {
        this.ifShow = true
      }
      if (status === '2') {
        this.ifExist = true
        console.dir(this.ifExist)
      }
      if (status === '3') {
        this.ifUpdate = true
        console.dir(this.ifUpdate)
      }
      if (status === '4') {
        this.ifConfirm = true
        console.dir(this.ifConfirm)
      }
    },
    success (value) {
      console.dir(value)
      if (value) {
        this.ifShow = false
      }
    },
    save (value) {
      if (value) {
        this.ifExist = false
      }
    },
    show (value) {
      if (value) {
        this.ifConfirm = false
      }
    },
    update (value) {
      console.dir('123123')
      console.dir(value)
      if (value) {
        this.ifUpdate = false
      }
    }
  }
}
</script>
