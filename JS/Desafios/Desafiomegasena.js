function gerarNumero(qtdNumero){
    if(qtdNumero < 6 || qtdNumero > 9){
        console.log('Erro, o número informado é inválido!')
        return [];
    }

    const numeros = [];

    while(numeros.length < qtdNumero){
        const numeroAleatorio = Math.floor(Math.random() * 60 + 1);

        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }

    console.log(numeros);
}

const sortear = gerarNumero(9);