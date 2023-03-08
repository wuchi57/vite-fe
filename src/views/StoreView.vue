<script setup>
import { useCounterStore } from 'store'
const counter = useCounterStore()
counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <div>Current Count: {{ counter.count }}</div>
  <router-link to="/">Go to /</router-link>
</template>
