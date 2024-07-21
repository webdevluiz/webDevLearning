let inputElement = document.querySelector("input"); //encontrei a variavel
let contador = document.querySelector("#contador");

function countInputs(event) {
  //let inputUse = inputElement.value; //peguei o valor da variável
  //console.log(inputUse); //demonstrei na tela

  // console.log(inputElement.value); //possível resumir

  let text = event.target.value; //Maneira mt nerdola de encontrar o evento de input e trackea-lo
  console.log(text);

  contador.innerHTML = inputElement.value.length;
}

inputElement.addEventListener("input", countInputs);
