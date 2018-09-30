<template>
  <div class="app-main">
    <LeftTools></LeftTools>
    <GraphContainer></GraphContainer>
  </div>
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
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}
</style>
