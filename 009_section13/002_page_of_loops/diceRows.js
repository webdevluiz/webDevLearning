//quis 4
//enquando o número mostrado não for o escolhido, refazer o loop.

const diceBtn = document.querySelector("#dice"); //identificador do botão

function rolagemDeDados() {
  //função tensa.
  return Math.ceil(Math.random() * 6); //math.randon - entrega um numero entre 0 < e <= 1;
  //math.floor - corta as casas decimais do numero entregue e arredonda para baixo.
  //6 multiplica o math.ramdom() para garantir que sera um valor entre 0 e 1
}

function diceRows() {
  const alvo = document.querySelector("#target").value; // recolhe o valor elvo

  const lista = document.querySelector("#listOfRows"); // identifica onde está a lista a ser criada
  lista.textContent = ""; //limpa a lista para garantir o histórico apenas desse caso

  let numeroDePassos = 0; //zera o contador de rolagens desse turno

  let i = false; // garante uma condição a ser suprida
  while (!i) {
    const numeroRecebidoDaRolagem = rolagemDeDados(); //evoca um número aleatório que será comparado ao valor alvo
    i = numeroRecebidoDaRolagem == alvo; //entrega a comparação entre o número retirado e o alvo como valor para a condição

    numeroDePassos++; // incrementa a rolagem

    const ElementoDaLista = document.createElement("li"); // cria o elemento que será adicionado ao histórico da lista
    ElementoDaLista.textContent =
      "Rolada " + numeroDePassos + " caiu em " + numeroRecebidoDaRolagem; // adiciona o conteúdo ao elemento criado
    lista.append(ElementoDaLista); // adiciona o elemento a lista
  }

  const passosDados = document.querySelector("#steps"); //identifica o elemento que contará quantos passos foram dados
  passosDados.textContent = numeroDePassos; // adiciona a contagem de passos

  const numeroAlvo = document.querySelector("#targetDice"); //identifica aonde será mostrado o alvo dessa busca
  numeroAlvo.textContent = alvo; //adiciona o alvo a página.
}

diceBtn.addEventListener("click", diceRows); //gatilho do evento
