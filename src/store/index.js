import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-sec-app',
  storage: localStorage
})

export default new Vuex.Store({

    plugins: [
    vuexPersist.plugin
  ],
  state: {              //quando logar, coloca o usuario e senha para montar a requisição
    usuario: '',        //modelo basic
    senha: ''
  },
  mutations: {
      setUsuario (state, valor) {
          state.usuario = valor;
      },
      /*setSenha(state, valor) {
          state.senha = valor;
      }*/
      setToken (state, token)  {
      state.token = token
    },
    logout (state) {
      state.token = null
      state.usuario = null
    }
  },
  actions: {
  },
  modules: {
  }
})
