const { createApp } = Vue;

createApp({
    computed: {
        montoPagar: function () {
            var total = 0;
            for (let i = 0; i < this.precios.length; i++) {
                const monto = this.precios[i] * this.cantidades[i];
                total += monto;
            }
            return total * parseFloat(this.precioDollar);
        }
    },
    data() {
        return {
            precios: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 150],
            cantidades: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 175],
            productos: [
                'zapatos',
                'camisetas',
                'remeras',
                'pantalones',
                'gorras',
                'zapatillas',
                'camisas',
                'pantalones',
                'lo que sea',
                'zapatos',
            ],
            precioDollar: 18,
            kwarg: '',
            full_name: '',
            direccion: '',
            comprobante: '',

        }
    },
    watch: {
        full_name: function(nuevo){
            this.comprobante = 'Comprobante de compra de ' +  nuevo;
        },
        direccion: function(nuevo){
            this.comprobante = 'Comprobante de compra de ' +  this.full_name + ' en ' + nuevo;
        }
    },
    methods: {
        SumarVentas() {
            var total = 0;
            for (let i = 0; i < this.precios.length; i++) {
                const element = this.precios[i];
                const monto = this.precios[i] * this.cantidades[i];
                total += monto;
            }
            return total;
        },
        buscarProducto: function(){
            return lista_filtrada = this.productos.filter(
                function(valor){
                    return valor.includes(this.kwarg);
                }
            );
        }
    },
    mounted () {
        console.log("carga el vue ");
    },

}).mount('#propiedadesApp');