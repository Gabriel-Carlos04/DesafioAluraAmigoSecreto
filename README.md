# Sorteio de Amigo Secreto Alura

Desafio Alura Amigo Secreto

## 🚀 Funcionalidades

- Sorteio de amigo secreto
- Função para garantir que a pessoa não retire seu próprio nome como amigo secreto
- Função otimizada de embaralhamento da lista de pessoas

## 🛠 Tecnologia aplicada

Javascript, HTML, CSS...

## 🕹 Uso/Exemplos

#### Atualizar Lista

```javascript
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
```
#### Função de sorteio

```javascript
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

```

## Autor

- [Gabriel Carlos](https://github.com/Gabriel-Carlos04)