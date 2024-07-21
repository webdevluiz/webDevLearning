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
