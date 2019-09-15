import { queryBills } from '@/api/flowchart'

// 测试数据
const testNodes = [
  {id: 1, name: '普通活动', type: 'activity', x: 200, y: 200, selected: false, r: 34},
  {id: 2, name: '普通活动', type: 'activity', x: 300, y: 300, selected: false, r: 34}
]
const testEdges = [
  {id: 1, source: testNodes[0], target: testNodes[1], selected: false}
]

const flowchart = {
  state: {
    nodes: testNodes,
    edges: testEdges,
    selectedNode: null,
    selectedEdge: null,
    btns: [
      {name: '选择', value: 'select', type: null, draggable: false, active: true},
      {name: '自动插入', value: 'addStartEnd', type: null, draggable: false, active: false},
      {name: '开始', value: 'start', type: 'start', draggable: true, active: false},
      {name: '结束', value: 'end', type: 'end', draggable: true, active: false},
      {name: '普通活动', value: 'ordinary', type: 'activity', draggable: true, active: false},
      {name: '块活动', value: 'block', type: 'activity', draggable: true, active: false},
      {name: '子活动', value: 'subFlow', type: 'activity', draggable: true, active: false},
      {name: '转移', value: 'line', type: null, draggable: false, active: false},
      {name: '自转移', value: 'polyline', type: null, draggable: false, active: false}
    ]
  },
  mutations: {
    SET_NODES: (state, nodes) => {
      state.nodes = nodes
    },
    SET_EDGES: (state, edges) => {
      state.edges = edges
    },
    ADD_NODE: (state, node) => {
      state.nodes.push(node)
    },
    ADD_EDGE: (state, edge) => {
      state.edges.push(edge)
    },
    SET_SELECTED_NODE: (state, node) => {
      state.selectedNode = node
    },
    SET_SELECTED_EDGE: (state, edge) => {
      state.selectedEdge = edge
    }
  },
  actions: {
    // 财务结算列表
    getBillList({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        queryBills(payload).then(res => {
          commit('SET_NODES', res.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default flowchart
