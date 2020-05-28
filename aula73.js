const produto = new Object
produto.nome = 'mesa'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:'Raul',
        idade:34,
        endereco:{
            logradouro:'Rua Souza Silva',
            numero:123
        }
    },
    condutores:[{
        nome:'Lins',
        idade:45
    },{
        nome:'Luciana',
        idade:55
    }]
}