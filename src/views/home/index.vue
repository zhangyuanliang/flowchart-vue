<template>
  <div class="home-container">
    <FlowChart></FlowChart>
  </div>
</template>

<script>
import FlowChart from '@/components/FlowChart'

export default {
  name: 'App',
  components: {
    FlowChart
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
}
</style>>
