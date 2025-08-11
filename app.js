// Array para armazenar os nomes
let amigos = [];

// Função que captura o valor do campo de entrada, para obter o texto inserido pelo usuário
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    console.log(nome);

// Garantindo que o campo não esteja vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    } else {
// Atualizando o array amigos para armazenar os nomes
        amigos.push(nome); // Adiciona a lista
        console.log(amigos);
        exibirListaNaTela();
        limparCampo();
    }
}

// Função para limpar campo de entrada
function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}

// Função para atualizar e exibir lista de amigos
function exibirListaNaTela() {
    let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = ''; // Impede duplicados ao atualizar

    amigos.forEach(amigo => {
        let amigoNaLista = document.createElement('li');
        amigoNaLista.textContent = amigo;
        elementoLista.appendChild(amigoNaLista);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos == 0) { // Verificando que o array amigos não esteja vazio
        alert('Por favor, insira um nome.');
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um nome sorteado
        let nomeSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${nomeSorteado}`; // Exibe amigo sorteado
    }
}















