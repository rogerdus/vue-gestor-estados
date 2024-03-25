<template>
  <section class="section">
    <h1 class="title">Respuestas:</h1>
    <h2 class="subtitle">
      <span class="tag is-info ml-1" v-for="(respuesta,index) in listaRespuestas" :key="index">
        {{ index + 1 }} {{ respuesta.alernativa }}
      </span>
    </h2>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
      /// lo que se pone en coputed se guarda en memoria cache
      ...mapGetters({
          listaRespuestas: 'listaRespuestas',
      })
    },
    data() {
      return {
        
      }
    },
  }
</script>