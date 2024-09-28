// //Declarada o procedimento
// function saudacao(texto) {
//     console.log("Olá!");
//     console.log(texto);
// }

// //Chamada
// saudacao("teste");

// saudacao("outro teste");

//Declarada a função
function saudacao(nome) {
    let texto = "Olá! " +  nome;
    return texto;
}

//Chamada
let mensagem = saudacao("Fulano")
console.log(mensagem)