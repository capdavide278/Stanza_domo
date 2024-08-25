<!-- inserire il menù a sinistra con le icone che possono essere personalizzate -->

<script>
export default{
  data(){
    return{
      accessori:[
        {nome:'Lampada salone'},
        {nome:'Luci salone'},
        {nome:'Luci Cucina'},
        {nome:'Alexa'},
        {nome:'Luci bagno'},
        {nome:'Luci cameretta'},
        {nome:'Tv Soggiorno'},
        {nome:'Veneziane'},
        {nome:'Condizionatore'}
      ]
    }
  }
}
</script>

<template>
<div style="width: 380px;">

    <v-card height="100%">
      <v-card-title class="d-flex align-center" style="background-color: #A8A8A8;">
        <span class="text-h5">Menu</span>
      </v-card-title>
      
      <v-spacer></v-spacer>

      <v-card-text 
        v-for="(accessorio,i) in accessori"
          :key="i"
          :src="accessorio.nome"
          >
          {{ accessorio.nome }}
      </v-card-text>
    </v-card>
</div>
</template>


<style scoped>
div, span{   
  font-family: "Buda", serif;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  }
</style>