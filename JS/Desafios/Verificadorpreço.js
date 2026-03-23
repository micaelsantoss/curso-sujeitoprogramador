const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

products.map((item) => {
    if(item.price == 20){
        console.log(`O item ${item.name} tem o valor de 20 reais`)
    }
})

products.filter()