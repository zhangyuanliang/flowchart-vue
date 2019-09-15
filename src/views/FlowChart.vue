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
<<<<<<< HEAD:src/components/FlowChart.vue
          :state="state"
=======
          :nodes="nodes"
          :edges="edges"
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee:src/views/FlowChart.vue
          @activeSelectBtn="activeSelectBtn"
        ></Graph>
        <GraphProp></GraphProp>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD:src/components/FlowChart.vue
import { mapState } from 'vuex'

import Tools from './Tools'
import LeftToolBtn from './LeftToolBtn'
import Graph from './Graph'
import GraphProp from './GraphProp'

import UUID from '@/utils/createUniqueString'

export default {
  data () {
    return {
      state: {
        isDragging: false,
        toLink: false
      }
=======
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
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee:src/views/FlowChart.vue
    }
  },
  computed: {
    ...mapState({
      nodes: state => state.flowchart.nodes,
      edges: state => state.flowchart.edges,
      btns: state => state.flowchart.btns
    })
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
        const endNode = {
          id: UUID(),
          name: '结束',
          type: 'end',
          x: node.x + 150,
          y: node.y,
          selected: false,
          r: 34
        }
        this.$store.commit('ADD_NODE', endNode)
        this.$store.commit('ADD_EDGE', {
          id: UUID(),
          source: node,
          target: endNode,
          selected: false
        })
      })
      this.nodesNoInput().forEach(node => {
        const startNode = {
          id: UUID(),
          name: '开始',
          type: 'start',
          x: node.x - 150,
          y: node.y,
          selected: false,
          r: 34
        }
        this.$store.commit('ADD_NODE', startNode)
        this.$store.commit('ADD_EDGE', {
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
