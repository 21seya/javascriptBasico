function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(9.2)

function seForVeradeEuFalo(valor){
    if(valor){
        console.log('É verdade ....'+ valor)
    }
}


seForVeradeEuFalo()
seForVeradeEuFalo(null)
seForVeradeEuFalo(undefined)
seForVeradeEuFalo(NaN)
seForVeradeEuFalo('')
seForVeradeEuFalo(0)
seForVeradeEuFalo(-1)

