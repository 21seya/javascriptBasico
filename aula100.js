Array.prototype.reduce2 = function(callback,ValorInicial){
    const IndiceInicial = ValorInicial ? 0 : 1
    let acumulador = ValorInicial ||  this[0]
    for(let i = 1; i<this.length;i++){
        acumulador = callback(acumulador,this[i])
    }
}

const soma = (total,valor) => total +valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))
