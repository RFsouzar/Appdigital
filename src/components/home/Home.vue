<template>

<div>
<meu-painel :titulo="titulo">
    <md-card>
   <md-card-header>
        <div class="md-title" style="font-size:18px;">Bem Vindo!</div>
      </md-card-header>

      <md-card-content>
        <div class="container" id="divhome">
          <div class="container" id="divsubhome">
              <h5 style="text-align:center;"> Saldo Disponivel: </h5>
                <div class="container" style="text-align:center;">
                <!--<textarea name="origemvalor" id="origemvalor"  rows="1" readonly></textarea>-->
                <h5>R$ {{origemvalor}}</h5>
                
              </div>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <div class="container">
        
          </div>
      </md-card-actions>

      </md-card>
  
    </meu-painel>


      
    </div>
</template>


<script>
import Painel from '../shared/painel/Painel.vue'

export default {
  name:'Home',
  components:{
    'meu-painel': Painel,

  },

  data () {
    return {
      titulo: 'App da IF',
      menuVisible: false,
      origemvalor:''
    }
  },

  /*created(){

   this.$http.get('https://my-json-server.typicode.com/typicode/demo/profile')
      .then(res => res.json())
      .then(origemvalor => this.name = name, err => console.log(err));
      
        console.log(res);  

  }*/

  created() {

    let promise = this.$http.get('https://my-json-server.typicode.com/typicode/demo/profile');
    promise.then(res => res.json())
    .then( fotos => this.origemvalor = fotos.name)

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
    background:rgb(199, 198, 198);
    color:white;
    width: 251px;
    height: 110px;
    align-items: center;
    -webkit-justify-content: center;
    font-size: 12px;
    margin-bottom: 10px;
  }

  #divsubhome{
    background: rgb(63, 63, 63);
    margin-top:11px; 
    width: 100%;
    padding-top: 22px;  
  }
#btnsair{
  background:#c41313;
  height: 30px;
  font-style: italic;
  font-size: 12px;
}
#btnpgtm{
  background:#c41313;
  height: 30px;
  font-style: italic;
  font-size: 12px;
}

#origemvalor{
  border: none;
  width: 155px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  background:rgb(63, 63, 63);
  text-align: center;
  font-size: 15px;
}



</style>
