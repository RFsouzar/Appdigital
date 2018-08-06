<template>
<div class="principalDiv">
<meu-painel :titulo="titulo">

        <div class="divPagamento">
             <div class="container" id="containerTeste">
                <h5>Saldo em conta</h5>
            </div>
          <div class="container" id="containerTeste">
              <div class="div-responsive">
                <h4 id="teste123"> R$ {{valoratual}} </h4>
               <!--<textarea name="origemvalor" id="origemvalor"  rows="1" readonly></textarea>-->
              </div>
            </div>

    <div class="container-fluid" id="divSecundaria">
        <form id="form1" @submit.prevent="pagar()">
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
          <div class="input-group">
            <div class="input-group-addon">$</div>
              <input type="valor" class="form-control" id="saldopg1" placeholder="00,00"
               v-on:input="pagamento.pegaValor= $event.target.value" :value="pagamento.pegaValor" required /> 

               <!--v-mask="['##,##', '###.###,##', '###,##', '#.###,##']"-->

                <div class="input-group-addon">.00</div>
          </div>
      </div>

      <div class="container" id="btnValores">
          <md-button class="md-dense md-raised md-primary" id="btn20" type='button' value='20' v-on:click='addvalor(20);'>+20</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn50" value='50' v-on:click="addvalor(50)">+50</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn100" value='100' v-on:click="addvalor(100)">+100</md-button>
      </div>

  <div class="form-group">

      <label for="inputNome">Nome</label>
      <input type="text" class="form-control" id="inputNome"
      v-on:input="pagamento.pegaNome = $event.target.value" placeholder="Nome" :value="pagamento.pegaNome" required />

  </div>

  <div class="form-group">
      <label for="inputCPF">CPF</label>
      <input type="cpf" class="form-control" id="inputCPF"
      v-on:input="pagamento.pegaCPF = $event.target.value" placeholder="000.000.000-00"
      v-mask="['###.###.###-##', '##.###.###/####-##']" maxlengh="14" required :value="pagamento.pegaCPF"/>
  </div>


  <div class="form-group">

      <label for="inputTelefone">Telefone</label>
      <input type="telefone" class="form-control" id="inputTelefone" v-on:input="pagamento.pegaTelefone = $event.target.value"
      placeholder="(00) 00000-0000" v-mask="['(##) ####-####', '(##) #####-####']" :value="pagamento.pegaTelefone" required />

    
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
var valoratual = 2000;

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
      valoratual: valoratual,

  pagamento:{

      pegaNome: '',
      pegaCPF:'',
      pegaTelefone:'',
      pegaValor:'',

      }

    }

  },

  methods:{

    addvalor(val){
      
      result = document.getElementById('saldopg1');
      result.value = result.value? parseInt(result.value) + parseInt(val) : parseInt(val);
    
    },

    pagar() {

        console.log(valoratual);
        console.log("É VALIDO");
      this.$http
        .get('https://my-json-server.typicode.com/typicode/demo/profile', this.pagamento)
        .then(res => { console.log(res.data.valor) })
        .catch(err => { console.log("falho") });

        var valor1 = document.getElementById("Saldo").value;
        var teste2= valoratual-valor1;
         valoratual=teste2;

         document.getElementById("teste123").innerHTML = 'R$ ' + valoratual;

        console.log(teste2);
        console.log(valoratual);
        
      
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

<style>
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

</style>