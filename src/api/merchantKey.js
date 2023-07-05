import request from '@/util/request'

// 商家所有的key
export function keyList(data) {
  return request({
    url: '/api/key/keyList',
    method: 'post',
    data
  })
}

// 商家添加官方APIkey
export function addKey(data) {
  return request({
    url: '/api/key/addKey',
    method: 'post',
    data
  })
}

// 商家删除官方APIkey
export function delKey(id) {
  return request({
    url: '/api/key/delKey?id=' + id,
    method: 'put'
  })
}

// 商家添加官方APIkey
export function addPrivateKey(data) {
  return request({
    url: '/api/key/addPrivateKey',
    method: 'post',
    data
  })
}

// 根据官方key id 查询私钥列表
export function getPrivateKeyList(params) {
  return request({
    url: '/api/key/getPrivateKeyList',
    method: 'get',
    params
  })
}

// 商家删除官方APIkey
export function delPrivateKey(id) {
  return request({
    url: '/api/key/delPrivateKey?id=' + id,
    method: 'put'
  })
}

// 查询商家的APIkey额度
export function getPrivateKeyTotal(params) {
  return request({
    url: '/api/key/getPrivateKeyPrice',
    method: 'get',
    params
  })
}

// 续费商家的APIkey额度
export function renewPrivateKeyTotal(data) {
  return request({
    url: '/api/key/renewPrivateKey',
    method: 'post',
    data
  })
}