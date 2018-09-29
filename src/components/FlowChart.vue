<template>
  <div class="flow-chart">
    <Tools></Tools>
    <AppMain></AppMain>
  </div>
</template>

<script>
import Tools from './Tools'
import AppMain from './AppMain'

export default {
  components: {
    Tools,
    AppMain
  }
}
</script>

<style scoped>
.flow-chart {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
