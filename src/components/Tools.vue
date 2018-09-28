<template>
  <el-header class="tools">
    <i class="el-icon-delete"></i>
    <i class="el-icon-circle-close-outline"></i>

    <i class="el-icon-zoom-out"></i>
    <i class="el-icon-zoom-in"></i>
    <i class="el-icon-rank"></i>

    <i class="el-icon-upload2"></i>
    <i class="el-icon-download"></i>

    <i class="el-icon-question"></i>
  </el-header>
</template>

<script>
export default {

}
</script>

<style scoped>

.tools {
  background-color: #ACB9CB;
  height: 100%;
}

.tools i {
  color: #606266;
  margin: 0 20px;
  font-size: 1.5em;
  vertical-align: middle;
}

.tools i:after {
  font-size: 0;
  content: "";
  height: 100%;
}

</style>
