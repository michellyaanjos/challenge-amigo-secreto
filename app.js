//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes
let amigos = []

// Função que captura o valor do campo de entrada, para obter o texto inserido pelo usuário
function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;
    console.log(nomes);

    // Garantindo que o campo não esteja vazio
    if (nomes === '') {
        alert('Por favor, insira um nome.');
    // Atualizando o array amigos para armazenar os nomes
    } else {
        amigos.push(nomes);
        console.log(amigos);
        // Limpar campo de entrada
        limparCampo()
    }
}

// Função para limpar campo de entrada
function limparCampo() {
    nomes = document.getElementById('amigo');
    nomes.value = '';
}



