<script>
import Sidebar from './components/Sidebar.vue'
import VisualizzaStanza from './components/VisualizzaStanza.vue'
import Stanze from './components/Stanze.vue'
import Footer from './components/Footer.vue'
/* import prova from './components/prova.vue' */

export default{
  components:{
    Sidebar,
    VisualizzaStanza,
    Stanze,
    Footer,
    /* prova */
  },
  data() {
    return {
/*       films: [
      {
        nome: 'Inception',
        descrizione: 'Un thriller psicologico che esplora la manipolazione dei sogni.'
      },
      {
        nome: 'Incredibili',
        descrizione: 'una normale famiglia di supereroi.'
      }
    ], */

    accessori:
      [ {nome:'Lampada salone'},
        {nome:'Luci salone'},
        {nome:'Luci Cucina'},
        {nome:'Alexa'},
        {nome:'Luci bagno'},
        {nome:'Luci cameretta'},
        {nome:'Tv Soggiorno'},
        {nome:'Veneziane'},
        {nome:'Condizionatore'}
      ]
    
    };
},
}

</script>

<template>
  <header>
    <VisualizzaStanza />
  <!--   <prova :films="films"></prova> -->
  </header>

  <main style="display: grid;grid-template-columns: auto 1fr; column-gap: 20px;">
      <Sidebar :accessori="accessori"></Sidebar>
      <Stanze></Stanze>
  </main>

<footer>
  <Footer></Footer>
</footer>
</template>

<style scoped>

</style>
