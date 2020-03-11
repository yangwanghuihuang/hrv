<template>
  <div class="uploadReport">
       <div class="search">
            <Button type="primary" @click="submit()">提交</Button>

            <Button type="primary" @click="back()">返回</Button>
        </div>
         <div class="main">
             <Row class="rowStyle" style="border-style:double">
                <Col span="4" class="colStyle">
                  <span>总表：</span></Col>
                <Col span="10"  class="colStyle8">
                   <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或拖拽上传文件</p>
                        </div>
                    </Upload>
                </Col>

                <Col span="10" class="colStyle10">
                    <span>按格式2020-03分表传入</span>
                </Col>
            </Row>
             <Row class="rowStyle" style="border-left-style:double;border-right-style:double;border-bottom-style:double">
                <Col span="4" class="colStyle">
                  <span>分表：</span></Col>
                <Col span="10"  class="colStyle8">
                   <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或拖拽上传文件</p>
                        </div>
                    </Upload>
                </Col>

                <Col span="10" class="colStyle10">
                    <span>按格式2020-03分表传入</span>
                </Col>
            </Row>
         </div>
  </div>
</template>

<script>
export default {
 name: 'divideReport',
  data() {
    return {
     file: null,
     flag: 0,
     loadingStatus: false
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
       handleUpload (file) {
                this.file = file
                return false
            },
            upload () {
                this.loadingStatus = true
                setTimeout(() => {
                    this.file = null
                    this.loadingStatus = false
                    this.$Message.success('Success')
                }, 1500)
            },
            uploadSuccess() {
                alert('上传成功')
                this.file = file
                this.flag = '1'
            },
            submit() {
                 this.$router.push({
                    name: 'divideResult',
                    params: { name: 'upload' }
                })
            }
  }
}
</script>

<style scoped lang="less">
.uploadReport{
     height: 100%;
    background-color: #fff;
    .search{
          height: 10%;
          padding-left: 10px;
          text-align: left;
          button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    margin-right: 10px;
}
    }
    .main{
        height:85%;
        margin-top: 15px;

        .rowStyle{
            width: 50%;
            height: auto;
        }
       .colStyle, .colStyle8,.colStyle10{
           text-align: center;
           height: 100%;
           line-height: 100%;

            span{
  display: block;
        margin: 50px auto;
            }
       }
        .colStyle8{
            border-left-style: double;
             border-right-style: double;
        }
    }
}
</style>
