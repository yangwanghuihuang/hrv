<template>
  <div class='userGuide'>
    <div class='search'>
      <Button type='primary' @click="todo_print('print')">打印</Button>
      <Button type='primary' @click="export_excel()">导出excel</Button>
      <Button type='primary' @click="todo_print('PDF')">导出PDF</Button>
      <Button type='primary' @click="goBack()">返回</Button>
    </div>
    <div class='main' id="print"  ref="print">
      <div class='main-title'>
        <h1>各省公司结算支出发票开具明细表（6%税率）</h1>
        <div class='main-title-label'>
          <!-- <label>结算单代码：D200</label> -->
          <label>结算月：201907</label>
          <!-- <label>税率：6%</label> -->
          <label>单位：人民币（元）</label>
        </div>
      </div>
      <div class="main-table">
        <Table :columns="columns11" :data="data10" border ref="table" :height="tableHeight"></Table>
      </div>
      <!--<div class='hot-preview'>-->
        <!--<div class="auto">-->
          <!--<HotTable v-if="handontable" ref="container" :settings='hotSettings' licenseKey='non-commercial-and-evaluation'></HotTable>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  // import { HotTable } from '@handsontable/vue'
  // import 'handsontable/dist/handsontable.full.css'
  export default {
    components: {
     // HotTable
    },
    data () {
      return {
        columns11: [
          {
            title: '序号',
            key: 'A',
            align: 'center'
          },
          {
            title: '3',
            key: 'B',
            align: 'center'
          },
          {
            title: '4',
            key: 'C',
            align: 'center'
          },
          {
            title: '5',
             key: 'D',
            align: 'center'
          },
          {
            title: '6',
             key: 'E',
            align: 'center'
          },
          {
            title: '7',
             key: 'F',
            align: 'center'
          },
          {
            title: '8',
               key: 'G',
            align: 'center'
          },
          {
            title: '9',
               key: 'H',
            align: 'center'
          },
          {
            title: '10',
               key: 'I',
            align: 'center'
          },
          {
            title: '11',
               key: 'J',
            align: 'center'
          },
          {
            title: '12',
               key: 'K',
            align: 'center'
          },
          {
            title: '13',
               key: 'L',
            align: 'center'
          }
        ],
        data10: []
        // handontable: false,
        // hotSettings: {
        //   readOnly: true,
        //   // colHeaders: true,
        //   // rowHeaders: true,
        //   manualColumnFreeze: true,
        //   manualColumnMove: true,
        //   manualRowMove: true,
        //   manualColumnResize: true,
        //   manualRowResize: true,
        //   stretchH: 'all',
        //   preventOverflow: 'vertical',
        //   autoColumnSize: true,
        //   wordWrap: true,
        //   data: [
        //     ['序号', '省公司', '往来投', '应结出', null, null, '应结入', null, null, '结算额'],
        //     [null, null, null, '不含税金额(A1)', '税额(A2)', '含税金额(A3)', '不含税金额(B1)', '税额(B2)', '含税金额(B3)', '含税金额(C-B3-A3)'],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'www', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'ttt', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', '广东', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'qqq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'qqq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['2', '上海', 2810, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'qqq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'qqq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['1', 'qqq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['3', '天津', 2910, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        //     ['11221', 'wtq', 2110, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
        //   ],
        //   mergeCells: [
        //     { row: 0, col: 0, rowspan: 2, colspan: 1 },
        //     { row: 0, col: 1, rowspan: 2, colspan: 1 },
        //     { row: 0, col: 2, rowspan: 2, colspan: 1 },
        //     { row: 0, col: 3, rowspan: 1, colspan: 3 },
        //     { row: 0, col: 6, rowspan: 1, colspan: 3 }
        //   ],
        //   className: 'htCenter htMiddle'
        // }
      }
    },
    mounted() {
      const data = []
      for (let i = 2; i < 20; i++) {
        data.push({
          A: '北京',
          B: '2010',
          C: '2110',
          D: 0,
          E: 0,
          F: 0,
          G: 0,
          H: 0,
          I: 0,
          J: 0,
          K: 0,
          L: 0
        })
      }
      this.data10 = data
      this.tableHeight = (document.documentElement.clientHeight * (6 / 10))
      // setTimeout(() => {
      //   this.handontable = true
      // }, 500)
    },
    methods: {
      start_print() {
        let newDomHtml = this.$refs.print.innerHTML
        window.document.body.innerHTML = newDomHtml
        window.print()
        window.location.reload()
        return false
      },
      export_excel() {
        import('../../../libs/Export2Excel').then(excel => {
          const multiHeader = [['序号', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']]
          const header = ['结算单编号', '', '', '不含税金额(A1)', '税额(A2)', '含税金额(A3)', '不含税金额(B1)', '税额(B2)', '含税金额(B3)', '含税金额(C-B3-A3)']
          const filterVal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L']
          const list = this.data10
          const data = this.formatJson(filterVal, list)
        //   const merges = ['A1:A2', 'B1:B2', 'C1:C2', 'D1:F1', 'G1:I1', 'J1:J1']
          const filename = '导出发票'
          excel.export_json_to_excel({
            multiHeader,
            header,
            // merges,
            data,
            filename
          })
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          console.dir(j)
          console.dir(v)
          console.dir(v[j])
          return v[j]
        }))
      },
      todo_print(type) {
        this.$router.push({ name: 'excelDemoPrint', params: { type: type } })
      },
      goBack() {
        this.$router.push({ path: 'invoicePage' })
      }
    }
  }
</script>

<style lang='less'>
  .userGuide{
    height: 100%;
    background-color: #fff;
    .search{
      height: 10%;
      padding-left: 10px;
      display: flex;
      align-items: center;
      margin:2px;
      .ivu-btn-primary{
        margin-left: 10px;
      }
    }
    .main{
      padding: 10px;
      height: 90%;
      .main-title{
        h1{
          text-align: center;
        }
        .main-title-label{
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
      /*.hot-preview{*/
        /*height: 85%;*/
        /*overflow: hidden;*/
        /*.auto{*/
          /*overflow: auto;*/
          /*height: 100%;*/
          /*.ht_master .wtHolder {*/
            /*overflow: auto;*/
          /*}*/
        /*}*/
      /*}*/
    }
  }
</style>
