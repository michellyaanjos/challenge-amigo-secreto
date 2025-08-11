//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Array para armazenar os nomes
let amigos = [];

// 2. Função que captura o valor do campo de entrada, para obter o texto inserido pelo usuário
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    console.log(nome);

    // 3. Garantindo que o campo não esteja vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    } 
    
    // 4. Atualizando o array amigos para armazenar os nomes
    amigos.push(nome); // Adiciona a lista
    console.log(amigos); // Para que eu consiga visualizar no console
    exibirListaNaTela();// 8. Exibe uma lista para o usuário na tela

    limparCampo(); // 6. Limpar campo de entrada

}

// 5. Função para limpar campo de entrada
function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}

// 7. Função para atualizar e exibir lista de amigos
function exibirListaNaTela() {
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = '';

    amigos.forEach(amigo => {
        let amigoNaLista = document.createElement('li');

        amigoNaLista.textContent = amigo;

        elementoLista.appendChild(amigoNaLista);
    });
    
}










