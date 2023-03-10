<script setup>
import Page from 'components/Page.vue'
import { useCounterStore } from 'store'

const counter = useCounterStore()
counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <Page>
    <template #title>
      Store 页面
    </template>
    <template #link>
      <router-link to="/">Go to Home</router-link>
      <div>Current Count: {{ counter.count }}</div>
    </template>
  </Page>
</template>

