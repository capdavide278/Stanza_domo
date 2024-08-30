<template>
  <header>
    <VisualizzaStanza />
  </header>

  <main style="display: grid;grid-template-columns: auto 1fr; column-gap: 20px;">
      <div>
        <Sidebar :stanze="stanze" @messaggio="riceviMessaggio"></Sidebar>
        <p>{{ messaggioRicevuto }}</p>
      </div>
      <Stanze :stanze="stanze" :messaggio="messaggioRicevuto"></Stanze>
  </main>
<footer>
  <Footer></Footer>
</footer>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import VisualizzaStanza from './components/VisualizzaStanza.vue'
import Stanze from './components/Stanze.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'

export default{
  components:{
    Sidebar,
    VisualizzaStanza,
    Stanze,
    Footer,
  },
  setup() {
    const messaggioRicevuto = ref('');

    const riceviMessaggio = (messaggio) => {
      // Aggiorna il messaggio ricevuto
      messaggioRicevuto.value = messaggio;
    };
    return {
      messaggioRicevuto,
      riceviMessaggio
    };
  },
  data() {
    return {
    stanze:
      [ 
        { 
          oggetto:['Lampada salone','Condizionatore salone', 'Televisione','Veneziane'],
          luogo:'Soggiorno',
          src: 'https://behomecasa.it/wp-content/uploads/2023/03/PARETE-SILENE-1024x576.jpeg'
        },
        {
          oggetto:['Luci bagno'],
          luogo:'Bagno',
          src: 'https://www.iperceramica.it/images/tendenza/colori-e-materiali-per-bagno-in-stile-nordico/underground-steel-amb-zoom.jpg',
        },
/*         {oggetto:'Luci Cucina'},
        {oggetto:'Alexa'},
        {oggetto:'Luci bagno'},
        {oggetto:'Luci cameretta'},
        {oggetto:'Tv Soggiorno'},
        {oggetto:'Veneziane'},
        {oggetto:'Condizionatore'} */
      ],
    };
  }
}



</script>


<style scoped>

</style>
