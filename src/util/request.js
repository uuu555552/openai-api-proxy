import axios from 'axios'
import { Message } from 'element-ui'
const ACCESS_TOKEN = 'Authorization'

const request = axios.create({
  // baseURL: "http://127.0.0.1:8080/",
  baseURL: "http://wpan.nat300.top/",
  // baseURL: "https://api.zhwtgpt.com/",
  timeout: 30 * 1000, // 请求超时时间
})

request.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    console.log('请求的token' + token)
    if (token) {
      config.headers[ACCESS_TOKEN] = 'Bearer ' + token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    try {
      const code = Number(response.data.code);
      if (code) {
        if (code == 200) {
          return response.data
        } else {
          console.log('======' + response.data.msg)
          Message({
            message: response.data.msg || 'Error',
            type: 'error',
            duration: 2 * 1000
          })
          if(code == 401) {
            console.log('======' + 401)
          }
          return Promise.reject(new Error(response.data.msg))
        }
      };
      return response.data
    } catch(err) {
      return Promise.reject(new Error(err)) 
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default request
