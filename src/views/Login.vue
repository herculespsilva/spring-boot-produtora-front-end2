<template>
    <form @submit.prevent="login">
        <h2>Login</h2>
        <p>
            <label for="username">Usuário</label>
            <input type="text" id="username" required autofocus v-model="nome">
        </p>
        <p>
            <label for="inputPassword">Senha</label>
            <input type="password" id="inputPassword" required v-model="senha">
        </p>
        <button type="submit">Ok</button>
    </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      nome: '',
      senha: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken'
    ]),
    login() {
      axios.post('login',
          {
            username: this.nome,
            password: this.senha
          })
        .then(res => {
          console.log(res)
          this.setUsuario(res.data)
          this.setToken(res.headers.token)
          this.$router.push('diretor')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>