let nomes = ['micael', 'adriana', 'ana', 'mara']

let menorQueCinco = nomes.filter((item) => {
    return item.length < 5;
})

console.log(menorQueCinco);