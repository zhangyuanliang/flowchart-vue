<template>
  <div class="graph-container">
    <Graph></Graph>
    <GraphProp></GraphProp>
  </div>
</template>

<script>
import Graph from './Graph'
import GraphProp from './GraphProp'
export default {
  components: {
    Graph,
    GraphProp
  }
}
</script>

<style scoped>
.graph-container {
  height: 100%;
}
</style>
