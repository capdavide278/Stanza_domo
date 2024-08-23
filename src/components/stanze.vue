<!-- prima parte carosello di stanze
seconda parte viene riportato il nome della stanza
terza parte rendere switch accesi o spenti
-->

<script>
  export default {
    data () {
      return {
        items: [
          {
            name:'Stanza1',
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            name:'Stanza1',
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            name:'Stanza1',
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            name:'Stanza1',
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<template>    
    <div>
        <div>
<!--             <div style="background-color: green;">
                 <p>Nome della stanza da visualizzare</p>
            </div> -->
            <v-carousel hide-delimiters style="height: 600px;">
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
            >
            <div style="background-color: green;">
                 <p>Nome della stanza da visualizzare</p>
            </div>
            </v-carousel-item>
            </v-carousel>
        </div>

        <!-- div per le icone con switch -->
        <div style="background-color: blueviolet;">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis officiis molestias soluta rem, maxime accusamus sit nobis in aperiam eaque ea perferendis magni illum, similique pariatur dicta! Ut, at aperiam.</p>
        </div>
    </div>
</template>
