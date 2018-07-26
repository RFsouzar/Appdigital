<template>

<div>

<meu-painel :titulo="titulo">
    </meu-painel>

<router-link to="/Pagamento"><button id="btnpaga" type="button" class="btn btn-secondary">Pagamento</button></router-link>

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

#btnpaga{
  position: absolute;
  right: 141px;
  top: 300px;

}


</style>
