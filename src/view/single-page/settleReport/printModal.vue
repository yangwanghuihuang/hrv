<template>
    <div>
       <Modal v-model="modal1" title="打印" @on-ok="ok"  @on-cancel="cancel" width="360" height="500">
           <div slot="header">
                 打印
           </div>
           <div style="text-align:left">
                 <div class="left">
                    <fieldset style="width:305px; height:235.5px;">
                       <legend>打印范围 </legend>
                        123gfhhgsfhghghghmn
                   </fieldset>
                </div>
               <div class="right">
                    <fieldset style="width:205px; height:235.5px;">
                       <legend>选项 </legend>
                      15dgfhdjmhg,mxxxxxxxxxxxx
                   </fieldset>
               </div>
           </div>
           <div slot="footer">
                 <Button type="default" @click="handleSelectAll('1')">打印</Button>
            <Button type="default" @click="handleSelectAll(true)">打印预览</Button>
            <Button type="default" @click="handleSelectAll(false)">设置</Button>
            <Button type="default">导出(excel)</Button>
            <Button type="default" @click="handleSelectAll(true)">导出pdf</Button>
            <Button type="default" @click="handleSelectAll(false)">返回</Button>
           </div>
    </Modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modal1: true
        }
    }
}
</script>
<style lang="less" scope>
//    .ivu-modal {
//     width: 560px!important;
//     height:350px!important;
// }
.ivu-modal-content{
    width: 100%!important;
    height: 100%!important;
    // display: flex;
    // flex-direction: row;
    .left{
        display: inline-block;
        width: 60%;
        height:207.5px;
    }
      .right{
            display: inline-block;
            height: 207.5px;
        width: 40%;
    }
}
.ivu-modal-footer {
    border-top: 0px solid #e8eaec;
    height: 30%;
}
.ivu-modal-body {
    height:70%!important;
    // line-height: 21.5;
}
// .content{
//     border: 1px solid #666;
// }
</style>
