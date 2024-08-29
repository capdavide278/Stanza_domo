<!-- prima parte carosello di stanze
seconda parte viene riportato il nome della stanza
terza parte rendere switch accesi o spenti
-->

<script>
  export default {
    name: 'stanze',
    props:{
      stanze: Object
    },

    data () {
      return {
        items: [
/*           {
            name:'Soggiorno',
            src: 'https://behomecasa.it/wp-content/uploads/2023/03/PARETE-SILENE-1024x576.jpeg',
          }, */


        ],
      }
    },
  }
</script>

<template>    
    <div>
        <div>
            <v-carousel hide-delimiters style="height: 600px;">
            <v-carousel-item
                v-for="(stanza,i) in stanze"
                :key="i"
                :src="stanza.src"
                cover
              >
            <div style="background-color: black; font-size: 25px; font-family: 'Times New Roman', Times, serif;
            color: white; padding: 0px 45%;
            ">
                 <p><b>{{ stanza.luogo }}</b></p>
            </div>
            </v-carousel-item>
            </v-carousel>
        </div>

        <!-- div per le icone con switch -->
        <div style="background-color: black; color: white;">
          <p>Qui vanno inserite le icone</p>
        </div>
    </div>
</template>
 al cambiare della foto, ho bisogno di visualizzare le voci del menù corrispondente come posso fare?