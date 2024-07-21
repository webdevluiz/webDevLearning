// let tittle = document.body.querySelector(`#titulo`);
// console.log(tittle);

// para contexto do que foi feito: https://www.udemy.com/course/100-days-of-code-web-development-bootcamp/learn/lecture/26385720#content

let h1 = document.body.children[0];
console.dir(h1);

console.dir(h1.parentElement);

console.dir(h1.nextElementSibling);

let h1_2 = document.getElementById("titulo");
console.dir(h1_2);

let para = document.querySelector(`#paragrafo`);
console.dir(para);

console.log(para.textContent);

function mudar() {
  para.textContent += "e estou tentando contatena-lo";
}

console.log(para.textContent);
function adicionar() {
  let ancora = document.createElement("a");
  ancora.href = "https://google.com"
  ancora.textContent = "Acesse o google"

  let p1 = document.querySelector("p");
  p1.append(ancora);
}
