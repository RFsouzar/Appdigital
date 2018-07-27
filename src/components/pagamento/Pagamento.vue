<template>
<div class="principalDiv">
<meu-painel :titulo="titulo">
    </meu-painel>
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
        <form>

              <div class="form-group">
                <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                 <div class="input-group">
                   <div class="input-group-addon">$</div>
                      <input type="text" class="form-control" id="exampleInputAmount" placeholder="00,00">
                        <div class="input-group-addon">.00</div>
                  </div>
              </div>

              <div class="container" id="btnValores">

                <md-button class="md-dense md-raised md-primary" id="btn20">+20</md-button>
                <md-button class="md-dense md-raised md-primary" id="btn50">+50</md-button>
                <md-button class="md-dense md-raised md-primary" id="btn100">+100</md-button>
                 
              </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome">
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">CPF</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CPF">
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Telefone</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefone">
            </div>
                <div class="container" id="btnpagar">
                  <router-link to="/Home"><button class="btn btn-primary">Pagar</button></router-link>
                </div>
                
        </form>
        </div>
        </div>
        </div>
    
</template>

<script>
import Painel from '../shared/painel/Painel.vue'
export default {
    components:{
    'meu-painel': Painel,

  },

  data () {
    return {
      titulo: 'App da IF',
      menuVisible: false
    }
  }
    
}
</script>
<style>

.imagem-responsiva{
  position: relative;
}
.h4{
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
