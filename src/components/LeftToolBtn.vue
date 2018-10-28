<template>
  <li :draggable="btn.draggable"
      @click="clickBtn(btn)"
      @dragstart="dragstart($event, btn)"
      @dragend="dragend"
      :class="{active: btn.active}"
  >
    <i :class="['tools', btn.value+'-icon']"></i>
    <span>{{btn.name}}</span>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    btn: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapActions([
      'toggle_isDragging'
    ]),
    clickBtn: function (type) {
      this.$emit('selectedBtn', type)
    },
    dragstart: function (event, item) {
      this.clickBtn(item)
      this.toggle_isDragging(true)
      event.dataTransfer.setData('item', JSON.stringify(item))
    },
    dragend: function (event) {
      this.toggle_isDragging(false)
      // this.$store.dispatch('toggle_isDragging', false)
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
