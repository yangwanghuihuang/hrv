const data1 = [
    {
      'title': '建立、建全、规范人事档案',
      'main': '提供了一个较为实用的新进、离职、调动等管理员工信息的平台',
      'childrenLeft': [
        { 'title': '新进管理', 'main': '当有新入职员工时，人事管理员对新人基本信息进行登记并保存', 'id': 1.1 },
        { 'title': '离职管理', 'main': '当有员工离职时，人事管理员对离职员工进行状态的更改，而并非实际删除该员工信息，待一段时间后即可删除', 'id': 1.2 },
        { 'title': '调动管理', 'main': '当有员工需要调岗时，人事管理员需要对员工所在部门和岗位信息重新调整，并做保存', 'id': 1.3 },
      ],
      'childrenRight': [
        { 'title': '工时管理', 'main': '录入员工工作信息', 'id': 1.7 },
        { 'title': '资料管理', 'main': '员工资料管理', 'id': 1.8 },
      ],
      'id': 1
    },
    {
      'title': '设备管理',
      'main': '提供设备的合理化管理，提高设备使用率',
      'childrenLeft': [
        { 'title': '虚拟机管理', 'main': '提供虚拟机申请、变更、续期、回收、释放等完整的管理体系', 'id': 2.1 },
        { 'title': 'IP管理', 'main': '提供IP地址申请、变更、续期、回收、释放等完整的管理体系', 'id': 2.2 },
        { 'title': '磁盘管理', 'main': '提供磁盘申请、变更、续期、回收、释放等完整的管理体系', 'id': 2.3 }
      ],
      'childrenRight': [
        { 'title': '物理机管理', 'main': '提供物理机机申请、变更、续期、回收、释放等完整的管理体系', 'id': 2.4 },
        { 'title': '云存储管理', 'main': '提供云存储申请、变更、续期、回收、释放等完整的管理体系', 'id': 2.5 }
      ],
      'id': 2
    },
    { 'title': '网络管理',
  'main': '提供网络安全环境',
    'childrenLeft': [
      { 'title': 'DMZ域管理', 'main': '提供DMZ域公网IP管理和网络策略开通功能', 'id': 3.1 },
      { 'title': '承载网管理', 'main': '提供承载网网络策略开通功能', 'id': 3.2 }
    ],
    'childrenRight': [
      { 'title': 'VPN管理', 'main': '提供VPN账号管理和访问权限开通申请功能', 'id': 3.4 }
    ],
    'id': 3
  
    },
//     { 'title': '统计报表',
//   'main': '提供需求工时资源监控等视图报表',
//     'childrenLeft': [
//       { 'title': '需求时间点报表', 'main': '提供需求开发全流程每个阶段的时间点数据报表', 'id': 4.1 },
//       { 'title': '工作量报表', 'main': '提供各项目组每月完成需求的预估、核算及实际工时的统计对比', 'id': 4.2 },
//       { 'title': '资源监控报表', 'main': '提供各项目组每周资源使用率统计报表', 'id': 4.3 },
//       { 'title': '季度验收报表', 'main': '提供各项目组每季度工时需求对比报表', 'id': 4.4 }
//     ],
//     'childrenRight': [
//       { 'title': '需求环节报表', 'main': '提供需求开发过程每个环节的需求总数统计', 'id': 4.4 },
//       { 'title': '版本发布报表', 'main': '提供各项目组每月发布的版本数及关联需求数', 'id': 4.5 },
//       { 'title': '资源告警报表', 'main': '提供各项目组每月资源告警统计报表', 'id': 4.5 }
//     ],
//     'id': 4
  
//     }
  ]
  const data2 = [
    { 'title': '部门工资账套管理',
      'main': '主要是根据部门不同，有不同的工资标准，以便月底结算工资',
      'childrenLeft': [
        { 'title': '部门账套', 'main': '部门账套管理是管理员根据公司实际排名情况等，由董事部会议一致通过，划分各部门进行基本工资账套的标准', 'id': 1.1 },
        { 'title': '员工账套', 'main': '员工工资是根据其所在部门的基本标准，加上个人 奖金等进行计算', 'id': 1.2 }
      ],
      'childrenRight': [
        { 'title': '员工工资管理', 'main': '员工登录自己的账号，可以查询得到自己的工资。默认展示入职以来所有的工资记录，员工还可以按照月份查看自己某个月份的工资情况', 'id': 1.3 }
      ],
      'id': 1
    },
    { 'title': '报表管理',
  'main': '按模板生成报表，对报表数据展示不同维度和样式的配置以及推送',
    'childrenLeft': [
      { 'title': '模板配置', 'main': '按模板生成报表之前的预览等功能，包括模板所对应的指标映射，报表类型，统计方法、呈现方式等内容', 'id': 2.1 },
      { 'title': '结果推送', 'main': '对评价结果进行邮件、微信形式的推送', 'id': 2.2 }
    ],
    'childrenRight': [
      { 'title': '结果管理', 'main': '提供固定格式的日报，周报，月报，固定周期的对比分析报告', 'id': 2.3 }
    ],
    'id': 2
    },
    { 'title': '任务管理', 'main': '针对采集和计算任务进行统一管理，统一调度', 'children': '' }
  ]
  const data3 = [
    { 'title': '社保管理',
      'main': '为员工提供基本的生活保障',
      'childrenLeft': [
        { 'title': '医疗保险管理', 'main': '提供容器的集群，应用系统和应用组管理', 'id': 1.1 },
        { 'title': '公积金管理', 'main': '提供系统应用配置和日志配置', 'id': 1.2 },
        { 'title': '养老保险管理', 'main': '提供物理节点和网络策略的管理', 'id': 1.2 },
      ],
      'childrenRight': [
        { 'title': '补助管理', 'main': '提供自定义告警、应用异常状态告警及重要操作实施告警', 'id': 1.3 },
         { 'title': '交通补助管理', 'main': '提供应用容器配置，支持应用自动部署调度、水平扩展', 'id': 1.8 },
         { 'title': '就餐补助管理', 'main': '提供镜像仓库，支持镜像本地上传，编辑等功能，支持镜像自动部署和自动分发到所有节点功能', 'id': 1.9 },
         { 'title': '住房补助', 'main': '提供网络视图，容器库运行视图，镜像库视图，物理节点视图，监控汇总视图及告警视图', 'id': 1.10 }
        // { 'title': '历史轨迹管理', 'main': '提供以需求为单位的全流程操作历史轨迹', 'id': 1.11 }
      ],
      'id': 1
    }
  ]
  const data4 = [
    { 'title': '招聘管理',
      'main': '提供本公司的紧缺岗位招聘信息，为公司引进人才',
      'childrenLeft': [
        { 'title': '招聘流程', 'main': '（1）各部门传递人员增补单；（2）根据部门人员的实际需要有针对性、合理性招聘员工，以配备各岗位;（3）通过采取一系列切实措施，如广发招聘信息、网上招聘、定点招聘等各种办法揽用工人才，卓有成效。', 'id': 1.1 },
        { 'title': '初试环节', 'main': '对有意向参与本公司合作的人才，提供笔试初试环节', 'id': 1.2 },
        { 'title': '面试环节', 'main': '对通过初始者，进行经理级别人员的面试', 'id': 1.2 }
      ],
      'childrenRight': [
        { 'title': '公司简介', 'main': '提供公司基本信息及福利待遇展示', 'id': 1.3 },
         { 'title': '公司要求', 'main': '提供公司对人才的要求', 'id': 1.8 }
      ],
      'id': 1
    }
  ]
  export default {
    data1: data1,
    data2: data2,
    data3: data3,
    data4: data4
  }
  