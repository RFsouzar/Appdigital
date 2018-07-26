<template>

<meu-painel :titulo="titulo">
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
      menuVisible: false
    }
  }
    
}
</script>
<style>

</style>
