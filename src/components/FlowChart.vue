<template>
  <div class="flow-chart">
    <Tools></Tools>
    <div class="app-main">
      <LeftTools
        @changeState="changeState"
      ></LeftTools>
      <div class="graph-container">
        <Graph
          :isDragging="isDragging"
          :isLinking="isLinking"
        ></Graph>
        <GraphProp></GraphProp>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from './Tools'
import LeftTools from './LeftTools'
import Graph from './Graph'
import GraphProp from './GraphProp'

export default {
  data () {
    return {
      isDragging: false,
      isLinking: false
    }
  },
  components: {
    Tools,
    LeftTools,
    Graph,
    GraphProp
  },
  methods: {
    changeState: function (state) {
      this[state.key] = state.value
    }
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
</style>
