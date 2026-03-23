"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaIdade = verificaIdade;
function verificaIdade(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value; //Salvar o método original
        descriptor.value = function () {
            if (idade < 18) {
                console.log(`A idade ${idade} é menor que 18 anos. Acesso negado.`);
            }
            else {
                console.log(`A idade ${idade} é maior ou igual a 18 anos. Acesso permitido.`);
                return metodoOriginal.apply(this); //retornar o método original para ser executado
            }
        };
    };
}
