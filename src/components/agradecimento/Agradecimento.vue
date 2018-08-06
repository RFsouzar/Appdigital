<template>

<meu-painel :titulo="titulo">


  <div>
  
    <md-card class="md-accent" md-with-hover id="teste123">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Transação Concluída!</div>
          <!--<div class="md-subhead">With hover and ripple effects</div>-->
        </md-card-header>

        <md-card-content>
          Obrigado por utilizar nossos serviços.
        </md-card-content>

        <md-card-actions>
          <md-button id="actionbutton">Sair</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

  </div>


    </meu-painel>
    
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
      
    }
  },

  
    
}
</script>
<style scoped>

#teste123{
  background: #ddd9ce;
  color: black;
}

#actionbutton{
 color:black;
 background: #989eac;
}

</style>
