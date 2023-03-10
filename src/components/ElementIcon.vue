<script setup>
import { Edit, Share, Delete, Loading } from '@element-plus/icons-vue'
</script>

<template>
  <el-icon :size="20">
    <Edit/>
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <Share/>
  </el-icon>
  <el-icon>
    <Delete/>
  </el-icon>
  <el-icon class="is-loading">
    <Loading/>
  </el-icon>
</template>
