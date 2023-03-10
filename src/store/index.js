import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    auto: true,
  })
)

export { useCounterStore } from './counter.js'
export { useUserStore } from './user.js'

export default pinia
