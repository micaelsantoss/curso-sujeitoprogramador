"use strict";
// Generics
/*

    Permite criar estruturas que podem ser usadas com diferentes tipos de dados.
    Isso é útil para criar funções e classes que podem trabalhar com qualquer tipo de dado


    Alguns padrões comuns de uso de generics incluem:
    S => State;
    T = Type;
    E = Element;
    K = Key;
    V = Value;
    P = Props;
    R = Result;
    A = Action;
    U = User;
*/
function repositorio() {
    let dados;
    function setDados(dadosRecebidos) {
        dados = dadosRecebidos;
    }
    function getDados() {
        return dados;
    }
    return {
        setDados,
        getDados
    };
}
const repo1 = repositorio();
repo1.setDados('Teste generics');
console.log(repo1.getDados());
const repo2 = repositorio();
repo2.setDados(123);
console.log(repo2.getDados());
const repo3 = repositorio(); // Erro de compilação, pois boolean não é permitido
const repo4 = repositorio();
repo4.setDados('Teste generics');
repo4.setDados(123); // Funciona com string ou number
