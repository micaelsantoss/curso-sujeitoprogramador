let primeiros = [1, 2, 3]

let numeros = [...primeiros, 4, 5, 6]

console.log(numeros)

let pessoa = {
    nome: "Micael",
    idade: 22,
    cargo: 'operador'
}

let novaPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Uberlândia-MG',
    celular: 999999-9999
}

console.log(novaPessoa);