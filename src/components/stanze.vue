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
/*           {
            name:'Bagno',
            src: 'https://www.iperceramica.it/images/tendenza/colori-e-materiali-per-bagno-in-stile-nordico/underground-steel-amb-zoom.jpg',
          }, */
          {
            name:'Cucina',
            src: 'https://shop.fattorinidesign.com/wp-content/uploads/2021/04/cucina-lineare-pratica-11-forma-2000-la-casa-moderna.jpg',
          },
          {
            name:'Cameretta',

          },
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
                 <p><b>{{ stanza.luogo }} </b></p>
            </div>
            </v-carousel-item>
            </v-carousel>
        </div>

        <!-- div per le icone con switch -->
        <div style="background-color: black;">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis officiis molestias soluta rem, maxime accusamus sit nobis in aperiam eaque ea perferendis magni illum, similique pariatur dicta! Ut, at aperiam.</p>
        </div>
    </div>
</template>
