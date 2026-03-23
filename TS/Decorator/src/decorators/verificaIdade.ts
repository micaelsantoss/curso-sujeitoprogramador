export function verificaIdade(idade: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const metodoOriginal = descriptor.value; //Salvar o método original

        descriptor.value = function() { //sobrescrever o método original
            if (idade < 18) {
                console.log(`A idade ${idade} é menor que 18 anos. Acesso negado.`);
            } else {
                console.log(`A idade ${idade} é maior ou igual a 18 anos. Acesso permitido.`);
                return metodoOriginal.apply(this); //retornar o método original para ser executado
            }
        }

    }
}

