<template>

<meu-painel :titulo="titulo">

  <div>
  
    

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
