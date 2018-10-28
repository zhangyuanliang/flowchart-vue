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
          ></li>
        </ul>
      </div>
      <div class="graph-container">
        <Graph
          :nodes="nodes"
          :edges="edges"
          @activeSelectBtn="activeSelectBtn"
        ></Graph>
        <GraphProp></GraphProp>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Tools from '@/components/Tools'
import LeftToolBtn from '@/components/LeftToolBtn'
import Graph from '@/components/Graph'
import GraphProp from '@/components/GraphProp'

import UUID from '@/utils/createUniqueString'

import btnsData from '@/data/btns.json'

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
      btns: btnsData,
      nodes: testNodes,
      edges: testEdges
    }
  },
  components: {
    Tools,
    LeftToolBtn,
    Graph,
    GraphProp
  },
  computed: {
    ...mapGetters([
      'graphState'
    ])
  },
  methods: {
    ...mapActions([
      'toggle_toLink'
    ]),
    selectedBtn: function (btn) {
      this.btns.map(item => {
        item.active = false
      })
      btn.active = !btn.active
      var toLink = false
      switch (btn.value) {
        case 'line':
        case 'polyline':
          toLink = true
          break
        case 'addStartEnd':
          this.addStartAndEnd()
          break
        default:
          break
      }
      // this.graphState.toLink = toLink
      this.$store.dispatch('toggle_toLink', toLink)
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
    activeSelectBtn: function () {
      this.btns.forEach(btn => {
        if (btn.value === 'select') {
          btn.active = true
        } else {
          btn.active = false
        }
      })
      // this.state.toLink = false
      this.$store.dispatch('toggle_toLink', false)
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
