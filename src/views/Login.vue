<script setup>
import { Lock, User } from '@element-plus/icons-vue'
import { validUsername } from 'utils/validate.js'
import { useUserStore } from 'store'

const router = useRouter()
const userStore = useUserStore()
const loginFormRef = ref()
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const loginRules = reactive({
  username: [{ required: true, trigger: 'blur', validator: validateUsername }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }]
})

function validateUsername(rule, value, callback) {
  if (!validUsername(value)) {
    callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}

function validatePassword(rule, value, callback) {
  if (value.length < 6) {
    callback(new Error('密码长度需大于6'))
  } else {
    callback()
  }
}

function handleLogin() {
  loginFormRef.value.validate(valid => {
    if (valid) {
      userStore.login(loginForm).then(res => {
        router.push({ path: '/' })
      })
    } else {
      console.log('error')
      return false
    }
  })
}
</script>

<template>
  <div class="login_inner">

    <el-form
      ref="loginFormRef"
      :rules="loginRules"
      :model="loginForm">
      <div class="form_title">
        <h3>Login Form</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          size="large"
          :prefix-icon="User"
          tabindex="1"
          type="text"
          v-model="loginForm.username"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          :prefix-icon="Lock"
          tabindex="2"
          type="password"
          show-password
          @keyup.enter="handleLogin"
          v-model="loginForm.password"/>
      </el-form-item>
    </el-form>

    <el-button style="width: 100%" type="primary" size="large" @click="handleLogin">Login</el-button>

  </div>
</template>

<style scoped lang='sass'>
.login_inner
  width: 420px
  padding: 160px 35px 0
  margin: 0 auto

.form_title
  text-align: center
  font-size: 26px
</style>
