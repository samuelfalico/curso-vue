new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta exibido')
        },
        alterarValor(event) {
            return this.valor = event.target.value
        }
    },
})