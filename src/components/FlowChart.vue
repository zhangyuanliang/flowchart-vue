<template>
  <div class="flow-chart">
    <Tools></Tools>
    <div class="app-main">
      <LeftTools
        :btns="btns"
        @changeState="changeState"
      ></LeftTools>
      <div class="graph-container">
        <Graph
          :isDragging="isDragging"
          :toLink="toLink"
          @activeSelectBtn="activeSelectBtn"
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
      btns: [
        {name: '选择', type: 'select', draggable: false, active: true},
        {name: '自动插入', type: 'addStartEnd', draggable: false, active: false},
        {name: '开始', type: 'start', draggable: true, active: false},
        {name: '结束', type: 'end', draggable: true, active: false},
        {name: '普通活动', type: 'ordinary', draggable: true, active: false},
        {name: '块活动', type: 'block', draggable: true, active: false},
        {name: '子活动', type: 'subFlow', draggable: true, active: false},
        {name: '转移', type: 'line', draggable: false, active: false},
        {name: '自转移', type: 'polyline', draggable: false, active: false}
      ],
      isDragging: false,
      toLink: false
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
    },
    activeSelectBtn: function () {
      this.btns.forEach(function (btn) {
        if (btn.type === 'select') {
          btn.active = true
        } else {
          btn.active = false
        }
      })
      this.toLink = false
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
