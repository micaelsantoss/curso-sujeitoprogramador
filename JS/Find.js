let listagem = [5, 3, 'Micael', 2, 'Adriana']

let nome = 'Micael'

let busca = listagem.find((item) => {
    if(item === nome){
        console.log(`O nome ${nome} foi encontrado com sucesso.`);
    } else {
        console.log("Erro")
    }
}) 