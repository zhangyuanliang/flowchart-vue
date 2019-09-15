<template>
  <div class="flow-chart">
    <Tools></Tools>
    <div class="app-main">
      <div class="left-tools">
        <LeftToolBtn></LeftToolBtn>
      </div>
      <div class="graph-container">
        <Graph></Graph>
        <GraphProp></GraphProp>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '@/components/Tools'
import LeftToolBtn from '@/components/LeftToolBtn'
import Graph from '@/components/Graph'
import GraphProp from '@/components/GraphProp'

export default {
  data () {
    return {
      state: {
      }
    }
  },
  components: {
    Tools,
    LeftToolBtn,
    Graph,
    GraphProp
  }
}
</script>

<style scoped>
.flow-chart {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-main {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.graph-container {
  flex-grow: 1;
}

.left-tools {
  width: 160px;
  height: 100%;
  border-right: 1px solid #6e94e0;
}

.left-tools ul {
  padding: 0 10px;
  color: #757474;
}
</style>
