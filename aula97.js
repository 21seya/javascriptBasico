const produtos = [
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'ipad Pro',preco:4199,fragil:true},

]

console.log(produtos.filter(function(p){
    return p.preco >2500
}))