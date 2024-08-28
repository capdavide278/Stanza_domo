<!-- inserire il menù a sinistra con le icone che possono essere personalizzate -->

<script>
export default{
  name: 'Sidebar',
  props:{
    stanze: Object
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

      <div v-for="(stanza,i) in stanze" :key="i">
        <v-card-text v-for="(oggetto, j) in stanza.oggetto" :key="j">
          {{ oggetto }}
        </v-card-text>
      </div>
    </v-card>
<!--     <div>
      <fa icon="user"></fa>
      <fa icon="coffee"></fa>
      <fa :icon="['fas', 'icons']" />
      <fa :icon="['fas', 'circle']" />
    </div> -->
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