<template>
  <el-menu  class="el-menu-demo header-app-menu" mode="horizontal" :default-active="activeTab" @select="handleClick">
    <el-menu-item
      v-for="(item, index) in menuItems"
      :index="item.name"
    >
      {{item.title}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data(){
    return{
      menuItems: [
        {
          title: 'Liking and Folloving',
          link: '#/liking-page',
          name: '0'
        },
        {
          title: 'Competitors',
          link: '#/competitors-page',
          name: '1'
        }
      ],
    }
  },
  methods: {
    handleClick (tab, event) {
      var myTab = this.menuItems[tab/1];
      document.location = myTab.link;
    }
  },
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.header-app-menu, .el-menu-item{
  background: transparent!important;
}
</style>
