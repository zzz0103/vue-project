import Car from '../pages/Car.vue'
import FirstView from '../pages/FirstView.vue'
import Good from '../pages/Good.vue'
import Person from '../pages/Person.vue'
import Sort from '../pages/Sort.vue'
import Search from '../pages/Search.vue'
export default[
  {
    path:'/',
    component: FirstView
  },
  {
    path:'/sort',
    component: Sort
  },
  {
    path: '/good',
    component: Good
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/person',
    component: Person
  },
  {
    path:'/search',
    component:Search
  }
]