//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preço:1.99, tag:'promoção'
})

console.log('Extensível:',Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa  = {nome:'Jessica',idade:36}
Object.seal(pessoa)
console.log('Selado',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)