function getPreco(imposto=0, moeda='R$'){

    return `${moeda} ${this.preco * (1-this.desc) *(1+imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4569,
    desc:0.15,
    getPreco
}

global.preco = 20
global.desc = 0.15
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco:4999,desc:0.15}
console.log(getPreco.call(carro))