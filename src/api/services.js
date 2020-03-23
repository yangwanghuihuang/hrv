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
    emplyeeInfo:'/vhr/api/employee/v1.0/allEmployee0'//获取员工信息
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
    salaryInfo:'/vhr/api/salary/v1.0/salaryDept'//获取薪资账套 
  },
  salaryByName:{
    salaryByName:'/vhr/api/salary/v1.0/salaryById'//编辑的时候查询账套
  },
  saveSalary:{
    saveSalary:'/vhr/api/salary/v1.0/addSalary'//新增账套
  },
  updateSalary:{
    updateSalary:'/vhr/api/salary/v1.0/updateSalary'//修改账套
  },
  deleteSalaryById:{
    deleteSalaryById:'/vhr/api/salary/v1.0/deleteSalaryById'//删除账套
  },
  emplyeeByName:{
    emplyeeByName:'/vhr/api/employee/v1.0/employee'//通过条件id获取员工信息
  },
  updateEmp:{
    updateEmp:'/vhr/api/employee/v1.0/update'  //修改员工信息
  },
  param:{
    getDepart:'/vhr/api/employee/v1.0/getDepart'//获取所有部门信息
  },
  getPost:{
    getPost:'/vhr/api/employee/v1.0/getPost'//通过部门id获取职位id
  },
  selsetAllPosts:{
    selsetAllPosts:'/vhr/api/post/v1.0/selsetAllPosts'//获取岗位信息
  },
  empSalary:{
    empSalary:'/vhr/api/empsalary/v1.0/salaryDept'//获取员工工资账套
  },
  empSalaryById:{
    empSalaryById:'/vhr/api/empsalary/v1.0/salaryEmpById'//通过账套信息查询工资账套
  },
  salaryById:{
    salaryById:'/vhr/api/empsalary/v1.0/salaryById'//通过员工id修改员工工资账套
  },
  selectEmp:{
    selectEmp:'/vhr/api/empsalary/v1.0/selectEmp'//通过部门、工龄、转正信息组合条件查询员工信息
  },
  queryDepartById:{
    queryDepartById:'/vhr/api/post/v1.0/queryDepartById'//通过部门id查询部门信息
  },
  updateDeparts:{
    updateDeparts:'/vhr/api/post/v1.0/updateDeparts'//修改部门信息
  },
  deleteDeparts:{
    deleteDeparts:'/vhr/api/post/v1.0/deleteDeparts'//通过部门id删除部门信息
  },
  addDepartments:{
    addDepartments:'/vhr/api/post/v1.0/addDepartments'//添加部门信息
  },
  addPosts:{
    addPosts:'/vhr/api/post/v1.0/addPosts'//添加岗位信息
  },
  queryPostById:{
    queryPostById:'/vhr/api/post/v1.0/queryPostById'//通过岗位id查询岗位信息
  },
  updatePosts:{
    updatePosts:'/vhr/api/post/v1.0/updatePosts'//修改岗位信息
  },
  deletePosts:{
    deletePosts:'/vhr/api/post/v1.0/deletePosts'//删除岗位信息
  }
}
