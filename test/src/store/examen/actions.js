import * as types from './mutation-types';

export const agregarRespuesta = ({ commit }, pregunta) => {
    commit(types.AGREGAR_RESPUESTA,pregunta);
}