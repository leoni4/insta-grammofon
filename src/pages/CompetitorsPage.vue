<template>
  <el-container>
    <el-header class="main-header">
      <the-header
        :activeTab="'1'"
      ></the-header>
    </el-header>
    <el-main>Competitors</el-main>
  </el-container>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
    export default {
      components: {
        'the-header': TheHeader
      }
    }
</script>

<style scoped>

</style>
