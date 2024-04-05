const { createApp } = Vue;

createApp({
  data() {
    return {
        titulo: 'Nueva Instancia: Mi app - Directivas ',
        aparece: false,
        frutas: ['Manzana', 'Pera', 'Banana','Uva'],
        ingredientes: [
          {'id': '001', 'name': 'Pan'},
          {'id': '002', 'name': 'Arroz'},
          {'id': '003', 'name': 'Aceite'},
          {'id': '004', 'name': 'Donas'},
        ],
        contador: 10,
        numero1: 0,
        numero2: 0,
        suma: 0,
    };
  },
  methods: {
    saludar: function () {
      console.log("saludar desde el metodo");
    },
    probandoParametros: function (a, b) {
      console.log("a: " + a + " b: " + b + " = "+ a + b);
    },
    incrementarContador: function () {
      this.contador = this.contador + 10;
    },
    sumarNumeros: function () {
      this.suma = parseInt(this.numero1) + parseInt(this.numero2);
    }

  },
}).mount("#miApp");