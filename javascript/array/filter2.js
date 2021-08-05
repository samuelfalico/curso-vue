Array.prototype.filter2 = function(callback) {
    const newArray = [];
    //console.log(callback)
    //console.log(this)
    for (let i = 0; i < this.length; i++) {
        // console.log(this[i])
        // console.log(this)
        // console.log(callback(this[i]))
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter2(caro).filter2(fragil)

console.log(resultado)