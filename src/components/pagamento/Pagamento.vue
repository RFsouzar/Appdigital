<template>
<div class="principalDiv">
<meu-painel :titulo="titulo">

        <div class="container" id="modalfake" v-show="mensagem">
          <p class="centralizado">{{ mensagem }}</p>
          <!--<p class="centralizado">{{ token }}</p>-->
          <h6>Obrigado por utilizar nossos Serviços</h6>
          <router-link to="/Home">
          <button class="btn btn-primary" tipo="button" id="btnsair1">Sair</button>
          </router-link>
        </div>

        <div v-if="!mensagem" class="divPagamento">
             <div class="container" id="containerTeste">
                <h5>Saldo em conta</h5>
            </div>
          <div class="container" id="containerTeste">
              <div class="div-responsive"> 
                <h4 id="teste123" > R$ {{formatPrice(saldoatual)}} </h4>   
              </div>
          </div>
            

    <div class="container-fluid" id="divSecundaria">
        <form id="form1" @submit.prevent="pagar()">
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
          <div class="input-group">
            <div class="input-group-addon">$</div>
              <input type="number" class="form-control" id="saldopg1" placeholder="00,00"
               v-on:input="pagamento.pegaValor= $event.target.value" :value="pagamento.pegaValor" /> 
               

               <!--v-mask="['##,##', '###,###,##', '###,##', '#.###,##']"-->

                <div class="input-group-addon">.00</div>
          </div>
      </div>

      <div class="container" id="btnValores">
          <md-button class="md-dense md-raised md-primary" id="btn20"  v-on:click='addvalor(20)'>+20</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn50"  v-on:click="addvalor(50)">+50</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn100" v-on:click="addvalor(100)">+100</md-button>
      </div>

  <div class="form-group">

      <label for="inputNome">Nome</label>
      <input type="text" class="form-control" id="inputNome"
      v-on:input="pagamento.pegaNome = $event.target.value" placeholder="Nome" :value="pagamento.pegaNome" />

  </div>

  <div class="form-group">
      <label for="inputCPF">CPF</label>
      <input type="cpf" class="form-control" id="inputCPF"
      v-on:input="pagamento.pegaCPF = $event.target.value" placeholder="000.000.000-00"
      v-mask="['###.###.###-##']" maxlengh="11" :value="pagamento.pegaCPF"/>
  </div>


  <div class="form-group">
      <label for="inputTelefone">Telefone</label>
      <input type="telefone" class="form-control" id="inputTelefone" v-on:input="pagamento.pegaTelefone = $event.target.value"
      placeholder="(00) 00000-0000" v-mask="['(##) ####-####', '(##) #####-####']" :value="pagamento.pegaTelefone" />
  </div>

      <div class="container" id="btnpagar">
        <button class="btn btn-primary" tipo="submit">Pagar</button>
      </div>
      </form>
        </div>
        </div>

    </meu-painel>

        </div>


</template>

<script>
var result;

import Painel from '../shared/painel/Painel.vue'
import {TheMask} from 'vue-the-mask'

export default {
    components:{TheMask},
    components:{
    'meu-painel': Painel,
  },

  data () {

    return {
      titulo: 'App da IF',
      menuVisible: false,
      valoratual: "",
      mensagem: '',
      token:"",
      saldoatual:"",
      

  pagamento:{

      pegaNome: '',
      pegaCPF:'',
      pegaTelefone:'',
      pegaValor:'',

      }

    }

  },

  created() {
    let promise = this.$http.get('http://www.mocky.io/v2/5b6f8f562e00004f00936556');
    promise.then(res => res.json())
    .then( saldo => this.saldoatual = saldo.balance)
  },

  methods:{

    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    addvalor(val){
      result = document.getElementById('saldopg1');
      result.value = result.value? parseInt(result.value) + parseInt(val) : parseInt(val);
    },

    pagar() {

      /*this.$http
        .get('https://jsonplaceholder.typicode.com/posts', this.pagamento)
        .then(res => { this.mensagem = 'Pagamento Realizado'})
        .catch(err => { this.mensagem = 'Não foi possível realizar pagamento'; console.log(err) });*/

        this.$http
        .post('https://jsonplaceholder.typicode.com/posts', this.pagamento)
        .then(res =>res.json())
        .then(saldo => {this.valoratual = saldo.id, 
        this.mensagem="Transação Concluída"
        this.token="token "+saldo.pegaValor},
        err => {console.log(err)
        this.mensagem="pagamento não realizado"});

         //document.getElementById("teste123").innerHTML = 'R$ ' + valoratual;

      this.pagamento={
          pegaNome:'',
          pegaCPF:'',
          pegaTelefone:'',
          pegaValor:''
      };
    },
}
}

</script>

<style scoped>
.imagem-responsiva{
  position: relative;
}

.h5{
  text-align: center;
}
.div-responsive{
  border-style:  solid;
    border-radius:  100%;
    width: 150px;
    height: 150px;
    border-color:  #d6d6d6;
    border-width: 15px;
    display: -webkit-flex;
    align-items: center;
    -webkit-justify-content: center;
    font-size: 20px;
    margin-bottom: 10px;

}
#containerTeste{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;

}

#btnpagar{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
}

.principalDiv{
    max-height: 555px;
 /*overflow-y: scroll;*/

}

#btnValores{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;

}
h5{
  font-weight: bold;
}


#origemvalor{
  border: none;
  width: 116px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  background: none;

}

#modalfake{
  background-color: #ddd9ce;
  width: 300px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}

#btnsair1{
width: 80px;
padding: 5px;
align-items: center;

}
</style>