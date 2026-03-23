let pessoa = {
    nome: "Micael",
    sobrenome: "Santos",
    idade: 22
}

const {nome:nomePessoa, sobrenome, idade} = pessoa;
console.log(sobrenome);
console.log(nomePessoa);

let nomes = ["Micael", "Adriana", "Dani"];
let { 0:Micael, 1:segundaPessoa} = nomes;

console.log(segundaPessoa);