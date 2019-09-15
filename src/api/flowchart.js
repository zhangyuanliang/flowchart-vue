import request from '@/utils/request'
// 项目方列表
export function queryBills(data) {
  return request({
    url: '/api/agency/tasksource/list',
    method: 'post',
    data
  })
}
