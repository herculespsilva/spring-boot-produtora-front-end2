import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-ed637a21-55c1-4904-96d0-e38d5462d601.ws-us02.gitpod.io' // url base do  serviço
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
