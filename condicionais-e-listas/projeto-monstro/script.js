new Vue({
    el: '#app',
    data: {
        width1: '100',
        width2: '100',
        iniciargame: true,
        perdeu: false,
        acabou: false,
        ganhou: false,
        mostrarLog: false,
        vermelho: 'red',
        azul: 'slateblue',
        logs: [],
    },
    watch: {
        width1(novo, antigo) {
            console.log(novo + ' - ' + antigo)
        },
        width2(novo, antigo) {
            console.log(novo + ' - ' + antigo)
        },
    },
    computed: {
        reverseLogs() {
            return this.logs.slice().reverse()
        },
    },
    methods: {
        escolha(atk) {
            let valorPlayer
            let valorMonstro
            let calculo1 = 0
            let calculo2 = 0

            this.width1 = this.width1.replace('%','')
            this.width2 = this.width2.replace('%','')
            this.mostrarLog = true
            switch (atk) {
                case 1:
                    valorPlayer = Math.floor(Math.random() * 9) + 7
                    valorMonstro = Math.floor(Math.random() * 5) + 5
                    console.log('escolha(): ' + this.width1)
                    calculo1 = parseInt(this.width1) - valorPlayer
                    this.logs.push("JOGADOR ATINGIU MONSTRO COM " + valorMonstro + ".")
                    this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${valorPlayer}.`)
                    if (calculo1 <= 0) {
                        this.width1 = '0%'
                        this.acabou = true;
                        this.iniciargame = true;
                    } else {
                        this.width1 = `${calculo1}%`
                    }
                    calculo2 = parseInt(this.width2) - valorMonstro
                    if (calculo2 <= 0) {
                        this.width2 = '0%'
                        this.acabou = true;
                        this.ganhou = true;
                        this.iniciargame = true;
                    } else {
                        this.width2 = `${calculo2}%`
                    }
                    break;
                
                case 2:
                    valorPlayer = Math.floor(Math.random() * 9) + 7
                    valorMonstro = Math.floor(Math.random() * 6) + 13
                    console.log('escolha(): ' + this.width1)
                    calculo1 = parseInt(this.width1) - valorPlayer;
                    calculo2 = parseInt(this.width2) - valorMonstro
                    this.logs.push("JOGADOR ATINGIU MONSTRO COM " + valorMonstro + ".")
                    this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${valorPlayer}.`)
                    if (calculo1 <= 0) {
                        this.width1 = '0%'
                        this.acabou = true;
                        this.iniciargame = true;
                    } else {
                        this.width1 = `${calculo1}%`
                    }
                    if (calculo2 <= 0) {
                        this.width2 = '0%'
                        this.acabou = true;
                        this.ganhou = true;
                        this.iniciargame = true;
                    } else {
                        this.width2 = `${calculo2}%`
                    }
                    break;

                case 3:
                    valorPlayer = Math.floor(Math.random() * 6) + 8
                    valorMonstro = Math.floor(Math.random() * 3) + 8
                    valorTotal = valorPlayer - valorMonstro
                    console.log('valor total: ' + valorTotal)
                    console.log('valor no width: ' + this.width1)
                    calculo1 = parseInt(this.width1) + valorTotal;
                    this.logs.push("JOGADOR GANHOU FORÇA DE " + valorPlayer + ".")
                    this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${valorMonstro}.`)
                    console.log('to olhando o calculo1: ' + calculo1)
                    if (calculo1 >= 100) {
                        this.width1 = '100%'
                        console.log('entrei aqui no if')
                    } else {
                        console.log('entrei aqui no else')
                        this.width1 = `${calculo1}%`
                    }
                    this.width2 += '%'
                    break;
            
                default:
                    break;
            }
        },
        iniciar() {
            this.width1 = '100%'
            this.width2 = '100%' 
            this.iniciargame = false
            this.perdeu = false
            this.ganhou = false
            this.acabou = false
            this.mostrarLog = false
            this.logs = []
        },
        desistir() {
            this.iniciargame = true
        },
    },
})