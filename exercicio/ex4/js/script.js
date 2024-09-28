// Crie 1 função com parâmetros que calcule a área de um 
// quadrado e exiba em um alert

function calcularAreaQuadrado(lado) {
    let resutado = lado ** 2;
    return resutado;
}

let valor = 3;
let result = calcularAreaQuadrado(valor)
let msg = `A área do Quadrado é: ${result}m²`;

alert(msg);