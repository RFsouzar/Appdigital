<template>
<div>

<meu-painel :titulo="titulo">
    
    <div class="container-fluid">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Conta</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrecom a conta">
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
            </div>
                <router-link to="/Home"><button class="btn btn-primary">Acessar</button></router-link>
                
        </form>
        </div>
     
    </meu-painel>

            

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


</style>
