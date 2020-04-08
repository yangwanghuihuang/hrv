<template>
  <div>
    <div class="header">
      <List header="模块参数配置" border>
        <ListItem>
          <Row>
            <Col span="8">模块名称：</Col>
            <Col span="16">模块代码：stat_new_balance_c5、check_sup_c5</Col>
          </Row>
        </ListItem>
        <ListItem>参数描述：</ListItem>
      </List>
    </div>
    <div class="header">
      <List header="通用参数" border>
        <ListItem>
          <Row>
            <Col span="8">运行日期：</Col>
            <Col span="16">3</Col>
          </Row>
        </ListItem>
        <ListItem>
          <Row>
            <Col span="8">结算汇总表名称：</Col>
            <Col span="16">CBBS_RST_BALANCE_NEW_SP</Col>
          </Row>
        </ListItem>
      </List>
    </div>
    <div class="header">
      <List header="日志参数" border>
        <ListItem>
          <Row>
            <Col span="8">日志路径：</Col>
            <Col span="16">CBBS_RST_BALANCE_NEW_SP</Col>
          </Row>
        </ListItem>
        <ListItem>
          <Row>
            <Col span="8">日志级别：</Col>
            <Col span="16">
              <Select v-model="model16" multiple :max-tag-count="2">
                <Option
                  v-for="item in cityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </Col>
          </Row>
        </ListItem>
      </List>
    </div>
    <div class="footer">
      <Button type="primary" :loading="modal_loading" @click="confirm()">修改保存</Button>

      <Button type="primary" :loading="modal_loading" @click="del()">新增参数</Button>
    </div>
    <plugin-modal v-if="ifshow" @back="back"></plugin-modal>
  </div>
</template>
<script>
import pluginModal from './pluginsModal'
export default {
  components: {
    'plugin-modal': pluginModal
  },
  data () {
    return {
      ifshow: false,
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model16: []
    }
  },
  methods: {
    confirm () {
      alert('保存当前的数据')
      this.ifshow = true
    },
    del () {
      alert('返回当前页面')
    },
    back (value) {
      this.ifshow = false
    }
  }
}
</script>
<style lang="less" scoped>
.ivu-row {
  width: 100%;
}
.ivu-select {
  width: 55%;
}
.footer {
  margin-top: 15px;
  padding-left: 800px;
  .ivu-btn-primary {
    margin-right: 5px;
  }
}
</style>
