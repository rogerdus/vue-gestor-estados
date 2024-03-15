const mutations = {
    ['AGREGAR_RESPUESTA'] (state, pregunta){
        state.listaRespuestas.push(pregunta);
    }
}

export default mutations;