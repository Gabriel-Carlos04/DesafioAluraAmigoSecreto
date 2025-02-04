let amigos = [];

//função para adicionar amigo
function adicionarAmigo(){
    const inputAmigo = document.getElementsByClassName('input-name')[0]; // acesso ao primeiro input
    const nomeDoAmigo = inputAmigo.value; // corrigido para 'value'

    //checagem para ver se o campo não está vazio
    if(nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
        return;
    }

    //validar se o nome já foi adicionado
    if(amigos.includes(nomeDoAmigo)){
        alert(`O nome ${nomeDoAmigo} já está na lista.`);
        return;
    }

    //Adicionar o nome dos amigos
    amigos.push(nomeDoAmigo);

    //limpar campo
    inputAmigo.value = "";

    //atualizar lista
    atualizarLista();
}

//função para atualizar lista
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpar conteúdo da lista
    listaAmigos.innerHTML = "";

    //percorrer array
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i]; // corrigido para 'amigos[i]'
        listaAmigos.appendChild(li);
    }
}

//função para selecionar amigos aleatoriamente
function sortearAmigo(){
    //ver se tem amigos disponíveis
    if(amigos.length == 0){
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    //gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // corrigido para 'amigos[indiceAleatorio]'

    //mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
