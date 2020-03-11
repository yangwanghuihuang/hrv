<template>
  <Layout class="layout">
    <Header>
      <HeaderBar></HeaderBar>
    </Header>
    <Layout>
      <Sider :style="{overflow: 'auto'}">
        <Menu theme="dark" width="auto" ref="menu" @on-select="handleSelect" :active-name="activeName" :open-names="openName" accordion>
          <div v-for="item in menu_list" :key="item.menu_url">
            <MenuItem v-if="!item.children_list" :name="item.menu_url">{{item.menu_name}}</MenuItem>
            <menuItem  v-if="item.children_list" :itemData="item"></menuItem>
            <!--<Submenu v-if="item.children_list" :name="item.menu_id">-->
              <!--<template slot="title">-->
                <!--<Icon :type="item.menu_icon" />-->
                <!--{{item.menu_name}}-->
              <!--</template>-->
              <!--<div v-for="(item_child) in item.children_list" :key="item_child.menu_url">-->
                <!--<MenuItem v-if="!item_child.children_list" :name="item_child.menu_url"> {{item_child.menu_name}}</MenuItem>-->
                <!--<Submenu v-if="item_child.children_list" :name="item_child.menu_id">-->
                  <!--<template slot="title">-->
                    <!--<Icon :type="item_child.menu_icon" />-->
                    <!--{{item_child.menu_name}}-->
                  <!--</template>-->
                  <!--<MenuItem :name="item_child_child.menu_url" v-for="(item_child_child) in item_child.children_list" :key="item_child_child.menu_url"> {{item_child_child.menu_name}}</MenuItem>-->
                <!--</Submenu>-->
              <!--</div>-->
            <!--</Submenu>-->
          </div>
        </Menu>
      </Sider>
      <Content class="content">
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
  import HeaderBar from './components/header'
  import menuItem from './components/menuItem'
  import Menu from './menu'
  export default {
    name: 'Main',
    components: {
      HeaderBar,
      menuItem
    },
    data () {
      return {
        type: 'main',
        activeName: '',
        openName: [],
        headerHeight: 5 + 'rem',
        siderHeight: (document.documentElement.clientHeight + 50) + 'px',
        siderWidth: (document.documentElement.clientWidth * (4 / 30)) + 'px',
        foooterHeight: (document.documentElement.clientHeight * (3 / 10)) + 'px'
      }
    },
    computed: {
      menu_list() {
        this.$store.commit('menu/setSiderMenuMap', Menu)
        return Menu
      }
    },
    watch: {
      '$route' (newRoute) {
        this.activeName = newRoute.name
        let SiderMenuMap = this.$store.state.menu.siderMenuMa
        if (SiderMenuMap.has(newRoute.name) && SiderMenuMap.get(newRoute.name).parent_menu_id) {
          if (this.openName.indexOf(SiderMenuMap.get(newRoute.name).parent_menu_id) === -1) {
            this.openName.push(SiderMenuMap.get(newRoute.name).parent_menu_id)
          }
        } else {
          this.openName = []
        }
        this.$nextTick(() => this.$refs.menu.updateOpened())
      }
    },
    created() {
      this.activeName = this.menu_list[0].menu_url
    },
    mounted () {},
    methods: {
      handleSelect (name) {
        this.$router.push({ name: name })
      }
    }
  }
</script>
<style lang="less">
  .layout{
    height: 100%;
    width: 100%;
    .ivu-layout-header {
      background: #0c6395;
      padding: 0;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
      padding-left: 43px;
    }
    .ivu-menu {
      font-size: 1rem!important;
    }
    .ivu-menu-item {
      font-size: 1rem!important;
    }
    .content{
      padding: 20px;
    }
  }
</style>
