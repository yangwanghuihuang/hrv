// 接口服务
export default {
  mock: {
    data_list: '/monitor/moniData' // 模拟表格数据
  },
  moniExpendData: {
    moniExpendData: '/monitor/moniExpendData'
  },
  settleData: {
    settleData: '/monitor/settleData'
  },
  cycleData: {
    cycleData: '/monitor/cycleData'
  },
  login: {
    checkToken: 'vhr/api/admin/v1.0/goLogin'
  },
  getValidation: {
    getValidation:'vhr/api/admin/v1.0/getValidate', // 获取验证码
  },
  emplyeeInfo:{
    emplyeeInfo:'vhr/api/employee/v1.0/employee'//获取员工信息
  }
}
