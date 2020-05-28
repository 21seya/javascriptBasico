const carrinho =[
    '{"Nome":"Borracha","preço":3.45}',
    '{"Nome":"Caderno","preço":13.90}',
    '{"Nome":"Kit de Lapis","preço":41.22}',
    '{"Nome":"Caneta","preço":7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto)
console.log(resultado)
