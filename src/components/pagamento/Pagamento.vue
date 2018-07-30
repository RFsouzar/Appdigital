<template>
<div class="principalDiv">
<meu-painel :titulo="titulo">

        <div class="divPagamento">
             <div class="container" id="containerTeste">
                <h5>Saldo em conta</h5>
            </div>

          <div class="container" id="containerTeste">
              <div class="div-responsive">
                R$ 100,00
              </div>
            </div>

    <div class="container-fluid">
        <form id="form1" name="form1">

              <div class="form-group">
                <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                 <div class="input-group">
                   <div class="input-group-addon">$</div>
                      <input type="text" class="form-control" id="exampleInputAmount" placeholder="00,00" 
                      v-mask="['##,##', '###.###,##', '###,##', '#.###,##']"/>
                        <div class="input-group-addon">.00</div>
                  </div>
              </div>

      <div class="container" id="btnValores">

          <md-button class="md-dense md-raised md-primary" id="btn20" >+20</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn50" >+50</md-button>
          <md-button class="md-dense md-raised md-primary" id="btn100" >+100</md-button>

      </div>

  <div class="form-group">
      <label for="inputNome">Nome</label>
      <input type="text" class="form-control" id="inputNome" v-on:input="pegaNome = $event.target.value" placeholder="Nome">
  </div>

  <div class="form-group">
      <label for="inputCPF">CPF</label>
      <input type="cpf" class="form-control" id="inputCPF" v-on:input="pegaCPF = $event.target.value" placeholder="000.000.000-00" 
      v-mask="['###.###.###-##', '##.###.###/####-##']" maxlengh="14" required/>
      
  </div>

  <div class="form-group">
      <label for="inputTelefone">Telefone</label>
      <input type="telefone" class="form-control" id="inputTelefone" v-on:input="pegaTelefone = $event.target.value" 
      placeholder="(00) 00000-0000" v-mask="['(##) ####-####', '(##) #####-####']"/>
      
  </div>
      <div class="container" id="btnpagar">
        <router-link to="/Home"><button class="btn btn-primary">Pagar</button></router-link>
        
      </div>
      
</form>
        </div>
        </div>

    </meu-painel>

        </div>
    
</template>

<script>
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
      pegaNome: '',
      pegaCPF:'',
      pegaTelefone:''

    }
  },
  
  methods:{

    remove() {
      alert('Precisa saber qual foto remover!');
    }
  

  /*mascaraCPF(cpf) {
	if (mascaraInteiro(cpf) == false) {
		event.returnValue = false;
	}
	return formataCampo(cpf, '000.000.000-00', event);
}*/

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
  font-style: italic;

}

#btnpagar{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
}

.principalDiv{
    max-height: 555px;
    overflow-y: scroll;
}

#btnValores{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
 
}



</style>
