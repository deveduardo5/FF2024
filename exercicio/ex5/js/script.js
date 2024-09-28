// Crie 1 função que retone se o valor digitado é ou não é um 
// número e exiba em um alert

function verificarNumero(valor) {
    return inNaN(valor)
}

alert(`É uma letra? ${verificarNumero('L')}`);