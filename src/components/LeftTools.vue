<template>
  <div class="left-tools">
    <ul>
      <li v-for="btn in btns"
          :key="btn.type"
          :draggable="btn.draggable"
          @click="changeBtn(btn)"
          @dragstart="dragstart($event, btn)"
          @dragend="dragend"
          :class="{active: btn.active}"
      >
        <i :class="['tools', btn.type+'-icon']"></i>
        <span>{{btn.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btns: [
        {name: '选择', type: 'select', draggable: false, active: true},
        {name: '自动插入', type: 'addStartEnd', draggable: false, active: false},
        {name: '开始', type: 'start', draggable: true, active: false},
        {name: '结束', type: 'end', draggable: true, active: false},
        {name: '普通活动', type: 'ordinary', draggable: true, active: false},
        {name: '块活动', type: 'block', draggable: true, active: false},
        {name: '子活动', type: 'subFlow', draggable: true, active: false},
        {name: '转移', type: 'line', draggable: false, active: false},
        {name: '自转移', type: 'polyline', draggable: false, active: false}
      ]
    }
  },
  methods: {
    changeBtn: function (btn) {
      this.btns.map(function (item) {
        item.active = false
      })
      btn.active = !btn.active
      var linktypes = ['line', 'polyline']
      var state = {
        key: 'isLinking',
        value: false
      }
      if (linktypes.includes(btn.type)) {
        state = {
          key: 'isLinking',
          value: true
        }
      }
      this.$emit('changeState', state)
    },
    dragstart: function (event, item) {
      this.changeBtn(item)
      var state = {
        key: 'isDragging',
        value: true
      }
      this.$emit('changeState', state)
      event.dataTransfer.setData('item', JSON.stringify(item))
    },
    dragend: function (event) {
      var state = {
        key: 'isDragging',
        value: false
      }
      this.$emit('changeState', state)
      event.dataTransfer.clearData()
    }
  }
}
</script>

<style scoped>
.left-tools {
  width: 160px;
  height: 100%;
  border-right: 1px solid #6e94e0;
}

ul {
  padding: 0 10px;
  color: #757474;
}

ul li {
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  margin-bottom: 2px;
  padding: 0 8px;
  border-radius: 4px;
  position: relative;
  border: 1px solid transparent;
}

ul li:hover {
  cursor: pointer;
  border: 1px solid #ACB9CB;
}

ul li.active {
  color: white;
  background-color: #ACB9CB;
}

.left-tools i.tools {
  position: absolute;
  top: 8px;
  display: inline-block;
  width: 16px;
  height: 16px;
  overflow: hidden;
}

.left-tools span {
  margin-left: 20px;
}

.left-tools .select-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 0px;
}

.left-tools .addStartEnd-icon {
  background: url('../assets/wf_tools.png');
  background-position: 42px 0px;
}

.left-tools .start-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 0px;
}

.left-tools .end-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 0px;
}

.left-tools .ordinary-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 57px;
}

.left-tools .block-icon {
  background: url('../assets/wf_tools.png');
  background-position: 80px 57px;
}

.left-tools .subFlow-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 57px;
}

.left-tools .route-icon {
  background: url('../assets/wf_tools.png');
  background-position: 41px 57px;
}

.left-tools .line-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0 34px;
}

.left-tools .polyline-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 34px;
}

.left-tools .loop-icon {
  background: url('../assets/wf_tools.png');
  background-position: 60px 34px;
}
</style>
