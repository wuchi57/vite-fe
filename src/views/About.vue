<script setup>
import Page from 'components/Page.vue'
import IconView from 'components/ElementIcon.vue'
</script>

<template>
  <Page>
    <template #title>
      About 页面
    </template>
    <template #link>
      <router-link to="/">Go to Home</router-link>
      <IconView/>
    </template>
  </Page>
</template>

