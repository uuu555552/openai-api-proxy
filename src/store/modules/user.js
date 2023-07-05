import { login, logout } from '@/api/account';
const ACCESS_TOKEN = 'Authorization'

const user = {
  state: {
    token: sessionStorage.getItem(ACCESS_TOKEN) || '',
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          const access_token = res.data.access_token
          sessionStorage.setItem(ACCESS_TOKEN, access_token)
          commit('SET_TOKEN', access_token)
          commit('SET_USERINFO', res.data.merchant)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout().then(() => {
          sessionStorage.clear();
          commit('SET_TOKEN', '');
          resolve()
        })
      })
    }
  }
}

export default user
