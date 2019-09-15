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
          :state="state"
          @activeSelectBtn="activeSelectBtn"
        ></Graph>
        <GraphProp :state="state"></GraphProp>
      </div>
    </div>
  </div>
</template>

<script>
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
    changeState: function (state) {
      this.state[state.key] = state.value
    },
    activeSelectBtn: function () {
      this.btns.forEach(btn => {
        if (btn.value === 'select') {
          btn.active = true
        } else {
          btn.active = false
        }
      })
      this.state.toLink = false
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
