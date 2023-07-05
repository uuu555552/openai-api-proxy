import request from '@/util/request'

// 注册方法
export function register(data) {
    return request({
      url: '/api/account/register',
      method: 'post',
      data
    })
}

// 登录方法
export function login(data) {
  return request({
    url: '/api/account/login',
    method: 'post',
    data
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/api/account/logout',
    method: 'put'
  })
}



