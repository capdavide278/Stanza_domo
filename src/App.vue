<script setup>
import Sidebar from './components/Sidebar.vue'
import VisualizzaStanza from './components/VisualizzaStanza.vue'
import Stanze from './components/Stanze.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <header>
    <VisualizzaStanza />
  </header>

  <main style="display: grid;grid-template-columns: auto 1fr; column-gap: 20px;">
      <Sidebar></Sidebar>
      <Stanze></Stanze>
</main>

<footer>
  <Footer></Footer>
</footer>
</template>

<style scoped>

</style>
