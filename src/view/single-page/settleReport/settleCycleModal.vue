<template>
    <div class="settleCycleMpdal">
           <Modal v-model="modal1" title="周期" width="560" height="500"  top="20px"  @on-cancel="cancel">
            <div slot="header">
                  <Button type="default" @click="confirm()">确定</Button>
            </div>
            <div  style="text-align:left">
                <div class="contentSettle">
                     <span class="text"> 第{{pageIndex}}页 / 共{{totalPage}}页 共{{dataCount}}条</span><Page class="pageStyle" show-total simple show-sizer @on-page-size-change="pageSizeChange" :pageHeight="pageHeight" :total="dataCount" :page-size="pageSize"  @on-change="changepage"></Page>
                </div>
                  <Table :height="tableHeight"  border ref="selection" :columns="columns4" :data="data1"></Table>

            </div>
             <div slot="footer">

            </div>
           </Modal>
    </div>
</template>
<script>
import services from '../../../api/services'
export default {
    data() {
        return {
            modal1: true,
            pageHeight: 0,
            dataCount: 0,
            totalPage: 0,
            pageSize: 7,
            pageIndex: 1,
            tableHeight: 0,
             currentid: 0,
        id_jishi: 0,
           columns4: [
                {
                    title: '单选按钮',
            key: 'chose',
            width: 70,
            align: 'center',
            render: (h, params) => {
              console.dir(params)
              let id = params.row._rowKey
              console.dir(id)
              let flag = false
              console.dir(this.currentid)
              console.dir(id)
              if (this.currentid === id) {
                flag = true
              } else {
                flag = false
              }
              let self = this
              return h('div', [
                h('Radio', {
                  props: {
                    value: flag,
                    idjishi: 0
                  },
                  on: {
                    'on-change': () => {
                      console.dir(id + 'on')
                      console.dir(self.currentid + 'on1')
                      self.currentid = id
                      console.dir(this.currentid)
                      console.dir(params)
                       this.id_jishi = params.row._rowKey
                         console.dir(this.id_jishi)
                    }
                  }
                })
              ])
            }
                },
                {
                    title: '结算周期',
                    key: 'settleCycle'
                },
                {
                    title: '开始日期',
                    key: 'startTime'
                },
                {
                    title: '结束日期',
                    key: 'endTime'
                }
        ],
        data1: [

        ],
        dataTotal: []
        }
    },
      mounted() {
      this.tableHeight = (document.documentElement.clientHeight * (6 / 10))
          this.$http
      .post(services.settleData.settleData)
      .then(
        res => {
          if (res.data && res) {
             this.dataTotal = res.data
             this.dataCount = this.dataTotal.length
              this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)

            //   if(this.dataTotal.length%this.pageSize){
            //           this.totalPage = this.dataTotal.length/this.pageSize+1
            //   }
             if (this.dataTotal.length < this.pageSize) {
                    this.data1 = this.dataTotal
                } else {
                    this.data1 = this.dataTotal.slice(0, this.pageSize)
                }

            // 进行跳转成功页面
            // 成功后调用服务
            // 给父组件传递flag标志，1为关闭当前，打开success。
          } else if (res.data && res.data.resultCode !== '000000') {
            this.$dialog.alert({ message: '服务器调用出错！' })
          }
        },
        res => {
          // error callback
        }
      )
      },
    methods: {
       changepage(index) {
        console.dir(index)
        this.pageIndex = index
                var _start = (index - 1) * this.pageSize
                var _end = index * this.pageSize
               console.dir(_start)
               console.dir(_end)
                this.data1 = this.dataTotal.slice(_start, _end)
                console.dir(this.data1)
      },
      pageSizeChange(value) {
        this.pageSize = value
           this.totalPage = Math.ceil(this.dataTotal.length / this.pageSize)
        },
      confirm() {
        // this.$router.push({path:"settleReport"})
        this.$emit('cycle', this.currentid)
        this.$emit('confirm', 1)
    },
      cancel () {
                  this.$emit('confirm', '1')
            }
    }

}
</script>
<style lang="less" scoped>
.contentSettle{
    display: flex;
    flex-direction: row;
    .pageStyle{
    background-color: #fff;
    width: auto;
}
}
.text{
    width: auto;
    height: 32px;
    line-height: 27px;
    margin-left:271px;
}

</style>
