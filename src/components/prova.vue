<template>
    <div v-for="(film,index) in films" :key="index">
        <h2>{{ film.nome }}</h2>
        <p>{{ film.descrizione }}</p>
    </div>
</template>

<script>
export default{
    name: 'prova',
    props:{
        films: {
            type: Object,
        }
            
    }
}
</script>