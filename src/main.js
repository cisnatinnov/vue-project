import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import CKEditor from '@ckeditor/ckeditor5-vue';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      id: 0,
      jwt: '',
      email: '',
      username: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    async setValue({ state }, key, value) {
      switch (key) {
        case 'id':
          state.id = value
          break;
        case 'email':
          state.email = value
          break;
        case 'username':
          state.username = value
          break;
      
        default:
          state.jwt = value
          break;
      }
    }
  }
})
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use( CKEditor ).use(store).mount('#app')
