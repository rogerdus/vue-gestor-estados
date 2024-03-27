const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      numero1: 1,

    };
  },
}).mount("#app");


createApp({
    data() {
        return {
            mensaje: "Hola desde instancia 2"
        };
    },
}).mount("#instanciaDos");