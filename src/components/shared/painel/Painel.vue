
<template>
<div class="corpo">

<div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary" id="teste">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{titulo}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" id="Listatoolbar">
        <md-toolbar class="md-transparent" md-elevation="0" >Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>credit_card</md-icon>
            <router-link to="/Pagamento">
            <span class="md-list-item-text" id="saque">Saque Digital</span>
            </router-link> 
          </md-list-item>

          <md-list-item>
            <md-icon>account_balance_wallet</md-icon>
            <router-link to="/Home"><span class="md-list-item-text" id="saldohome">Saldo</span> </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>power_settings_new</md-icon>
            <router-link to="/"><span class="md-list-item-text" id="logout">Sair</span> </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="Conteudoscreen">

        <slot class="conteudo-painel">
              <!-- Todo conteudo das páginas aqui-->
        </slot>

      </md-app-content>
    </md-app>
  </div>

  </div>


    
</template>

<script>


export default {
    props:['title'],
    name: 'app',
    name: 'Reveal',

    data(){
        return{
            titulo:'App da IF',
            menuVisible:false
        }
    }
 
}
</script>

<style>

#teste{
  background-color:#c41313;
}

#Listatoolbar{
  height: 650px;
  
}

#Conteudoscreen{
  height: 580px;
}

#saque{
  color:#262626;
  padding-right: 300px;
}

#logout{
  color:#262626;
  padding-right: 300px;
}
#saldohome{
  color:#262626;
  padding-right: 300px;
}

</style>

