import { defineStore } from "pinia";

export const useArticulosStore = defineStore('articulosStore', {
    state: () => ({
        listaArticulos: []
    }),
    getters: {
        getListaArticulos: (state) => {
            return state.listaArticulos;
        }
    },
    actions: {
        addArticulo(producto) {
            this.listaArticulos.push(producto);
        }
    },

})