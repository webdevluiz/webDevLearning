//quis 3
// Criar um objeto user que terá todos os dados a serem mostrados
// Encontrar o elemento que receberá os dados do user e inserir esses dados por meio do loop for...on

const dataBtn = document.querySelector("#data"); // referencia ao botão de busca
const data = document.querySelector("#userData ul"); // referente ao elemento que receberá os dados

const user = { name: "luiz", age: 23, jog: "jobless", goals: "webDev" }; // Criado o objeto com as informações

function showData() {
  if (data.children[0] == null) {
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