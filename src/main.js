import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import CKEditor from '@ckeditor/ckeditor5-vue';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {}
})
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use( CKEditor ).use(store).mount('#app')
