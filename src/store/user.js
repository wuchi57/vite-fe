import { defineStore } from 'pinia'
import { User } from 'api'

export const useUserStore = defineStore('user', () => {
  const token = ref()

  function login(userInfo) {
    return new Promise((resolve, reject) => {
      const { username, password } = userInfo
      User.login({ username: username.trim(), password }).then(res => {
        const { data } = res
        token.value = data.token
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }

  function logout() {
    token.value = null
  }

  return { token, login, logout }
})
