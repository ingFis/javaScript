let lista = [
    'ovo', 'Farinha de trigo', 'Óleo', 'Agua', 'Açucar', 'Chocolate', 'Fermento'
]

// Transforma array em string
console.log(lista.toString())

// Transforma array em string - separa como eu quiser
console.log(lista.join('-'))

// Procura o item e retorna a posição - se não achar retorna -1
console.log(lista.indexOf('chocolate'))

// Alteram o proprio array(referência) - remove o último item do array
lista.pop()
console.log(lista)

// Alteram o próprio array(referência) - remove o primeiro item do array
lista.shift()
console.log(lista)

// Alteram o próprio array(referência) - adiciona um item
lista.push('Brigadeiro')
console.log(lista)

// Adiciona item 
lista[lista.length] = 'Forma'
console.log(lista)

// Remove item do array

// Remove o item, mas mantém o lugar
// delete lista[0]
// console.log(lista)

// Remover
lista.splice(1,1)
console.log(lista)


// Concatenar 
let nome = ['Pedro', 'Miles', 'Valentin'];

let nome2 = ['Ingrid', 'Flora', 'Elisa'];

console.log(nome.concat(nome2))

// Ordem crescente
lista.sort()
console.log(lista)

// inverte Ordem
lista.reverse()
console.log(lista)