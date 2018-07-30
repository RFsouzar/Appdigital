<template>

<div>
<meu-painel :titulo="titulo">
    <md-card>
   <md-card-header>
        <div class="md-title">Bem Vindo!</div>
      </md-card-header>

      <md-card-content>
        <div class="container" id="divhome">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button>Sair</md-button>
        <router-link to="/Pagamento"><md-button>Pagamentos</md-button></router-link>
      </md-card-actions>

      </md-card>
  

  <div class="container" id="divbtnpaga">
          <router-link to="/Pagamento">
          <button id="btnpaga" type="button" class="btn btn-secondary">Pagamento</button>
          </router-link>
      </div>


    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item to="/components/bottom-bar/home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/components/bottom-bar/favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
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



#divbtnpaga{
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
  padding-top: 300px;
}

.phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }

  #divhome{
    background:gray;
    color:white;
    width: 210px;
    height: 150px;
    align-items: center;
  -webkit-justify-content: center;
    font-size: 12px;
    margin-bottom: 10px;
  }


</style>
