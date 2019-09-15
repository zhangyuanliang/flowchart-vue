<template>
  <div class="container">
<<<<<<< HEAD
    <div
=======
    <div :class="['graph', {active: graphState.isDragging}]"
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
      @drop="addNode"
      @dragover.prevent
      :class="['graph', {active: state.isDragging}]"
    >
      <svg
        @mousemove="svgMousemove($event)"
        @contextmenu="rightMenu($event)"
        @mousedown.right="svgMouseRightDown"
        @mouseup="svgMouseUp"
        width="100%"
        height="418"
      >
        <defs>
          <marker id="mark-arrow" viewBox="0 0 14 14" refX="8" refY="6" markerWidth="12" markerHeight="12" orient="auto">
            <path d="M2,2 L10,6 L2,10 L6,6 L2,2"/>
          </marker>
          <marker id="arrow" viewBox="0 0 14 14" refX="30" refY="6" markerWidth="12" markerHeight="12" orient="auto">
            <path d="M2,2 L10,6 L2,10 L6,6 L2,2"/>
          </marker>
        </defs>
        <g class="graph">
          <path v-show="isLinking" class="link dragline" :d="dragData" marker-end="url(#mark-arrow)"></path>
          <g>
            <path
              v-for="edge in edges"
              :key="edge.id"
              :class="['link', {selected: edge.selected}]"
              :d="edgeData(edge)"
              marker-end="url(#arrow)"
              @click="clickEdge(edge)"
            ></path>
          </g>
          <g>
<<<<<<< HEAD
            <g
              v-for="node in nodes"
              :key="node.id"
              :class="['conceptG', {selected: node.selected, toLink: state.toLink}]"
              :transform="'translate('+node.x+','+node.y+')'"
              @mousedown="nodeMousedown(node)"
              @mouseup="nodeMouseup(node)"
=======
            <g v-for="node in nodes"
               :key="node.id"
               :class="['conceptG', {selected: node.selected, toLink: graphState.toLink}]"
               :transform="'translate('+node.x+','+node.y+')'"
               @mousedown="nodeMousedown(node)"
               @mouseup="nodeMouseup(node)"
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
            >
              <circle :r="node.r"></circle>
              <text text-anchor="middle">
                <tspan>{{node.name}}</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <RightMenu></RightMenu>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapState } from 'vuex'

=======
import {mapGetters, mapActions} from 'vuex'
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
import RightMenu from './RightMenu'

var nodeId = 3
var edgeId = 2
const svgDx = 165
const svgDy = 53
export default {
  data () {
    return {
      mousedownNode: null,
      mousedownEdge: null,
      justDrag: true,
      isLinking: false,
      dragData: ''
    }
  },
  computed: {
<<<<<<< HEAD
    ...mapState({
      nodes: state => state.flowchart.nodes,
      edges: state => state.flowchart.edges
    })
  },
  props: {
    state: {
      type: Object,
=======
    ...mapGetters([
      'graphState'
    ])
  },
  props: {
    nodes: {
      type: Array,
      require: true
    },
    edges: {
      type: Array,
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
      require: true
    }
  },
  components: {
    RightMenu
  },
  methods: {
    ...mapActions([
      'changSelectedNode',
      'changSelectedEdge'
    ]),
    edgeData: function (edge) {
      const source = edge.source
      const target = edge.target
      return `M${source.x},${source.y}L${target.x},${target.y}`
    },
    addNode: function (e) {
      var jsonStr = e.dataTransfer.getData('item')
      var jsonObj = JSON.parse(jsonStr)
      this.$store.commit('ADD_NODE', {
        id: nodeId++,
        name: jsonObj.name,
        type: jsonObj.type,
        x: e.x - svgDx,
        y: e.y - svgDy,
        selected: false,
        r: 34
      })
    },
    unSelectedNodes: function () {
      this.nodes.forEach(node => {
        node.selected = false
      })
<<<<<<< HEAD
      this.$store.commit('SET_SELECTED_NODE', null)
=======
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
    },
    unSelectedEdges: function () {
      this.edges.forEach(edge => {
        edge.selected = false
      })
<<<<<<< HEAD
      this.$store.commit('SET_SELECTED_EDGE', null)
=======
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
    },
    unSelectedAll: function () {
      this.unSelectedNodes()
      this.unSelectedEdges()
    },
    nodeMousedown: function (node) {
      this.unSelectedAll()
      node.selected = true
<<<<<<< HEAD
      this.$store.commit('SET_SELECTED_NODE', node)
=======
      this.changSelectedNode(node)
      // this.$store.dispatch('changSelectedNode', node)
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
      this.mousedownNode = node
      if (this.graphState.toLink) {
        this.isLinking = true
        this.justDrag = false
      }
    },
    nodeMouseup: function (node) {
      if (this.mousedownNode !== node) {
        var edge = {
          id: edgeId++,
          source: this.mousedownNode,
          target: node,
          selected: false
        }
        this.$store.commit('ADD_EDGE', edge)
      }
    },
    linkNodes: function () {

    },
    rightMenu: function (e) {
      e.preventDefault()
      return false
    },
    svgMouseRightDown: function () {
      this.$emit('activeSelectBtn')
    },
    svgMouseUp: function () {
      this.mousedownNode = null
      this.dragData = ''
      this.isLinking = false
      this.justDrag = true
    },
    svgMousemove: function (e) {
      var node = this.mousedownNode
      if (node) {
        if (this.isLinking) { // link node
          this.dragData = 'M' + node.x + ',' + node.y +
                          'L' + (e.x - svgDx) + ',' + (e.y - svgDy)
        }
        if (this.justDrag) { // drag node
          var dx = Math.abs(e.x - node.x - svgDx)
          var dy = Math.abs(e.y - node.y - svgDy)
          if (dx > node.r) {
            node.x = e.x - svgDx
          } else {
            node.x = node.x + e.movementX
          }
          if (dy > node.r) {
            node.y = e.y - svgDy
          } else {
            node.y = node.y + e.movementY
          }
        }
      }
    },
    clickEdge: function (edge) {
      this.unSelectedAll()
      edge.selected = true
<<<<<<< HEAD
      this.$store.commit('SET_SELECTED_EDGE', edge)
=======
      this.changSelectedEdge(edge)
      // this.$store.dispatch('changSelectedEdge', edge)
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
    }
  }
}
</script>

<style scoped>
.container {
  height: 80%;
  padding: 4px;
}

.graph {
  height: 100%;
  border: 1px solid transparent;
  background: url('../assets/wf_edit_bg.gif');
}

.graph.active {
  border: 1px dashed #5cdc5c;
}

svg {
  height: 100%;
}

marker {
  fill: #3c39f2;
}

g.conceptG.toLink {
  cursor: crosshair;
}

g.conceptG circle {
  fill: #F6FBFF;
  stroke: #6164c1;
  stroke-width: 1px;
}

g.conceptG.selected circle {
  fill: #e8d0ef;
  stroke: #9b78d3;
  stroke-width: 1.5px;
}

g.conceptG:hover circle {
  fill: rgb(200, 238, 241);
}

g.selected circle {
  fill: #e8d0ef;
  stroke: #9b78d3;
  stroke-width: 1.5px;
}

path.link.selected {
  stroke: #9b78d3;
}

g.selected:hover circle {
  fill: #e8d0ef;
}

g.conceptG text {
  font-size: 12px;
  fill: #151996;
}

path.link {
  fill: none;
  stroke: #a6a6f2;
  stroke-width: 2px;
  cursor: default;
}

path.link:hover {
  stroke: rgb(94, 196, 204);
}

tspan {
  user-select: none
}
</style>
