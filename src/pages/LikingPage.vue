<template>
    <el-container>
      <el-header class="main-header">
        <the-header
          :activeTab="'0'"
        ></the-header>
      </el-header>
      <el-main>Liking</el-main>
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
