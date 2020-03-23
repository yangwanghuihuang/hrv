<template>
  <div class="header-layout">
    <div class="header-left">
      <h1>微人事信息管理系统</h1>
    </div>
    <div class="header-right">
      <Icon type="md-person" color="#128af6"/>
      <p style="font-size: 0.5em">{{user_info}}({{groupName}})</p>
      <Icon style="cursor:pointer;" type="ios-power" color="#128af6" @click="confirm"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HeaderBar',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        user_info: '管理员',
        groupName: '前端开发'
      }
    },
    computed: {},
    mounted() {},
    methods: {
      confirm () {
        this.$Modal.confirm({
          title: '确认退出？',
          onOk: () => {
            this.$Message.info('成功退出')
            this.$router.push({ name: 'login' })
            this.$store.dispatch('user/access_token', '')
            localStorage.clear()
            sessionStorage.clear()
          },
          onCancel: () => {
            this.$Message.info('已取消退出')
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .header-layout{
    height: 100%;
    width: 100%;
    display: flex;
    color: #fff;
    .header-left{
      padding-left: 10px;
      height: 100%;
      width: 80%;
      display: flex;
      align-items: center;
    }
    .header-right{
      height: 100%;
      width: 20%;
      padding-right:10px;
      font-size: 1.5em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .content-main{
        color: #000c17;
      }
    }
  }
</style>
