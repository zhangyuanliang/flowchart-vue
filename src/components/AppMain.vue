<template>
  <el-container class="app-main">
    <el-aside width="200px">
      <LeftTools></LeftTools>
    </el-aside>
    <el-main class="no-padding">
      <GraphContainer></GraphContainer>
    </el-main>
  </el-container>
</template>

<script>
import LeftTools from './LeftTools'
import GraphContainer from './GraphContainer'
export default {
  components: {
    LeftTools,
    GraphContainer
  }
}
</script>

<style scoped>
.app-main {
  display: flex;
  flex-grow: 1;
}
.app-main .el-container {
  height: 100%;
}
</style>
