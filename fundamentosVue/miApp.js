const { createApp } = Vue;

createApp({
  data() {
    return {
        titulo: 'Nueva Instancia: Mi app - Directivas',
        aparece: false,
        frutas: ['Manzana', 'Pera', 'Banana','Uva'],
        ingredientes: [
          {'id': '001', 'name': 'Pan'},
          {'id': '002', 'name': 'Arroz'},
          {'id': '003', 'name': 'Aceite'},
          {'id': '004', 'name': 'Donas'},
        ]
    };
  },
}).mount("#miApp");