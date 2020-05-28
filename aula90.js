const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()// Massa querbou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Adicionar 
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)
