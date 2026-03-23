function verificar(list, num){
    let busca = list.find((item) => {
        if(item === num){
            console.log("o número está na lista")
        } else{
            console.log("o número não está na lista")
        }
    })
}

let lista = [ 5, 6, 9, 7]

verificar(lista, 55)