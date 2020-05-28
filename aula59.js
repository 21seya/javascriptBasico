const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a,b,operacao = soma){
    console.log(operacao())
}

imprimirResultado(3,4)
imprimirResultado(3,4,function(x,y){
    return x - y
})

imprimirResultado(3,4,(x,y) => x * y)

const pessoa ={
    Falar: function(){
        console.log('Opa')
    }
}

pessoa.Falar()