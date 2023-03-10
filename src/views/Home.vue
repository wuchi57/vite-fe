<script setup>
import Page from 'components/Page.vue'
</script>

<template>
  <Page>
    <template #title>
      主页
    </template>
    <template #link>
      <router-link to="/about">Go to About</router-link>
      |
      <router-link to="/store">Go to Store</router-link>
    </template>
  </Page>
</template>

