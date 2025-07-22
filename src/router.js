import { createMemoryHistory, createRouter } from 'vue-router'

import People from './components/People.vue'
import Employers from './components/Employers.vue'

const routes = [
  { path: '/', component: People },
    { path: '/employers', component: Employers}
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})