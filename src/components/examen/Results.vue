<template lang="">
    <div class="notification">
        <h3 class="title is-3"> Tu puntuacion es: {{ puntos }} </h3>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            puntos: 0
        }
    },
    computed: {
        ... mapGetters({
            listaRespuestas: 'listaRespuestas'
        }),
    },
    methods: {
        calcularPuntos: function () {
            for (let i = 0; i < this.listaRespuestas.length; i++ ){
                const element = this.listaRespuestas[i]
                this.puntos = this.puntos + element.puntos
            }
        }
    },
    beforeMount() {
        this.calcularPuntos();
    },
}
</script>
<style lang="">
    
</style>