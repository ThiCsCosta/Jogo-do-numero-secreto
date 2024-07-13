// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, 
// que serão recebidos como parâmetro.
// let magreza = 18.5;
// let normal = 19;
// let sobrePeso = 25;
// let obesidade = 30;
// let obesidadeGrave = 40;
/* --------------------------------------------------------------------------------
function imc(altura, peso){

    let seuImc = peso / (altura * altura);
    return seuImc;
}
console.log(`Seu índice de massa corporal é : ${imc(1.60, 69).toFixed(2)}`);
-------------------------------------------------------------------------------- */ 

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial (numero){
    if(numero < 0){
        return `Fatorial ${numero} não pode ser definido para números negativos`;
    }
    else if(numero === 0 || numero === 1){
        return 1;
    }

    let resultado = 1;
    for(let i = 2; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(`O resultado do fatorial é: ${fatorial(6)}`);

