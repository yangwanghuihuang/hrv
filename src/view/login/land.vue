<template>
  <div class="land">
    <div class="login-form">
      <Form ref="loginForm" :model="loginForm" :rules="loginFormRule" :label-width="80">
        <Row class="login-info-title">
          <Col span="15" class="login-info-title-left">登录</Col>
          <!--<Col span="9"><h5 class="login-info-title-right" @click="loginNavToSecond">没有账号？立即注册</h5></Col>-->
        </Row>
        <FormItem prop="username">
          <Row>
            <Col span="16">
              <Input placeholder="请输入用户名" v-model="loginForm.username" autocomplete="off"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="password">
          <Row>
            <Col span="16">
              <Input placeholder="请输入密码" v-model="loginForm.password" type="password"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="identifyCodes">
          <Row>
            <Col span="10">
              <Input placeholder="请输入验证码" v-model="loginForm.identifyCodes"></Input>
            </Col>
            <Col span="5" offset="1">
              <!--<img :src="codeUrl" v-if="codeUrl" @click="getVerificationCode"/>-->
               <Button type="primary" v-if="sendValidationCode"  @click="getValidation()">获取验证码</Button>
               <span class="validate" v-show="!sendValidationCode">{{validationTime}}s后重新发送 </span>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit('loginForm')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import services from '../../api/services'
  export default {
    name: 'land',
    data () {
      return {
        sendValidationCode:true,
        validationTime:0,
        codeUrl: '',
        requestCodeFlag: false,
        loginForm: {
          username: '',
          password: '',
          identifyCodes: '',
          grant_type: 'password'
        },
        loginFormRule: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
        data:''
      }
    },
    mounted() {},
    methods: {
      /* 获取验证码 **/
      getValidation() {
       
        this.$refs['loginForm'].validate((valid)=>{
           if(valid){
              alert("lll")
               this.sendValidationCode=false
               this.validationTime = 60
        var timetimer =  setInterval(()=>{
                this.validationTime--;
                if(this.validationTime<=0){
                    this.sendValidationCode = true;
                    clearInterval(timetimer);
                }
            }, 1000);
        
         this.$http
          .post(services.getValidation.getValidation)
          .then(res => {
            if (
              res.data &&
              res.data.resultMessage === "000000" &&
              res.data.result
            ) {
              this.data= res.data.result;
            } else if (res.data && res.data.resultCode !== "000000") {
              this.data ='';
              this.$Message.danger("服务调用出错！");
            } else if (
              res.data &&
              res.data.resultCode === "000000" &&
              !res.data.result
            ) {
              this.data = '';
              this.$Message.danger("无对应的数据！");
            }
          });
           }else{
                this.$Message.danger("手机号格式不正确，请重新输入");
           }
       })
      },
      loginNavToSecond() {
        this.$emit('loginNav', 2)
      },
        submit(loginForm) {
	    	      this.$refs[loginForm].validate((valid) => {
	    	        if (valid) {
                    let access_token = 'qwerdasdadqeffgsg'
                    this.$store.dispatch('user/access_token', access_token)
	    	          // // let CryptoJS_password = this.$publicFunc.encrypt(this.loginForm.password)
	    	          let formData = {
	    	            username: this.loginForm.username,
	    	            password: this.loginForm.password,
	    	            authority: this.data
	    	          }
	    	          this.$http.post(services.login.checkToken, formData).then(res => {
	    	            if (res && res.data) {
	    	              if (res.data) {
	    	               if(res.data.resultCode === '000000'){
	    	                    this.$router.push({name:'userGuide'}) 
	    	               }
	    	            
	    	              }
	    	            }
	    	          })
	    	        } else {
	    	          this.$Message.warning('请完善登录信息!')
	    	        }
	    	      })
	    	    }
    }
  }
</script>

<style lang="less">
  .land{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      width: 25%;
      background-color: white;
      img{
        height: 30px;
        width: 70px;
        cursor: pointer;
      }
      .login-info-title{
        margin-bottom: 1rem;
        margin-top: 1rem;
        .login-info-title-left{
          padding-left: 2rem;
          font-size: 30px
        }
        .login-info-title-right{
          color: #348EED;
          cursor: pointer;
          margin-top: 10px;
        }
      }
      .login-info-footer{
        .login-info-footer-btn{
          width: 66.56%;
          font-size: medium
        }
      }
    }
  }
  .ivu-col-span-5 {
    display: block;
    width: 34.833333%;
}
</style>
