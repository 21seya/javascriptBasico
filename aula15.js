let valor // não iniciado


valor = null // ausência de valor

console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)

produto.preco = 2.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)