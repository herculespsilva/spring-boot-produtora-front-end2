import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {              //quando logar, coloca o usuario e senha para montar a requisição
    usuario: '',        //modelo basic
    senha: '',
    permiteNavegacao: true
  },
  mutations: {
      setUsuario (state, valor) {
          state.usuario = valor;
      },
      setSenha(state, valor) {
          state.senha = valor;
      }
  },
  actions: {
  },
  modules: {
  }
})
