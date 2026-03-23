function convidados(...nomes){
    console.log(nomes);
}

convidados('Micael', 'Adriana', 'Markin')

function sorteador(...numeros){
    let numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log(`O número sorteado foi: ${numeros[numeroGerado]}`);
}

sorteador(23, 21, 46, 96, 45, 87, 34, 62, 86, 27)