const { createApp } = Vue;

createApp({
  data() {
    return {
        titulo: 'Nueva Instancia: Mi app - Directivas',
        aparece: false,
    };
  },
}).mount("#miApp");