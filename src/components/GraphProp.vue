<template>
  <div class="graph-prop">
    <div class="prop-title">节点属性：</div>
    <ul>
      <Li>
        <span>ID:</span><span>{{showProp.id}}</span>
      </Li>
      <Li>
        <span>描述:</span><span>{{showProp.description}}</span>
      </Li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      showProp: {
        id: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'graphState'
    ])
  },
  methods: {
    showSelectedProp: function (type, data) {
      var prop = {}
      if (type === 'node') {
        prop.description = data.name
      } else {
        prop.description = '由 ' + data.source.name + ' 指向 ' + data.target.name
      }
      this.showProp = Object.assign(prop, data)
    }
  },
  watch: {
    'graphState.selectedNode': function (curr, old) {
      if (!curr) {
        return false
      }
      this.showSelectedProp('node', curr)
    },
    'graphState.selectedEdge': function (curr, old) {
      if (!curr) {
        return false
      }
      this.showSelectedProp('edge', curr)
    }
  }
}
</script>

<style scoped>
.graph-prop {
  height: 20%;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style-type: none;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-bottom: 1px solid #cbd8f3;
}

ul li span {
  display: inline-block;
  width: 40%;
  color: gray;
}
ul li span:first-of-type {
  width: 20%;
}

.prop-title {
  line-height: 40px;
  padding-left: 6px;
  border-top: 1px solid #6e94e0;
  text-align: middle;
  background-color: #d7dfef;;
}
</style>
