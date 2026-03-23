import { data } from "react-router-dom";

//string
let tecnologia: string = "JavaScript";

//number
let valor: number = 10;

//union types, aceita mais de um tipo
let userId: string | number = 10;
userId = "10";

//type any, recebe qualquer tipo
let precoProduto: any;
precoProduto = 10;
precoProduto = true;

//boolean
let verdadeiroOuFalso: boolean = false;

//array
let names: string[] = ["Micael", "Adriana"];
let numbers: ( string | number )[] = [1, 2, 3, "4", "5"];

//tupla(possui apenas no TS)
let aluno: [string, number] = [ 'Micael', 22];

//object
let novoUsuario: object = {
    nome: "Micael",
    idade: 22,
};

//Enum
enum DesignColors{
    white = "#FFFFFF",
    black = "#000000", 
};

enum StatusPermission{
    Admin,
    User,
    Support
};

// Unknown, desconhecido, não sabe qual tipo irá receber
let produto: unknown;
produto = 10; 

// assertions, dizemos qual o tipo que queremos
let statusAtual: unknown = 1;
let mudaStatus: number = 0;

// mudaStatus = statusAtual; não funcionaria dessa forma
mudaStatus = statusAtual as number; // funciona dessa forma

// Functions
function login(username: string): string | boolean{
    
    let message = `Bem-vindo ${username}`;
    console.log(message);

    return true
}

let n1: number = 10;
let n2: number = 20;

function soma(n1: number, n2: number): number{
    return n1 + n2;
}

//Arrow Function
const retornoApi = (url: string): void => {
    console.log(`URL da API: ${url}`);
}

retornoApi("https://api.com.br");

// Valor default ou deixar ele opcional nos parametros
function cadastro(nome: string, senha: number, email = "coloque seu email", idade?: number): void{
   let data = {
    nome: nome,
    email: email,
    senha: senha,
    idade: idade
   }
   
   console.log(data);
}

cadastro("Micael", 123456);

//Rest
function somaNumeros(...numeros: number[]): number{
    let total = 0;

    for(let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    
    return total;
}

console.log(somaNumeros(1, 2, 3, 4, 5));