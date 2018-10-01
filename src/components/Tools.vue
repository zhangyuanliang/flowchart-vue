<template>
  <el-header class="tools flex-y-center">
    <div>
      <i class="el-icon-delete"></i>
      <i class="el-icon-circle-close-outline"></i>
      <i class="el-icon-zoom-out"></i>
      <i class="el-icon-zoom-in"></i>
      <i class="el-icon-rank"></i>
      <i class="el-icon-upload2"></i>
      <i class="el-icon-download"></i>
      <i class="el-icon-question"></i>
    </div>
  </el-header>
</template>

<script>
export default {

}
</script>

<style scoped>

.tools {
  min-width: 600px;
  height: 46px!important;
  border-bottom: 1px solid #6e94e0;
}

.tools i {
  height: 24px;
  color: #6e94e0;
  margin: 0 20px;
  font-size: 1.5em;
  cursor: pointer;
}

.tools i:hover {
  color: #9fe499;
}

</style>
