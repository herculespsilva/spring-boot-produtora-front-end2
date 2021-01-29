<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Diretor</h2>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome"
            class="form-control" required autofocus
            v-model="nome">
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="number" id="cpf"
            class="form-control" required autofocus
            v-model="cpf">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Salvar</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Usuário</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dir in diretores" :key="dir.id">
          <td>{{ dir.id }}</td>
          <td>{{ dir.nome }}</td>
          <td>{{ dir.cpf }}</td>
          <td>{{ dir.usuario.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'diretor',
  data() {
    return {
      nome: '',
      cpf: '',
      diretores: []
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('diretor',
          {
            nome: this.nome,
            cpf: this.cpf,
            usuario: this.usuario
          })
        .then(res => {
          console.log(res);
          this.nome = '';
          this.cpf = '';
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
    atualizar () {
      axios.get('diretor', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.diretores = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>