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