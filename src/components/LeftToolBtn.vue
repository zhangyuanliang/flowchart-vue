<template>
  <ul>
    <li
      v-for="(btn, index) in btns"
      :key="index"
      :draggable="btn.draggable"
      @click="clickBtn(btn)"
      @dragstart="dragstart($event, btn)"
      @dragend="dragend"
      :class="{active: btn.active}"
    >
      <i :class="['tools', btn.value+'-icon']"></i>
      <span>{{btn.name}}</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

import UUID from '@/utils/createUniqueString'

export default {
  computed: {
    ...mapState({
      nodes: state => state.flowchart.nodes,
      edges: state => state.flowchart.edges,
      btns: state => state.flowchart.btns
    })
  },
  methods: {
    clickBtn: function (btn) {
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
      this.$store.commit('TOGGLE_TOLINK', toLink)
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
    dragstart: function (event, item) {
      this.clickBtn(item)
      this.$store.commit('TOGGLE_ISDRAGGING', true)
      event.dataTransfer.setData('item', JSON.stringify(item))
    },
    dragend: function (event) {
      this.$store.commit('TOGGLE_ISDRAGGING', false)
      event.dataTransfer.clearData()
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  margin-bottom: 2px;
  padding: 0 8px;
  border-radius: 4px;
  position: relative;
  border: 1px solid transparent;
}

li:hover {
  cursor: pointer;
  border: 1px solid #ACB9CB;
}

li.active {
  color: white;
  background-color: #ACB9CB;
  transition-property: background-color, color;
  transition-duration: .3s;
  transition-timing-function: ease-out;
}

i.tools {
  position: absolute;
  top: 8px;
  display: inline-block;
  width: 16px;
  height: 16px;
  overflow: hidden;
}

span {
  margin-left: 20px;
}

.select-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 0px;
}

.addStartEnd-icon {
  background: url('../assets/wf_tools.png');
  background-position: 42px 0px;
}

.start-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 0px;
}

.end-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 0px;
}

.ordinary-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 57px;
}

.block-icon {
  background: url('../assets/wf_tools.png');
  background-position: 80px 57px;
}

.subFlow-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 57px;
}

.route-icon {
  background: url('../assets/wf_tools.png');
  background-position: 41px 57px;
}

.line-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0 34px;
}

.polyline-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 34px;
}

.loop-icon {
  background: url('../assets/wf_tools.png');
  background-position: 60px 34px;
}
</style>
