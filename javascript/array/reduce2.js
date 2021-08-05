const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Retorne todos alunos são bolsista?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
let resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(resultado)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
resultado = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(resultado)