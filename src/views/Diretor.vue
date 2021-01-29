<template>
    <div>
        <form @submit.prevent="cadastrar"> <!-- quando submeter chama o metodo cadastrar -->
            <h2>Diretor</h2>
            <p>
                <label for="nome">Nome</label>
                <input type="text" id="nome" 
                    required autofocus 
                    v-model="nome">
            </p>
            <p>
                <label for="cpf">Cpf</label>
                <input type= "number" id="cpf" 
                    required 
                    v-model="cpf">
            </p>
            <button type="submit">Salvar</button>
        </form>
        <br>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Cpf</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dir in diretores" :key="dir.id">
                    <td>{{ dir.id }}</td>
                    <td>{{ dir.nome }}</td>
                    <td>{{ dir.cpf }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapState} from 'vuex';      // para pegar usuario e senha folder store
    export default {
        name: 'anotacoes',
        data() {
            return {
                nome: '',             // responsavel pelos v-model no template la em cima
                cpf: '',
                diretores: []
            }
        },
        computed: {
            ...mapState([               // state da classe Login.vue | login
                'usuario',              //vuex
                'senha'
            ])
        },
        methods: {
            cadastrar() {
                axios.post('diretor',   // rota responsavel
                    {                                       // essa rota espera um json, basicamente passamos como objeto parao o axios e ele monta um json como retorno
                        nome: this.nome,                // oque será mandado no corpo da requisição           
                        cpf: this.cpf        //conteudo dos dois input no <content>
                    },
                    {
                        auth: {                             // colocar as propriedades
                            username: this.username,        // pega usuario e senha do mapState
                            passwor: this.senha
                        }
                    }
                    )
                .then(res => {
                    console.log(res);                   // se tudo der certo, limpa os campos
                    this.nome = '';
                    this.cpf = '';                    // a rota retorna como uma reposta um json com o registro criado | no campo (res.data)
                    this.diretores.push(res.data);      // e insere na lista de tabalhos
                })                                      //inserimos a res.data de forma direta, basicamente se pega esse objeto em json e faz um parse o tornando um objetos java script
                .catch(error => console.log(error))
            }
        }
    }           // paramos 17:11
</script> 