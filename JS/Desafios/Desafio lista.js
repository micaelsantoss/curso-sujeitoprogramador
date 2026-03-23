let produtos = [ 'Computador', 'Telefone', 'Mouse', 'Teclado']

console.log(produtos);
console.log(produtos.length);

produtos.splice(2, 1);
console.log(produtos);
console.log(produtos.length);
 
let nome = 'Computador'

let listagem = produtos.find((item) => {
    if(item === nome){
        console.log(`O item ${nome} existe na lista de produtos`);
    }else{
        console.log('erro')
    }
})

