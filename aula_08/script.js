// DESCONSTRUINDO ARRAY

// é feito na ordem que o array é criado

let pessoa = ['Ingrid Pereira da Silva','Ingrid', 'Pereira', 22, '@ingrid'];

let [,nome, sobrenome, idade, instagran] = pessoa;

console.log(nome, sobrenome, idade, instagran);


// Criar um array desconstruído
let [user='Ingrid',credito, debito, saldo] = [,0,0,0];

console.log(user, credito, debito, saldo)

// Com função

function criar(){
    return [1,2,3];
}

let [a, b, c] = criar();

console.log(a, b, c)

