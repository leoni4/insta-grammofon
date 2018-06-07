<template>
  <div class="header-app-menu">
    <el-menu  class="el-menu-demo" mode="horizontal" :default-active="activeTab" @tab-click="handleClick">
      <el-menu-item
        v-for="(item, index) in menuItems"
        :index="item.name"
      >
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          title: 'Liking and Folloving',
          name: 1
        },
        {
          title: 'Competitors',
          name: 2
        }
      ],
      activeTab: 1
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.header-app-menu{
  box-shadow: inset 0 10px 10px -10px rgba(0,0,0,.2);
}
</style>
