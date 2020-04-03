
function tratarErrorLancar(){
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome:erro.name,
        mensagem:erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){
        tratarErrorLancar(e)
    }finally{
        console.log('final');
    }
 
}

const obj = {name:'Wallace'}
imprimirNomeGritado(obj)
