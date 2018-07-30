<template>

<meu-painel :titulo="titulo">

    <input type="text" name="telefone" id="telefone" maxlength="15" />



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
<style>

</style>
