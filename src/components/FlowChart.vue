<template>
  <div class="flow-chart">
    <Tools></Tools>
    <div class="app-main">
      <div class="left-tools">
        <ul>
          <li
            is="LeftToolBtn"
            v-for="btn in btns"
            :key="btn.value"
            :btn="btn"
            @selectedBtn="selectedBtn"
            @changeState="changeState"
          ></li>
        </ul>
      </div>
      <div class="graph-container">
        <Graph
          :nodes="nodes"
          :edges="edges"
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
import LeftToolBtn from './LeftToolBtn'
import Graph from './Graph'
import GraphProp from './GraphProp'

import UUID from '@/utils/createUniqueString'

var testNodes = [
  {id: 1, name: '普通活动', type: 'activity', x: 200, y: 200, selected: false, r: 34},
  {id: 2, name: '普通活动', type: 'activity', x: 300, y: 300, selected: false, r: 34}
]
var testEdges = [
  {id: 1, source: testNodes[0], target: testNodes[1], selected: false}
]

export default {
  data () {
    return {
      btns: [
        {name: '选择', value: 'select', type: null, draggable: false, active: true},
        {name: '自动插入', value: 'addStartEnd', type: null, draggable: false, active: false},
        {name: '开始', value: 'start', type: 'start', draggable: true, active: false},
        {name: '结束', value: 'end', type: 'end', draggable: true, active: false},
        {name: '普通活动', value: 'ordinary', type: 'activity', draggable: true, active: false},
        {name: '块活动', value: 'block', type: 'activity', draggable: true, active: false},
        {name: '子活动', value: 'subFlow', type: 'activity', draggable: true, active: false},
        {name: '转移', value: 'line', type: null, draggable: false, active: false},
        {name: '自转移', value: 'polyline', type: null, draggable: false, active: false}
      ],
      nodes: testNodes,
      edges: testEdges,
      isDragging: false,
      toLink: false
    }
  },
  components: {
    Tools,
    LeftToolBtn,
    Graph,
    GraphProp
  },
  methods: {
    selectedBtn: function (btn) {
      this.btns.map(item => {
        item.active = false
      })
      btn.active = !btn.active
      var state = {
        key: 'toLink',
        value: false
      }
      switch (btn.value) {
        case 'line':
        case 'polyline':
          state.value = true
          break
        case 'addStartEnd':
          this.addStartAndEnd()
          break
        default:
          break
      }
      this.changeState(state)
    },
    addStartAndEnd: function () {
      this.nodesNoOutput().forEach(node => {
        var endNode = {
          id: UUID(),
          name: '结束',
          type: 'end',
          x: node.x + 150,
          y: node.y,
          selected: false,
          r: 34
        }
        this.nodes.push(endNode)
        this.edges.push({
          id: UUID(),
          source: node,
          target: endNode,
          selected: false})
      })
      this.nodesNoInput().forEach(node => {
        var startNode = {
          id: UUID(),
          name: '开始',
          type: 'start',
          x: node.x - 150,
          y: node.y,
          selected: false,
          r: 34
        }
        this.nodes.push(startNode)
        this.edges.push({
          id: UUID(),
          source: startNode,
          target: node,
          selected: false
        })
      })
    },
    filterAcivities: function () {
      return this.nodes.filter(node => node.type === 'activity')
    },
    nodesNoInput: function () {
      var activties = this.filterAcivities()
      return activties.filter(node => {
        return this.edges.every(edge => {
          return edge.target !== node
        })
      })
    },
    nodesNoOutput: function () {
      var activties = this.filterAcivities()
      return activties.filter(node => {
        return this.edges.every(edge => {
          return edge.source !== node
        })
      })
    },
    changeState: function (state) {
      this[state.key] = state.value
    },
    activeSelectBtn: function () {
      this.btns.forEach(btn => {
        if (btn.value === 'select') {
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
