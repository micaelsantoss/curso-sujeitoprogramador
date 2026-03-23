var peso;
var altura;
var imc;
var resultado;


function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado');

    imc = peso / (altura * altura);
    
    alert(imc)
    
    if(imc < 18.5){
        resultado.innerHTML = 'Magreza';
    } else if(imc > 18.5 && imc < 24.9){
        resultado.innerHTML = 'Normal';
    } else if(imc > 24.9 && imc < 29.9){
        resultado.innerHTML = 'Sobrepeso';
    } else if(imc > 29.9 && imc < 39.9){
        resultado.innerHTML = 'Obesidade';
    } else if(imc > 40 || imc == 40){
        resultado.innerHTML = 'Obesidade Grave';  
    }
}
