// OPERADOR SPREAD

let numeros = [1,2,3,4];

let outros = [...numeros, 5, 6, 7, 8];

console.log(outros)


let info = {
    nome: 'Ingrid',
    sobrenome: 'Pereira',
    idade: 22
}

let end = {
    ...info,
    cidade: 'Itapevi',
    estado: 'São Paulo',
    pais: 'Brasil'
}

console.log(end)

/**********************************************************************************************/

// OPERADOR REST

// Quano não sei a quantidade de parâmetros

function add(...numeros){
    console.log(numeros)
}

add(4,5,9,8,3,254,654,87,36,94)


// DESAFIO
function adicionar(array, ...novosNomes){
    let novoArray = [...array, ...novosNomes]
    return novoArray
}

let array = ['Ingrid', 'Pedro', 'Yasmin', 'Vitória'];

let novoArray = adicionar(array, 'Pietro', 'Elisa', 'Flora')

console.log(novoArray)

/************************************************************************************************/

// ARROW FUNCTION

// // forma 01
// function somar(x,y){
//     return x+y;
// }

// // forma 02
// let somar = function(x,y){
//     return x+y;
// }

// arrow function - não tem o objeto this
let somar = (x,y) => x+y;

console.log(somar(1,6))


// let contarLetras = (nome) => {
//     return nome.length
// }

// um parâmetro, parênteses opcional
let contarLetras = nome => nome.length

console.log(contarLetras('ingrid'))

/***************************************************************************************************/

// ecmascript 6 - INCLUDES - verifica se o item está incluso - retorna true ou false

let itens = ['ovo', 'café', 'açucar', 'leite', 'macarrão', 'arroz', 'feijão']

console.log(itens.includes('café'))

// ecmascript 6 - REPEAT

console.log('er'.repeat(7))