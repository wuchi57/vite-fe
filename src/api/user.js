import request from '@/utils/request'

export default class User {
  /**
   * 登录
   * @param {String} username 用户名
   * @param {String} password 密码
   * @returns
   */
  static async login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }

  /**
   * 获取用户信息
   * @param {String} username 用户名
   * @param {String} password 密码
   * @returns
   */
  static async getUserInfo() {
    return request({
      url: '/user',
      method: 'get'
    })
  }
}
