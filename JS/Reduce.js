let numeros = [3, 5, 9, 2, 8]

let total = numeros.reduce((acumulador, numero) => {
    console.log(`Total até o momento: ${acumulador}`);
    console.log(`Número atual: ${numero}`);

    return acumulador += numero;
})

console.log("total do reduce " + total);