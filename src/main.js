import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-cbea21ce-deb1-40f8-a5db-ba1f9b68d0bc.ws-us03.gitpod.io' // url base do  serviço
/*
axios.interceptors.request.use(config => {              // incluindo um headers em toda requisição, token
 config.headers.Authorization = 'um token'              // Basic base64(usuario:senha)
 return config
})*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
