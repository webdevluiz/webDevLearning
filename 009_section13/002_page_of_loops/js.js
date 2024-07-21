//quis 1
// pegar um valor numérico entregue pelo usuário no (input type="num") e gerar uma função que some todos os valores que o precedem, subtraindo 1 deste valor até chegar a 0.
// Inserir o valor na página no elemento (p id="resultSum"), por meio de um evento que evoca a função já criada anteriormente.

const sumBtn = document.querySelector("#calculating"); //encontrado e armazenado o endereço de acesso para o botão da sessão de calcular.

function somaDecrescente() {
  const numeroEntregue = document.querySelector("#sum"); //craido um endereço para recolher o numero entregue pelo usuário.

  let result = 0; //garantindo que a variavel de entrega de resultado será numérica e estará limpa.

  for (let i = numeroEntregue.value; i > 0; i--) {
    //crio um loop que decrescerá apartir do valor entregue até 0.
    result += Number(i); //somo os valores de i, garantindo que serão numéricos.
  }

  // const resposta = document.querySelector("#resultSum"); //criado endereço para modificar o elemento de resposta.
  // resposta.innerHTML = "A soma é igual a: "+result; // gerando a resposta que será escrita na página.
  document.querySelector("#resultSum").innerHTML =
    "A soma é igual a: " + result; //maneira "resumida" de produzir o mesmo retorno sem o uso de variaveis.
}

sumBtn.addEventListener("click", somaDecrescente); //criado o evento que evocará a função de adição.

//quis 2
// adicionar uma classe aos elementos ancoras quando o botão for apertado

const highlightBtn = document.querySelector("#highlighting"); //endereço referente ao botão que gerará o evento.

function focarAncoras() {
  const ancoras = document.querySelectorAll("#highlight a"); // variavel que armazenará todas as repetições de ancoras encontradas em #highlight, necessário utilizar All para recolher todos os casos.

  for (const ancora of ancoras) {
    ancora.classList.add("foco"); // adição da classe em todas as ancoras correspondentes.
  }
}

highlightBtn.addEventListener("click", focarAncoras); // instanciação do evento

// Teste quis 2

// function clicked () {
//     console.log("click");
// }

// highlightBtn.addEventListener("click", clicked);

//quis 3
// Criar um objeto user que terá todos os dados a serem mostrados
// Encontrar o elemento que receberá os dados do user e inserir esses dados por meio do loop for...on

const dataBtn = document.querySelector("#data"); // referencia ao botão de busca
const data = document.querySelector("#userData ul"); // referente ao elemento que receberá os dados

const user = { name: "luiz", age: 23, jog: "jobless", goals: "webDev" }; // Criado o objeto com as informações

function showData() {
  if (data.innerHTML != "") {
    // condição para testar se os dados estão vazios.
    for (let i in user) {
      //lop em objetos que passa por todas suas propriedades.
      const addList = document.createElement("li"); //criação do elemento a ser inserido
      const content = i.toUpperCase() + ": " + user[i];
      addList.innerHTML = content;
      data.append(addList);

      //   //possível reescrever assim
      //   document.createElement("li").innerHTML = i.toUpperCase + ": " + user[i];
      //   data.append(document.createElement("li"));

      //   //ou assim ainda
      //   data.append(
      //     (document.createElement("li").innerHTML =
      //       i.toUpperCase + ": " + user[i])
      //   );
    }
  }
}
dataBtn.addEventListener("click", showData); //evento gatilho

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
