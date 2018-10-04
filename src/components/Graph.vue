<template>
  <div class="container">
    <div :class="['graph', {active: isDragging}]"
      @drop="addNode"
      @dragover.prevent
    >
      <svg width="100%" height="418">
        <defs>
          <marker id="end-arrow" viewBox="0 -5 10 10" refX="42" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,-5 L10,0 L0,5"></path>
          </marker>
          <marker id="mark-end-arrow" viewBox="0 -5 10 10" refX="7" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,-5 L10,0 L0,5"></path>
          </marker>
          <marker id="arrow" markerWidth="12" markerHeight="12" viewBox="0 0 14 14" refX="30" refY="6" orient="auto">
            <path d="M2,2 L10,6 L2,10 L6,6 L2,2"/>
          </marker>
        </defs>
        <g class="graph">
          <g>
            <path v-for="edge in edges"
                  :key="edge.id"
                  :class="['link', {selected: edge.selected}]"
                  :d="edgeData(edge)"
                  marker-end="url(#arrow)"
                  @click="clickEdge(edge)"
            ></path>
          </g>
          <g>
            <g v-for="node in nodes"
               :key="node.id"
               :class="['conceptG', {selected: node.selected}]"
               :transform="'translate('+node.x+','+node.y+')'"
               @click="clickNode(node)"
            >
              <circle r="34"></circle>
              <text text-anchor="middle">
                <tspan>{{node.name}}</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
var nodeId = 3
export default {
  data () {
    return {
      nodes: [
        {id: 1, name: '普通活动', x: 200, y: 200, selected: false},
        {id: 2, name: '普通活动', x: 300, y: 300, selected: false}
      ],
      edges: [
        {id: 1, source: {x: 200, y: 200}, target: {x: 300, y: 300}, selected: false}
      ],
      selectedEdge: false
    }
  },
  computed: {
  },
  props: {
    isDragging: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    edgeData: function (edge) {
      return 'M' + edge.source.x + ',' + edge.source.y +
             ' L' + edge.target.x + ',' + edge.target.y
    },
    addNode: function (e) {
      var jsonStr = e.dataTransfer.getData('item')
      var jsonObj = JSON.parse(jsonStr)
      this.nodes.push({
        id: nodeId++,
        name: jsonObj.name,
        x: e.x - 165,
        y: e.y - 53,
        selected: false
      })
    },
    unSelectedNodes: function () {
      this.nodes.map(function (node) {
        node.selected = false
      })
    },
    unSelectedEdges: function () {
      this.edges.map(function (edge) {
        edge.selected = false
      })
    },
    unSelectedAll: function () {
      this.unSelectedNodes()
      this.unSelectedEdges()
    },
    clickNode: function (node) {
      this.unSelectedAll()
      node.selected = !node.selected
    },
    clickEdge: function (edge) {
      this.unSelectedAll()
      edge.selected = !edge.selected
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
</style>
