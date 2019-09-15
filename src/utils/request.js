import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getToken, getUser } from '@/utils/auth'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.BASE_API : null, // api的base_url
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['code'] = `PC${getUser()}` // 让每个请求携带用户名
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非A00000是抛错
     */
    const res = response.data
    if (res.code !== 'A00000') {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })

      //  A00004:未登录或Token 过期了;A00002:系统繁忙，此结果一般表示系统有错，需开发人员解决
      if (res.code === 'A00004') {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      // A00003:业务错误
      if (res.code === 'A00003') {
        Message({
          message: res.msg,
          type: 'warning',
          duration: 5 * 1000
        })
      }
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.msg ? error.msg : '请求失败，请检查网络状况',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
