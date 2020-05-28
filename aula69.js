function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('Computador',2000,00))
console.log(criarProduto('Celular',600,00))