<script setup>
import { useUserStore } from 'store'

const userStore = useUserStore()
const router = useRouter()

function logout() {
  userStore.logout()
  router.push({ path: '/login' })
}

</script>

<template>
  <div class="page_inner">
    <div class="main_title">
      <slot name="title">
      </slot>
    </div>
    <el-row>
      <slot name="link">
      </slot>
    </el-row>
    <el-button type="primary" @click="logout">Logout</el-button>
  </div>
</template>

<style scoped lang="sass">
.page_inner
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  min-height: 100%
  padding-bottom: 64px
  background-color: rgb(237, 242, 247)

.main_title
  width: 400px
  text-align: center
  height: 150px
  line-height: 150px
  border-radius: 8px
  font-size: 26px
  font-weight: bold
  color: rgb(49, 140, 252)
  background-color: #fff
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)

.el-row
  gap: 32px
  padding: 48px 16px
  font-weight: 500

.el-button
  width: 400px
</style>

