
import * as types from './mutation-types';

const mutations = {
    [types.AGREGAR_RESPUESTA] (state, pregunta){
        state.listaRespuestas.push(pregunta);
    }
}

export default mutations;