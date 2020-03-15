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
    checkToken: '/vhr/api/admin/v1.0/goLogin'
  },
  getValidation: {
    getValidation:'/vhr/api/admin/v1.0/getValidate', // 获取验证码
  },
  emplyeeInfo:{
    emplyeeInfo:'/vhr/api/employee/v1.0/allEmployee'//获取员工信息
  },
  emplyeeByworkId:{
    emplyeeByworkId:'/vhr/api/employee/v1.0/employeeById'//通过条件id获取员工信息
  },
  deleteById:{
    deleteById:'/vhr/api/employee/v1.0/deleteById'//通过id删除员工信息
  },
  addEmplyee:{
    addEmplyee:'/vhr/api/employee/v1.0/add'//添加员工信息
  },
  salaryInfo:{
    salaryInfo:'/monitor/monitorSalary'//获取薪资账套
  },
  emplyeeByName:{
    emplyeeByName:'/vhr/api/employee/v1.0/employee'//通过条件id获取员工信息
  },

}
