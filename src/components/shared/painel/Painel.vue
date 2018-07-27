
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

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="teste">

        <slot></slot>

          <!--<div id="imagem-responsiva">
    <img src="../static/B24horasdigital.png">
     </div>-->

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

</style>

