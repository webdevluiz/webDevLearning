const contador = document.querySelector("#contador");
const inputElement = document.querySelector("#input");

function eventCount() {
  let length = inputElement.value.length;
  contador.innerHTML = length;

  if (length === 50) {
    inputElement.classList.add("error");
  } else if (length >= 40) {
    inputElement.classList.remove("error");
    contador.classList.add("warning");
    inputElement.classList.add("warning");
  } else {
    contador.classList.remove("warning");
    inputElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", eventCount);
