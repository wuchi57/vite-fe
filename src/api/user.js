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
}
