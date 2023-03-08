import { createPinia } from 'pinia'

const store = createPinia()

export default store

export { useCounterStore } from './counter.js'
