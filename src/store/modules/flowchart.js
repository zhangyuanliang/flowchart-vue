import { queryBills } from '@/api/flowchart'

const flowchart = {
  state: {
    customer: [],
    claims: []
  },
  mutations: {
    SET_CUSTOMER: (state, customer) => {
      state.customer = customer
    }
  },
  actions: {
    // 财务结算列表
    getBillList({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        queryBills(payload).then(res => {
          commit('SET_CUSTOMER', res.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default flowchart
