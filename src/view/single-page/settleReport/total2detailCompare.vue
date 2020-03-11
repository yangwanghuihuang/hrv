<template>
    <div class="compare">
        <div class="search">
            <Button type="primary" @click="compare('0')">校对</Button>

            <Button type="primary" @click="compare('1')">导出结果</Button>
        </div>
         <div class="main">
             <Row class="rowStyle" style="border-style:double">
                <Col span="8" class="colStyle">账期时间</Col>
                <Col span="16">
                <Input  v-model="cycleText" class="dataStyle" placeholder="结算周期列表" style="width: auto">
                    <Icon type="ios-search" slot="suffix"  @click="goCycle"  />
                </Input>
                  <!-- <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker> -->
                </Col>
            </Row>
         </div>
        <settle-cycle-modal v-if="ifShow" @confirm="confirm" @cycle="cycle"></settle-cycle-modal>
        <result v-if="ifExist" @success = "success"></result>
    </div>
</template>
<script>
import settleCycleModal from './settleCycleModal'
import result from './compareResultModal'
export default {
    components: {
      'settle-cycle-modal': settleCycleModal,
      result
    },
    data() {
        return {
            ifShow: false,
            ifExist: false,
            cycleText: ''
        }
    },
    methods: {
        compare(status) {
            if (status === '0') {
                this.ifExist = true
            }
        },
        goCycle() {
            this.ifShow = true
        },
        confirm(value) {
            this.ifShow = false
        },
        cycle(value) {
            this.cycleText = value
        },
        success(value) {
            if (value === '0') {
              this.ifExist = false
            }
           if (value === '1') {
              this.$router.push({ path: 'compareResult' })
            }
        }
    }
}
</script>
<style lang="less" scope>
.compare{
     height: 100%;
    background-color: #fff;
    .search{
          height: 10%;
          padding-left: 10px;
          text-align: left;
    }
    .main{
        height:85%;
        margin-top: 15px;

        .rowStyle{
            width: 50%;
            height: auto;

            .colStyle{
                height: 100%;
                border-right-style:double ;
                text-align: center;
                line-height: 44.36px;
            }
            .dataStyle{
                 text-align: center;
                 margin-left: 118px;
                line-height: 40px;
            }
        }

    }

}
button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    margin-right: 10px;
}

.ivu-form .ivu-form-item-label {
    text-align: center!important;
    font-size: 14px;
    font-weight: 549;
}
.ivu-col-span-6 {
    // border-right: 2px solid;
    text-align: center;
    vertical-align: center;
     height: auto;
      line-height: 63px!important;
      border-style: double;
}
.ivu-col-span-12 {
    display: block;
    // height: 43.22px!important;
     height: auto;
    // border-left: 2px  #bbbcb4;
    //  border-right: 2px  #bbbcb4;
     border-style: double;
    line-height: 55px;
    text-align: center;
}
</style>
