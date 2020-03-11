<template>
  <div class="invoicePage">
      <div class="search">
           <Button type="primary" @click="incomeDetail()">收入明细</Button>
           <Button type="primary" @click="outcomeDetail()">支出明细</Button>
      </div>
      <div class="main">
        <Form :label-width="100">
        <FormItem label="结算周期：">
             <Input disabled placeholder="Enter text" style="width: auto">
                <Icon type="ios-search" slot="suffix" @click="goCyle()"/>
            </Input>
        </FormItem>
        </Form>
      </div>
      <cycle-model v-if="ifShow" @confirmCycle="confirmCycle"></cycle-model>
  </div>
</template>

<script>
import cycleModal from './cycleModal'

export default {
 name: 'invoicePage',
  data() {
    return {
       settleCycle: '2010',
       ifShow: false,
        columns4: [

          {
            title: '结算周期',
            key: 'age',
             slot: 'action',
             width: 150,
             align: 'center'
          }
        ],
        data1: []
    }
  },
  components: {
      'cycle-model': cycleModal
  },
  watch: {},
  mounted() {},
  methods: {
      goCycleData() {
         this.settleCycle = '2010-11'
      },
      goCyle() {
         this.ifShow = true
      },
      confirmCycle() {
          this.ifShow = false
      },
      incomeDetail() {
           this.$router.push({ path: 'invoiceExcel' })
      },
      outcomeDetail() {
            this.$router.push({ path: 'invoiceExcel' })
      }
  }
}
</script>

<style scoped lang="less">
 .invoicePage{
    height: 100%;
    background-color: #fff;
    .search{
          height: 15%;
          padding-left: 10px;
          text-align: left;
          margin:2px;
          }
}
button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    margin-right: 12px;
}
</style>
