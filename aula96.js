
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho =[
    '{"Nome":"Borracha","preço":3.45}',
    '{"Nome":"Caderno","preço":13.90}',
    '{"Nome":"Kit de Lapis","preço":41.22}',
    '{"Nome":"Caneta","preço":7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)
