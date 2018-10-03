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
  props: {
    isDragging: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    addNode: function () {
      console.log('drop')
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
