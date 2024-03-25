<template>
  <div>
    <h1 class="title">Productos en Vitrina</h1>
    <h3>Agrega Productos al carrito</h3>

    <div class="columns is-multiline is-mobile">
      <div class="column is-3" v-for="producto in productos" :key="producto.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="producto.main_image" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ producto.name }}</p>
                <p class="subtitle is-6">{{ producto.category.name }}</p>
              </div>
            </div>
          </div>
          <div class="content" style="padding: 10px">
            <button class="button is-succes" @click="addArticulo(producto)" >Agregar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {{ getListaArticulos }}

</template>

<script>

import { useArticulosStore } from '@/stores/ArticulosStore';
import { mapState,mapActions } from 'pinia';

export default {
  data() {
    return {
      productos: [],
    };
  },
  computed: {
    ...mapState(useArticulosStore,['getListaArticulos'])
  },
  methods: {
    ...mapActions(useArticulosStore,['addArticulo']),
    cargarProductos() {
      fetch("https://servicios.neunapp.com/api/tienda/productos/lista/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.productos = data.results;
        });
    },
  },
  beforeMount() {
    this.cargarProductos();
  },
};
</script>

<style lang="scss" scoped></style>
