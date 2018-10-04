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
            <path class="link" d="M143,85L363,124" marker-end="url(#arrow)"></path>
          </g>
          <g>
            <g class="conceptG" transform="translate(143,85)">
              <circle r="33"></circle>
              <text text-anchor="middle">
                <tspan>普通活动</tspan>
              </text>
            </g>
            <g class="conceptG" transform="translate(363,124)">
              <circle r="34"></circle>
              <text text-anchor="middle">
                <tspan>普通活动</tspan>
              </text>
            </g>
            <g v-for="node in nodes"
               :key="node.id"
               class="conceptG"
               :transform="'translate('+node.x+','+node.y+')'"
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
        {id: 1, name: '普通活动', x: 200, y: 200},
        {id: 2, name: '普通活动', x: 300, y: 300}
      ]
    }
  },
  props: {
    isDragging: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    addNode: function (e) {
      var jsonStr = e.dataTransfer.getData('item')
      var jsonObj = JSON.parse(jsonStr)
      this.nodes.push({
        id: nodeId++,
        name: jsonObj.name,
        x: e.x - 165,
        y: e.y - 53
      })
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

g.conceptG:hover circle {
  fill: rgb(200, 238, 241);
}

g.selected circle {
  fill: #e8d0ef;
  stroke: #9b78d3;
  stroke-width: 1.5px;
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
  stroke: rgb(94, 196, 204) !important;
}
</style>
