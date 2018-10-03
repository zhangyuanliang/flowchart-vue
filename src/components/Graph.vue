<template>
  <div class="container">
    <div :class="['graph', {active: isDragging}]"
      @drop="addNode"
      @dragover.prevent
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nodes: [
        {id: 1, name: '普通活动', x: 100, y: 100},
        {id: 2, name: '普通活动', x: 200, y: 200},
        {id: 3, name: '普通活动', x: 300, y: 300}
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
        id: 4,
        name: jsonObj.name,
        x: e.x,
        y: e.y
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
</style>
