<template>
  <el-header class="tools flex-y-center">
    <div>
      <i class="el-icon-delete" title="清空"></i>
      <i class="el-icon-circle-close-outline" title="删除"></i>
      <i class="el-icon-zoom-out" title="缩小"></i>
      <i class="el-icon-zoom-in" title="放大"></i>
      <i class="el-icon-rank" title="归位"></i>
      <i class="el-icon-upload2" title="导出"></i>
      <i class="el-icon-download" title="导入"></i>
      <i class="el-icon-question" title="帮助"></i>
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
